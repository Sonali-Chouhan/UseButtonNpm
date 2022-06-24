import styled from "styled-components";
const Danger = styled.button`
  background: ${props => props.primary ? " #c2d6d6" : "white"};
  color: ${props => props.primary ? "white" : " #c2d6d6"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid  #c2d6d6;
  border-radius: 10px;
`;
export default Danger