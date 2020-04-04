import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: Dimensions.get('window').width * .9,
        marginTop: -200,
        borderRadius: 12,
        alignSelf: 'center'
    },
    headerWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15,
        width: '90%',
    },
    leftSide: {
        flexDirection: 'row',
    },
    forText: {
        fontSize: 13,
        color: '#77869E',
        fontFamily: 'avenir-next-regular'
    },
    monthText: {
        fontSize: 13,
        color: '#042C5C',
        fontFamily: 'avenir-next-medium'
    },
    editBtnText: {
        fontSize: 13,
        color: '#0047CC',
        fontFamily: 'avenir-next-medium'
    }
});

export default styles;