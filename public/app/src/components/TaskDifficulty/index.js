import React, { useState } from "react";

import { AiFillFire as DiffIcon } from "react-icons/ai";

import { Container, DifficultyTitle, RadioInput } from "./styled";
import { useTheme } from "styled-components";

const TaskDifficulty = ({ setTaskDifficulty }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [hover, setHover] = useState();

  const theme = useTheme();

  return (
    <Container>
      <DifficultyTitle>Dificuldade:</DifficultyTitle>
      <div>
        {[...Array(5)].map((star, index) => {
          const diffValue = index + 1;

          return (
            <label>
              <RadioInput
                type="radio"
                name="difficulty"
                value={diffValue}
                onClick={() => {
                  setDifficulty(diffValue);
                  setTaskDifficulty(diffValue);
                }}
              />
              <DiffIcon
                className="star"
                color={
                  diffValue <= (hover || difficulty)
                    ? theme.tertiary
                    : theme.secondary
                }
                size={52}
                onMouseEnter={() => setHover(diffValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </Container>
  );
};

export default TaskDifficulty;
