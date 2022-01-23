export default (function () {
  const clearCookies = () => {
    return new Promise((resolve, reject) => {
      try {
        const c = document.cookie.split(";");
        for (const i in c) {
          if (c[i]) {
            document.cookie = `${/^[^=]+/.exec(c[i])[0]}=;`;
          }
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  const getCookie = (cname) => {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        const value = c.substring(name.length, c.length);
        if (!!value && value?.length > 0) {
          return value;
        }
      }
    }
    return "";
  };

  const setCookie = (cName, cValue) => {
    const date = new Date();
    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
    const expires = `expires= ${date.toUTCString()}`;
    document.cookie = `${cName}=${cValue};${expires};path=/`;
  };

  return {
    setCookie,
    getCookie,
    clearCookies,
  };
})();
