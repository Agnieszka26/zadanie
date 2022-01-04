import styled from "styled-components";
import react from "react";

const StyledNavigation = styled.nav`
padding: 0;
margin: 0;
background-color: #bbbbbb; ;
display: flex;
justify-content: space-around;

`

const StyledList = styled.ul`
display: flex;

`
const StyledLi = styled.li`
display: flex;
`

const MyA = styled.a`
padding:1rem 2rem ;
margin: 0;
color: white;
text-decoration: none;
transition: text-shadow, color, background-color 0.25s, transform 2s;

 &:hover{
    color:#f0f0f0;
    text-shadow:1px 4px 4px rgb(255, 0, 221);
    background-color: #551b48;

 }

`

export {StyledNavigation, StyledList, StyledLi, MyA};