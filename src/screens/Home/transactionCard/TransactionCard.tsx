import { Text, View } from 'native-base';
import { Image } from 'react-native';
import * as React from 'react';
import moment from 'moment';
import styles from './styles';

interface Transaction {
    amount: number;
    category: any;
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
                    source={{
                        uri:
                            'https://budgetrapp.s3.us-east-2.amazonaws.com/images/' + transaction.category[0] + '.png',
                    }}
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
                    <Text style={styles.bottomText}>{moment(transaction.date).format("M/D/YY")}</Text>
                </View>
                <Text style={styles.rightText}>-${(transaction.amount).toFixed(2).toString().replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
            </View>
        ));
        return (
            <View>{transactionCards}</View>
        );
    }
}

export default TransactionCard;