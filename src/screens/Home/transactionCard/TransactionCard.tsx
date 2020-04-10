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
    transactions_1_day: Transaction[];
    transactions_7_days: Transaction[];
    transactions_30_days: Transaction[];
    transactions_3_months: Transaction[];
    transaction_timeframe: string;
}

export interface State {

}

class TransactionCard extends React.Component<Props, State> {

    getTimeframe() {
        switch (this.props.transaction_timeframe) {
            case '1 DAY':
                return this.props.transactions_1_day;
                break;
            case '7 DAYS':
                return this.props.transactions_7_days;
                break;
            case '30 DAYS':
                return this.props.transactions_30_days;
                break;
            case '3 MONTHS':
                return this.props.transactions_3_months;
        }
    }

    render() {
        console.log("transactions prop: " + this.getTimeframe());
        const transactionCards = this.getTimeframe().map((transaction, i) => (
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