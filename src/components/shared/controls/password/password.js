import React from "react";
import { TextField, IconButton, ICONS, InputAdornment } from "../..";
export default function Password(props) {
  const [showPassword, setPasswordVisibility] = React.useState(false);
  const [inputType, setInputType] = React.useState("password");

  const adornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setPasswordVisibility(!showPassword)}
          edge="end"
        >
          {!showPassword ? <ICONS.VisibilityOff /> : <ICONS.Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  };

  React.useEffect(() => {
    setInputType(showPassword ? "text" : "password");
  }, [showPassword]);

  return <TextField {...props} InputProps={adornment} type={inputType} />;
}
