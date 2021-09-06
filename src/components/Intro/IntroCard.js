import React, { useState, useEffect } from "react";
import ProfilePhoto from "../../assets/ProfilePhoto.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchIntro } from "../../store/dispatchers/user.dispatch";
import {
  introDetails,
  currentRole,
} from "../../store/selectors/intro.selector";
import "./introCard.scss";
import { History } from "..";
function IntroCard() {
  const dispatch = useDispatch();
  const introdutionDetails = useSelector(introDetails);
  const role = useSelector(currentRole);
  useEffect(() => {
    dispatch(fetchIntro({}));
  }, []);

  const [showMore, setShowMore] = useState(false);
  const [showMoreLink, setShowMoreLink] = useState(true);
  function displayName() {
    return (
      <div className="intro-name" title="Name">
        <span>
          {introdutionDetails?.firstName} {introdutionDetails?.lastName}
        </span>
      </div>
    );
  }

  function displayRole() {
    return (
      <div className="intro-role">
        <div title="Company">{role?.company}</div>
        <div title="Role">{role?.position}</div>
      </div>
    );
  }

  function displayMore() {
    return <div className="intro-more"></div>;
  }

  function displayExperience() {
    return (
      <div className="intro-experience">
        <History history={introdutionDetails?.role}></History>
      </div>
    );
  }

  function displayMyWork() {
    return <div className="intro-work"></div>;
  }

  return (
    <div className="intro-card">
      <img src={ProfilePhoto}></img>
      {displayName()}
      {displayRole()}
      {showMoreLink ? (
        <a onClick={(e) => setShowMore(!showMore)}>more...</a>
      ) : null}
      {showMore ? (
        <div className="intro-history">
          {displayExperience()}
          {displayMyWork()}
        </div>
      ) : null}
    </div>
  );
}

export default IntroCard;
