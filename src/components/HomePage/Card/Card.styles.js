import styled from "styled-components";
import react from "react";

const StyledCard = styled.div`
  padding: 1rem;
  margin: 1rem;
  max-width: 50%;
  background-color: #e6e6e6;
  border-radius: 15px;
  box-shadow: 2px 4px 5px rgb(92, 92, 92);
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const StyledCardUsers = styled.div`
  padding: 1rem;
  margin: 1rem;
  height: 50%;
  background-color: #e6e6e6;
  border-radius: 15px;
  box-shadow: 2px 4px 5px rgb(92, 92, 92);
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 1rem;
  margin: 0.5rem 0.5rem;
  border: 0px solid rgb(92, 92, 92);
  box-shadow: 1px 1px 2px 1px rgb(92, 92, 92);
  border-radius: 5px;
  width: 100%;

  &:hover {
    background-color: #551b48;
    cursor: pointer;
    color: white;
  }
  &:focus {
    background-color: #7a1a666c;
    color: white;
  }
`;
const MyP = styled.p`
  color: rgb(41, 41, 41);
`;

export {StyledCard, StyledButton, StyledCardUsers, MyP};
