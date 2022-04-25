import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 6px;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.black};
    font-size: ${RFValue(23)}px;
`;