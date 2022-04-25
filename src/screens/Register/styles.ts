import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    padding: 8px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.black};
    font-size: ${RFValue(26)}px;
    margin-top: ${RFValue(96)}px;
`;

export const Form = styled.View`
    justify-content: space-between;
    flex: 1;
    padding: 76px;
`;

export const Fields = styled.View``;
