import styled from "styled-components";

export const BgLeft = styled.div`
  position: absolute;
  z-index: -1;
  width: 36%;
  height: 100vh;
  background-color: #2e21c9;
  top: 0;
  // border-top-right-radius: 50px;
`;

export const Header = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 600px;
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 10px;
  background-color: #fdfdfd;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 20px;

  &:before {
    content: "</>";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: bold;
    position: absolute;
    width: 50px;
    color: #2e21c9;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    top: 10px;
    left: -25px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border: 3px solid #d7d3ff;
  }
`;

export const Separador = styled.div`
  margin-bottom: 15px;
  margin-top: 20px;
`;
export const Label = styled.label`
  font-size: 1.6rem;
  color: #333;
  font-weight: bold;
`;
export const Input = styled.input`
  width: 100%;
  display: block;
  padding: 15px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const DivButton = styled.div`
  text-align: right;
`;
export const Button = styled.button`
  background-color: #2e21c9;
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

export const Credito = styled.div`
  text-align: center;
  margin-top: 10px;
  text-transform: uppercase;
  text-shadow: 1px 1px #efeff7;
  font-size: 1.4rem;
`;

export const Ul = styled.ul`
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  max-width: 600px;
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 20px;
`;
export const User = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  background-color: #fbfbfb;
  padding: 10px 10px 20px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  i {
    background-color: #ddd;
    width: 40px;
    cursor: pointer;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: red;
      color: #fff;
    }
  }
`;
