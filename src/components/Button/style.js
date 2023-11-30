import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.isback ? "#333" : "#2e21c9")};
  color: #fff;
  padding: 15px 25px;
  border: none;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s linear;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    background-color: #190da7;
  }
`;
