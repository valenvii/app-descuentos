import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: 2000
    },

    containerTitulo: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        height: 400,
        width: "100%",
        overflow: 'hidden'
    },

    titulo:{
        fontFamily: 'ps2',
        position: 'relative',
        fontWeight: 100,
        fontSize: 30,
        color: 'black',
        zIndex: 1,
        marginTop: 130,
        textAlign: 'center'
    },

    fondo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.4,
        zIndex: -1
    },

    contenedorCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 30,
        margin: 'auto'
    },
});

export default styles;