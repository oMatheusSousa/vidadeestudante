import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';

import { FlatList, FlatListProps } from 'react-native';
import { DataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(195)}px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;


export const ContentWrapper = styled.View`
    width: 100%;
    padding: 0 39px;
    margin-top: ${getStatusBarHeight() + RFValue(63)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(59)}px;
    height: ${RFValue(61)}px;
`;

export const User = styled.View`
    margin-left: ${RFValue(11)}px;
`;

export const UserGreeting = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.extraBold};
    font-size: ${RFValue(22)}px;
`;

export const Icon = styled(MaterialIcons)`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(23)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingLeft: 22}
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFValue(152) + getStatusBarHeight()}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFValue(190)}px;
    padding-bottom: 14px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.extraBold};
`;

export const TransactionList = styled(FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>).attrs({showsHorizontalScrollIndicator: false})``;
