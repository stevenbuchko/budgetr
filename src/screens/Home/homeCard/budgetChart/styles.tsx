import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        marginTop: 20
    },
    innerCircle: {
        marginTop: -200,
        alignItems: 'center'
    },
    topText: {
        fontSize: 13,
        fontFamily: 'avenir-next-medium',
        color: '#77869E'
    },
    spendText: {
        fontSize: 30,
        fontFamily: 'avenir-next-medium',
        color: '#042C5C'
    },
    lowerTextWrapper: {
        flexDirection: 'row'
    },
    lowerText: {
        fontSize: 13,
        fontFamily: 'avenir-next-regular',
        color: '#77869E'
    },
    budgetText: {
        fontSize: 13,
        fontFamily: 'avenir-next-medium',
        color: '#77869E'
    },
    underCircle: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
    },
    percentageText: {
        fontSize: 11,
        fontFamily: 'avenir-next-regular',
        color: '#77869E',
        textAlign: 'center'
    }
});

export default styles;