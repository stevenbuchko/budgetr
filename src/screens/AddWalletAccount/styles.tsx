import { StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        alignItems: 'center',
    },
    buttonWrapper: {
        width: '90%'
    },
    headerTitle: {
        color: '#042C5C',
        fontSize: 20,
        fontFamily: 'avenir-next-medium',
        marginLeft: 10
    },
    headerContainer: {
        paddingTop: 70,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    backBtn: {
        height: 20,
        width: 20
    },
});

export default styles;