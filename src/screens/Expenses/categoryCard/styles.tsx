import { StyleSheet } from 'react-native';

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
        width: 40,
        alignSelf: 'center',
        marginLeft: 10
    },
    categoryText: {
        color: '#042C5C',
        fontSize: 18,
        fontFamily: 'avenir-next-medium',
    },
    bottomText: {
        color: '#77869E',
        fontSize: 13,
        fontFamily: 'avenir-next-medium'
    },
    textWrapper: {
        maxWidth: '45%',
        marginLeft: 15,
        justifyContent: 'center'
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