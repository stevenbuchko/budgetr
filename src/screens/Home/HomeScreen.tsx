import React from "react";
import axios from "axios";
import { Container, Text, View } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCard from "./homeCard/HomeCard";
import TransactionCard from "./transactionCard/TransactionCard";
import TransactionPicker from "./transactionPicker/TransactionPicker"
import { ScrollView } from "react-native-gesture-handler";

interface Transaction {
    amount: number;
    category_id: string;
    name: string;
    date: string;
}

export interface Props {
    navigation: any;
}

export interface State {
    budget_amount: number;
    transactions_7_days: Transaction[];
    transactions_30_days: Transaction[];
    transactions_3_months: Transaction[];
    transactions_1_day: Transaction[];
    total_expenses_amount: number;
    total_expenses_formatted: string;
    transaction_timeframe: string;
}

class HomeScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            budget_amount: 0,
            transactions_7_days: [],
            transactions_30_days: [],
            transactions_3_months: [],
            transactions_1_day: [],
            total_expenses_amount: 0,
            total_expenses_formatted: '',
            transaction_timeframe: '7 DAYS'
        };
    }

    async fetchBudgetData() {
        try {
            await axios.get('http://192.168.1.2:3000/api/v1/users/dc5bf63a-38d1-474e-b944-9a18e206a81e')
                .then(res => {
                    console.log(res.data);
                    const budget_amount = res.data.budget_amount;

                    this.setState({ budget_amount });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log('Fetch Error:', error)
        }
    }

    async fetchTransactionData() {
        await axios.get('http://192.168.1.2:3000/api/v1/transactions7days/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                console.log(res.data.transactions);
                const transactions_7_days = res.data.transactions.transactions;
                this.setState({ transactions_7_days });
                console.log('transactions state: ' + JSON.stringify(this.state.transactions_7_days));
            })
            .catch(err => console.log(err));

        await axios.get('http://192.168.1.2:3000/api/v1/transactions30days/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                console.log(res.data.transactions);
                const transactions_30_days = res.data.transactions.transactions;
                this.setState({ transactions_30_days });
                console.log('transactions state: ' + JSON.stringify(this.state.transactions_30_days));
            })
            .catch(err => console.log(err));

        await axios.get('http://192.168.1.2:3000/api/v1/transactions3months/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                console.log(res.data.transactions);
                const transactions_3_months = res.data.transactions.transactions;
                this.setState({ transactions_3_months });
                console.log('transactions state: ' + JSON.stringify(this.state.transactions_3_months));
            })
            .catch(err => console.log(err));

        await axios.get('http://192.168.1.2:3000/api/v1/transactions1day/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                console.log(res.data.transactions);
                const transactions_1_day = res.data.transactions.transactions;
                this.setState({ transactions_1_day });
                console.log('transactions state: ' + JSON.stringify(this.state.transactions_1_day));
            })
            .catch(err => console.log(err));
    }

    async fetchTotalExpenses() {
        await axios.post('http://192.168.1.2:3000/api/v1/transactions/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                const total_expenses_amount = res.data.total_expenses_amount;
                const total_expenses_formatted = res.data.total_expenses_formatted;
                this.setState({ total_expenses_amount, total_expenses_formatted });
            })
            .catch(err => console.log(err));
    }

    async fetchData() {
        this.fetchBudgetData();
        this.fetchTransactionData();
        this.fetchTotalExpenses();
    }

    componentDidMount() {
        this.fetchData();

        this.props.navigation.addListener('focus', () => {
            this.fetchData();
        });
    }

    changeTransactionTimeframe = (timeframe: string) => {
        this.setState({ transaction_timeframe: timeframe });
    }

    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <HomeHeader />
                    <HomeCard
                        budget_amount={this.state.budget_amount}
                        total_expenses_amount={this.state.total_expenses_amount}
                        total_expenses_formatted={this.state.total_expenses_formatted}
                        navigation={this.props.navigation}
                    />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>Transactions</Text>
                    </View>
                    <TransactionPicker
                        transaction_timeframe={this.state.transaction_timeframe}
                        changeTransactionTimeframe={this.changeTransactionTimeframe}
                    />
                    <View style={styles.transactionCardsWrapper}>
                        <TransactionCard
                            transactions_1_day={this.state.transactions_1_day}
                            transactions_7_days={this.state.transactions_7_days}
                            transactions_30_days={this.state.transactions_30_days}
                            transactions_3_months={this.state.transactions_3_months}
                            transaction_timeframe={this.state.transaction_timeframe}
                        />
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

export default HomeScreen;