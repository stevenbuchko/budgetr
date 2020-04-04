import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    cardContainer: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        marginBottom: 10,
        alignSelf: 'center'
    },
    categoryIcon: {
        height: 40,
        alignSelf: 'center',
        marginLeft: -10,
    },
    topText: {
        color: '#042C5C',
        fontSize: 16,
        fontFamily: 'avenir-next-medium',
    },
    bottomText: {
        color: '#77869E',
        fontSize: 13,
        fontFamily: 'avenir-next-medium'
    },
    textWrapper: {
        maxWidth: '40%'
    },
    rightText: {
        alignSelf: 'center',
        color: '#EE5A55',
        fontSize: 16,
        fontFamily: 'avenir-next-medium',
        textAlign: 'right',
        flex: 1,
        marginRight: 20
    }
});

export default styles;