import styled from 'styled-components/native';

export const ViewContainer = styled.View`
  padding: 15px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid grey;
  background-color: white;
`;

export const DescriptionView = styled.View`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const BottomDescription = styled.Text`
  margin-right: 50px;
`;

export const PriceBlock = styled.Text`
  color: red;
`;

export const ImageContainer = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  margin-right: 24px;
`;
