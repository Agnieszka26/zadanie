import styled from "styled-components";
import react from "react";

const StyledContainer = styled.div`
padding: 5%;
margin: 2rem;
scale: 1;
background-color: #e6e6e6;
border-radius: 15px;
box-shadow: 2px 4px 5px rgb(92, 92, 92);
text-align: center;
justify-content: center;
align-items: center;
transition: scale 0.5s, transform .5s;

&:hover{
transform: scale(1.05);
`;

const Title = styled.h2`
  color: #551b48;
`;

const Text = styled.p`
  color: rgb(75, 75, 75);
`;

export { StyledContainer, Title, Text };
