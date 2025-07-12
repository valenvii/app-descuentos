import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import { Image } from 'expo-image';

//componentes
/*import Footer from '../../components/Footer/Footer';
import FlipCardImagen from '../../components/FlipCardImagen/FilpCardImagen';*/

//estilos
import styles from './styles';

const logo = require('../../assets/images/uncoma.png');

const Descuentos = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>App de descuentos</Text>
                <Image source={logo} style={styles.fondo} contentFit="cover"/>
            </View>
        </ScrollView>
    );
}

export default Descuentos;