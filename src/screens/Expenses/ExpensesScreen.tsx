import React from "react";
import { Container, Text, View } from "native-base";
import styles from "./styles";
import { ScrollView } from "react-native";
import axios from "axios";
import ExpensesHeader from "./expensesHeader/ExpensesHeader";
import ExpensesChart from "./expensesChart/ExpensesChart";
import CategoryCard from "./categoryCard/CategoryCard";

export interface Props {
    navigation: any;
}

export interface State {
    total_expenses_formatted: string;
    total_revenue_formatted: string;
    total_net_formatted: string;
    expense_chart_data: any;
    income_chart_data: any;
}

class ExpensesScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            total_expenses_formatted: '',
            total_revenue_formatted: '',
            total_net_formatted: '',
            expense_chart_data: [],
            income_chart_data: []
        };
    }

    async fetchExpensesData() {
        await axios.post('http://192.168.1.2:3000/api/v1/transactions/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                const total_expenses_formatted = res.data.total_expenses_formatted;
                const total_revenue_formatted = res.data.total_revenue_formatted;
                const total_net_formatted = res.data.total_net_formatted;
                this.setState({ total_expenses_formatted, total_revenue_formatted, total_net_formatted });
            })
            .catch(err => console.log(err));

        await axios.get('http://192.168.1.2:3000/api/v1/transactions/expenseData/dc5bf63a-38d1-474e-b944-9a18e206a81e')
            .then((res) => {
                const expense_chart_data = res.data.expenseData;
                const income_chart_data = res.data.incomeData;
                this.setState({ expense_chart_data, income_chart_data });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchExpensesData();

        this.props.navigation.addListener('focus', () => {
            this.fetchExpensesData();
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <ExpensesHeader
                        total_expenses_formatted={this.state.total_expenses_formatted}
                        total_revenue_formatted={this.state.total_revenue_formatted}
                        total_net_formatted={this.state.total_net_formatted}
                    />
                    <ExpensesChart
                        expense_chart_data={this.state.expense_chart_data}
                        income_chart_data={this.state.income_chart_data}
                    />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>Spending Breakdown</Text>
                    </View>
                    <CategoryCard />
                </ScrollView>
            </Container>
        );
    }
}

export default ExpensesScreen;