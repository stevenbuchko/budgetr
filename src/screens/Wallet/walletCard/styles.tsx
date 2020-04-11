import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    cardBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * .61,
        alignSelf: 'center'
    },
    accountWrapper: {
        width: '70%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingTop: 15
    },
    cardNum: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'courier-prime-regular',
    },
    name: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'courier-prime-regular',
    },
    expDate: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'courier-prime-regular',
    },
    carouselWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default styles;