import styled from "styled-components";
const Warning = styled.button`
  background: ${props => props.primary ? "#ffcc00" : "white"};
  color: ${props => props.primary ? "white" : "#ffcc00"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #ffcc00;
  border-radius: 10px;
`;
export default Warning;