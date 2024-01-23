import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export const ViewContainer = styled.View`
  padding: 15px;
  display: flex;
  width: ${width * 0.9}px; 
  flex-direction: row;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: white;
  shadow-opacity: 0.6;
  shadow-color: #294B29;
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
  border-radius: 15px;
  margin-right: 24px;
  shadow-color: #294B29;
  shadow-opacity: 0.3;
`;

export const TitleHeader = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
