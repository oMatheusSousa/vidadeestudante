import styled from "styled-components/native";

import {MaterialCommunityIcons} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps{
    type: 'income' | 'expense';
}
export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    padding: 14px 24px;
    margin-top: 14px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.semiBold};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title}
`;

export const Amount = styled.Text<TransactionProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;    
    color: ${({theme, type}) => 
        type=== 'income' ? theme.colors.income : theme.colors.expense}
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 22px
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(28)}px;    
    color: ${({theme}) => theme.colors.text}
`;

export const CategoryName = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;    
    color: ${({theme}) => theme.colors.text};
`;

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;    
    color: ${({theme}) => theme.colors.text};
`;

