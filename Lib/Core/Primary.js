import styled from "styled-components";
const Primary = styled.button`
  background: ${props => props.primary ? "#0099ff" : "white"};
  color: ${props => props.primary ? "white" : "#0099ff"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #0099ff;
  border-radius: 10px;
`;
export default Primary;
