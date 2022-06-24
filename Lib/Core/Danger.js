import styled from "styled-components";
const Danger = styled.button`
  background: ${props => props.primary ? "#cc3300" : "white"};
  color: ${props => props.primary ? "white" : "#cc3300"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #cc3300;
  border-radius: 10px;
`;
export default Danger

