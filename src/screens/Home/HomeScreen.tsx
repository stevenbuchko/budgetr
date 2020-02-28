import React from "react";
import axios from "axios";
import { Container } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCard from "./homeCard/HomeCard";

export interface Props {
    navigation: any;
 }

export interface State {
    budget_amount: number;
    total_expenses: number;
 }

class HomeScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            budget_amount: 0,
            total_expenses: 0,
        };
    }

    async fetchData() {
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

    componentDidMount() {
        this.fetchData();

        this.props.navigation.addListener('didFocus', () => {
            this.fetchData();
        });
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <HomeHeader />
                <HomeCard 
                    budget_amount={this.state.budget_amount}
                    total_expenses={this.state.total_expenses} 
                    navigation={this.props.navigation}
                />
            </Container>
        );
    }
}

export default HomeScreen;