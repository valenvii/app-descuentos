import React, { useState } from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Componentes
import DescuentosScreen from "/home/valenvi/IdeaProjects/app-descuentos/src/screens/Descuentos/Descuentos.jsx";

//Estilos
import styles from './styles';

const logo = require("../../images/uncoma.png");

const Tab = createMaterialTopTabNavigator();

const Navbar = () => {
    const [imagen, setImagen] = useState(logo);
    
    return (
        <NavigationContainer>
            <View style={styles.contenedor}>

                {/* Barra de navegación */}
                <Tab.Navigator
                    screenOptions={{
                        tabBarIndicatorStyle: styles.fondoPag,
                        tabBarStyle: styles.barraNav,
                        tabBarLabelStyle: styles.labelBarraNav,
                        tabBarPressColor: 'transparent'
                        }} >
                    <Tab.Screen name="Descuentos" component={DescuentosScreen} />
                </Tab.Navigator>
            </View>
      </NavigationContainer>
    );
};

export default Navbar;