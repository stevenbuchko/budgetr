import React from "react";
import axios from "axios";
import { Container } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCard from "./homeCard/HomeCard";

export interface Props { }

export interface State {
    user_data: any;
    budget_amount: number;
    total_expenses: number;
 }

class HomeScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            user_data: [],
            budget_amount: 3000,
            total_expenses: 1200,
        };
    }

    async componentDidMount() {
        try {
            await axios.get('http://192.168.1.2:3000/api/v1/users/fedd94c0-0595-45e1-824b-36aeeb96407a')
                .then( res => {
                    console.log(res.data);
                    const user_data = res.data;
                    this.setState({user_data});
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
                    budget={this.state.budget_amount}
                    updateBudget={this.updateBudget}
                    spent={this.state.total_expenses}
                />
            </Container>
        );
    }
}

export default HomeScreen;