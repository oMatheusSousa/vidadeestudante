import styled from "styled-components/native";

import {SimpleLineIcons, FontAwesome5} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: 'income' | 'expense' | 'total';
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(285)}px;

    padding: 35px 15px;
    padding-bottom: ${RFValue(27)}px;;
    margin-right: 36px;
`;

export const Header = styled.View `
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text `
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.title};
`;

export const Icon = styled(SimpleLineIcons)<TypeProps> `
    font-size: ${RFValue(41)}px;;
    color: ${({theme, type}) => type === 'income' ? theme.colors.income : theme.colors.expense};    
`;

export const IconTotal = styled(FontAwesome5)<TypeProps> `
    font-size: ${RFValue(41)}px;;
    color: ${({theme}) => theme.colors.income};
`;

export const Footer = styled.View ``;

export const Amount = styled.Text `
    font-family: ${({theme}) => theme.fonts.semiBold};
    font-size: ${RFValue(28)}px;
    color: ${({theme}) => theme.colors.text};
    margin-top: ${RFValue(17)}px;
`;

export const LastTransaction = styled.Text `
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(13)}px;
    color: ${({theme}) => theme.colors.text};
`;