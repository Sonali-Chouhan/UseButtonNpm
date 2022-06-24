import styled from "styled-components";
const Info = styled.button`
  background: ${props => props.primary ? "#00e6e6" : "white"};
  color: ${props => props.primary ? "white" : "#00e6e6"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #00e6e6;
  border-radius: 10px;
`;
export default Info;