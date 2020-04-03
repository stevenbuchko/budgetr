import { Text, View } from 'native-base';
import { Image } from 'react-native';
import * as React from 'react';
import styles from './styles';

export interface Props {

}

export interface State {

}

class TransactionCard extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.cardContainer}>
                <Image
                    source={require("../../../../assets/gas-icon.png")}
                    resizeMode="contain"
                    style={styles.categoryIcon}
                />
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Shell</Text>
                    <Text style={styles.bottomText}>9/18/20</Text>
                </View>
                <Text style={styles.rightText}>-$30.23</Text>
            </View>
        );
    }
}

export default TransactionCard;