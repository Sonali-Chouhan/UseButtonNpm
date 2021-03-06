import styled from "styled-components";
const Dark = styled.button`
  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid black;
  border-radius: 10px;
`;
export default Dark;