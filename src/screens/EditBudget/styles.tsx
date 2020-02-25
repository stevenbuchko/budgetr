import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    bodyContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    headerTitle: {
        color: '#042C5C',
        fontSize: 20,
        fontFamily: 'avenir-next-medium'
    },
    headerContainer: {
        paddingTop: 70,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    backBtn: {
        height: 15
    }
});

export default styles;