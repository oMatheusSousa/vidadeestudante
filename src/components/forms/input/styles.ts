import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-bottom: 35px;
    padding: 16px 103px;
`;