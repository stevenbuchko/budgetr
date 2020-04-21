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
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    topText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'avenir-next-medium'
    },
    bottomText: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'avenir-next-medium'
    },
    positiveWrapper: {
        flexDirection: 'row',
        backgroundColor: '#E2F2EB',
        alignItems: 'center',
        borderRadius: 6,
        padding: 5
    },
    negativeWrapper: {
        flexDirection: 'row',
        backgroundColor: '#F6E6E7',
        alignItems: 'center',
        borderRadius: 6,
        padding: 5,
        marginTop: 5
    },
    positiveText: {
        fontSize: 14,
        fontFamily: 'avenir-next-medium',
        color: '#1BC773'
    },
    negativeText: {
        fontSize: 14,
        fontFamily: 'avenir-next-medium',
        color: '#F24750'
    },
    arrowImage: {
        width: 15,
        height: 15,
        marginRight: 10
    }
});

export default styles;