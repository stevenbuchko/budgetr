import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').width - 50,
        marginTop: -200
    }
});

export default styles;