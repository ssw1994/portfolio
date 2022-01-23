import React from "react";
import { Tags } from "../shared";
export default function editSkills({ skills }) {
  return (
    <div>
      <Tags options={skills} labelKey="skillName" placeholder="Skills"></Tags>
    </div>
  );
}
