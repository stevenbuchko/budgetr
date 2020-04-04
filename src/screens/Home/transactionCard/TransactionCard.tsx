import { Text, View } from 'native-base';
import { Image } from 'react-native';
import * as React from 'react';
import styles from './styles';

interface Transaction {
    amount: number;
    category_id: string;
    name: string;
    date: string;
}

export interface Props {
    transactions: Transaction[];
}

export interface State {

}

class TransactionCard extends React.Component<Props, State> {
    render() {
        console.log("transactions prop: " + this.props.transactions);
        const transactionCards = this.props.transactions.map((transaction, i) => (
            <View key={i} style={styles.cardContainer}>
                <Image
                    source={require("../../../../assets/gas-icon.png")}
                    resizeMode="contain"
                    style={styles.categoryIcon}
                />
                <View style={styles.textWrapper}>
                    <Text
                        style={styles.topText}
                        ellipsizeMode='tail'
                        numberOfLines={1}
                    >
                        {transaction.name}
                    </Text>
                    <Text style={styles.bottomText}>{transaction.date}</Text>
                </View>
                <Text style={styles.rightText}>{transaction.amount}</Text>
            </View>
        ));
        return (
            <View>{transactionCards}</View>
        );
    }
}

export default TransactionCard;