import React from "react";
import { Card, CardContent, Chip } from "../shared";
import { randomColorGenerator } from "../../utils";

export default function skillDetails({
  skillName,
  tags,
  experience,
  description,
}) {
  return (
    <Card>
      <CardContent>
        {tags?.map((project) => {
          return (
            <Chip
              key={project}
              label={project}
              variant="outlined"
              style={{ color: randomColorGenerator() }}
              className="skill"
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
