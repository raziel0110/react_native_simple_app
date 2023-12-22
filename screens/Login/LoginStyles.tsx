import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  onPress: Function;
  title: string;
}

export const ViewContainer = styled.View`
  margin: 0;
  padding: 0;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const InnerView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  padding: 1.3rem;
`;

const ButtonContainer = styled.TouchableOpacity`
  width: 250px;
  height: 40px;
  padding: 8px;
  background-color: #f03d4e;
`;

const LoginStyle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const LabelStyle = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const InputStyle = styled.TextInput`
  width: 250px;
  height: 40px;
  background: #f9f9fa;
  color: #000;
  border-radius: 4px;
  margin-bottom: 12px;
  border: 10px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
`;

export const LoginButton: React.FC<ButtonProps> = ({onPress, title}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <LoginStyle>{title}</LoginStyle>
    </ButtonContainer>
  );
};
