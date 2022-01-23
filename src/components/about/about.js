import React from "react";
import { Skill, ToggleContainer, EditSkills } from "../../components";
export default function About() {
  const [skills, setSkills] = React.useState([]);
  const displaySection = (
    <ToggleContainer>
      <section>
        <Skill getSkills={(skills) => setSkills(skills)} />
      </section>
      <section>
        <EditSkills skills={skills} />
      </section>
    </ToggleContainer>
  );
  return <div className="about">Abouts us works</div>;
}
