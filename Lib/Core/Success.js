import styled from "styled-components";
const Success = styled.button`
  background: ${props => props.primary ? " #9fbfdf" : "white"};
  color: ${props => props.primary ? "white" : " #9fbfdf"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid  #c2d6d6;
  border-radius: 10px;
`;
export default Success;