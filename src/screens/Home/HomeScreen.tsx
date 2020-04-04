import React from "react";
import axios from "axios";
import { Container, Text, View } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCard from "./homeCard/HomeCard";
import TransactionCard from "./transactionCard/TransactionCard";
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
    total_expenses: number;
    transactions: Transaction[];
}

class HomeScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            budget_amount: 0,
            total_expenses: 0,
            transactions: []
        };
    }

    async fetchBudgetData() {
        try {
            await axios.get('http://192.168.1.2:3000/api/v1/users/dc5bf63a-38d1-474e-b944-9a18e206a81e')
                .then(res => {
                    console.log(res.data);
                    const budget_amount = res.data.budget_amount;
                    const total_expenses = res.data.total_expenses;

                    this.setState({ budget_amount });
                    this.setState({ total_expenses });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log('Fetch Error:', error)
        }
    }

    async fetchTransactionData() {
        await axios.get('http://192.168.1.2:3000/api/v1/transactions30/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                console.log(res.data.transactions);
                const transactions = res.data.transactions.transactions;
                this.setState({ transactions });
                console.log('transactions state: ' + JSON.stringify(this.state.transactions));
            })
            .catch(err => console.log(err));
    }

    async fetchData() {
        this.fetchBudgetData();
        this.fetchTransactionData();
    }

    componentDidMount() {
        this.fetchData();

        this.props.navigation.addListener('focus', () => {
            this.fetchData();
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <HomeHeader />
                    <HomeCard
                        budget_amount={this.state.budget_amount}
                        total_expenses={this.state.total_expenses}
                        navigation={this.props.navigation}
                    />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>Transactions</Text>
                    </View>
                    <View style={styles.transactionCardsWrapper}>
                        <TransactionCard
                            transactions={this.state.transactions}
                        />
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

export default HomeScreen;