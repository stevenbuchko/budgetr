import React from "react";
import axios from "axios";
import { Container } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCard from "./homeCard/HomeCard";

export interface Props { }

export interface State {
    budget_amount: number;
    budget_amount_value: number;
    total_expenses: number;
    total_expenses_value: number;
 }

class HomeScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            budget_amount: 0,
            budget_amount_value: 0,
            total_expenses: 0,
            total_expenses_value: 0
        };
    }

    async componentDidMount() {
        try {
            await axios.get('http://192.168.1.2:3000/api/v1/users/d6a9260d-8732-418a-939a-84815a0df741')
                .then( res => {
                    console.log(res.data);
                    const budget_amount = res.data.budget_amount;
                    const budget_amount_value = res.data.budget_amount_value;
                    const total_expenses = res.data.total_expenses;
                    const total_expenses_value = res.data.total_expenses_value;

                    this.setState({ budget_amount });
                    this.setState({ budget_amount_value });
                    this.setState({ total_expenses });
                    this.setState({ total_expenses_value });
                })
                .catch(err => console.log(err));
            } catch (error) {
                console.log('Fetch Error:', error)
            }
    }

    updateBudget = (newBudget: number) => {
        this.setState({ budget_amount: newBudget });
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <HomeHeader />
                <HomeCard 
                    budget_amount={this.state.budget_amount}
                    budget_amount_value={this.state.budget_amount_value}
                    total_expenses={this.state.total_expenses} 
                    total_expenses_value={this.state.total_expenses_value}
                    updateBudget={this.updateBudget}
                />
            </Container>
        );
    }
}

export default HomeScreen;