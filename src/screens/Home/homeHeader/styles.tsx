import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * .925,
        alignSelf: 'center'
    },
    headerTitle: {
        marginTop: 70,
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'avenir-next-medium'
    },
    headerContainer: {
        width: '90%',
        alignSelf: 'center'
    }
});

export default styles;