import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    headerWrapper: {
        width: '90%',
        paddingTop: 70,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#042C5C',
        fontSize: 20,
        fontFamily: 'avenir-next-medium'
    },
    addWalletBtn: {
        height: 25
    }
});

export default styles;