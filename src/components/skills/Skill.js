import React from "react";
import { Chip } from "../../components/shared";
import { randomColorGenerator } from "../../utils";
import "./Skill.scss";
import { useDispatch } from "react-redux";
import { openDialog } from "../../store/dispatchers/dialog.dispatch";
import { DialogTypes } from "../../modals/common.model";
export default function Skill({ getSkills }) {
  const dispatch = useDispatch();
  const skills = [
    {
      skillName: "Angular",
      experience: "4+ Years",
      details: "",
      tags: [
        "Standardbank",
        "OrderWork",
        "Moneyware",
        "InvestorPro",
        "Clouzer",
        "NgRx",
        "RxJS",
      ],
    },
    {
      skillName: "ReactJS",
      experience: "1 Year",
      details: "",
      tags: ["MySociety", "Owntrello", "Self Portfolio", "Redux"],
    },
    {
      skillName: "Javascript",
      experience: "4+ Years",
      details: "",
      tags: [
        "frameworks",
        "Angular",
        "React",
        "NextJS",
        "NodeJS",
        "ExpressJS",
        "jQuery",
      ],
    },
    {
      skillName: "HTML",
      details: "",
      tags: [
        "Standardbank",
        "OrderWork",
        "Moneyware",
        "InvestorPro",
        "Clouzer",
        "MySociety",
        "Owntrello",
        "Self Portfolio",
      ],
    },
    {
      skillName: "NodeJS",
      details: "",
      tags: ["NestJS", "ExpressJS", "MySociety", "Self Portfolio"],
    },
  ];

  React.useEffect(() => getSkills(skills), []);

  const showSkillDetails = (skill) => {
    dispatch(
      openDialog({
        type: DialogTypes.skill,
        data: skill,
        title: `${skill.skillName.toUpperCase()} Projects`,
      })
    );
  };

  return (
    <div className="skill-set">
      {skills?.map((skill) => {
        return (
          <Chip
            key={skill.skillName}
            label={skill.skillName}
            variant="outlined"
            style={{ color: randomColorGenerator() }}
            onClick={() => showSkillDetails(skill)}
            className="skill"
          />
        );
      })}
    </div>
  );
}
