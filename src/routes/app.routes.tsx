import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Report } from "../screens/Report";
import theme from "../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.regular,
                    fontSize: RFValue(20)
                },
                tabBarStyle: {
                    height: 83
                }
            }}
        >
            <Screen 
                name="Relatório"
                component={Home}
                options={{
                    tabBarIcon: (({ color, size}) => 
                        <MaterialIcons
                            name="content-paste"
                            color={color}
                            size={size}
                        />     
                    )
                }}
            />
            <Screen 
                name="Cadastro"
                component={Register}
                options={{
                    tabBarIcon: (({ color, size}) => 
                        <MaterialIcons
                            name="assignment-ind"
                            color={color}
                            size={size}
                        />     
                    )
                }}
            />
            <Screen 
                name="Resumo"
                component={Report}
                options={{
                    tabBarIcon: (({ color, size}) => 
                        <MaterialIcons
                            name="assignment"
                            color={color}
                            size={size}
                        />     
                    )
                }}
            />
        </Navigator>
    );
}