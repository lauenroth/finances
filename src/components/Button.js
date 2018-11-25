import styled from 'styled-components';

const Button = styled.button`
  background-color: #43a3ff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 0 20px;
  height: 40px;
`;

const FixedButton = styled.button`
  align-content: center;
  background-color: #202a55;
  color: #fff;
  border: none;
  border-radius: 50px;
  bottom: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 50px;
  position: fixed;
  right: 20px;
  transition: .25s;
  width: 50px;

  &:hover {
    bottom: 15px;
    height: 60px;
    right: 15px;
    transform: rotate(180deg);
    width: 60px;
  }
`;

export { FixedButton };
export default Button;
