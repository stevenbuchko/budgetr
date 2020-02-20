import React from "react";
import { View, Text, Container } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCard from "./homeCard/HomeCard";

export interface Props { }

export interface State {
    budget: number;
    spent: number;
 }

class HomeScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            budget: 3000,
            spent: 1200,
        };
    }
    
    updateBudget = (newBudget: number) => {
        this.setState({ budget: newBudget });
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <HomeHeader />
                <HomeCard 
                    budget={this.state.budget}
                    updateBudget={this.updateBudget}
                    spent={this.state.spent}
                />
            </Container>
        );
    }
}

export default HomeScreen;