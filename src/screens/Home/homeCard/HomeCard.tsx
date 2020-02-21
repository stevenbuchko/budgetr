import { Text, Container, Header, Body, Card, Left, Right, Toast } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native';
import BudgetChart from './budgetChart/BudgetChart'
import styles from './styles';

export interface Props { 
    budget_amount: number;
    budget_amount_value: number;
    total_expenses: number;
    total_expenses_value: number
    updateBudget: any;
}

export interface State { 
    
}

class HomeCard extends React.Component<Props, State> {
    render() {
        return (
            <Card style={styles.cardContainer}>
                <View style={styles.headerWrapper}>
                    <View style={styles.leftSide}>
                        <Text style={styles.forText}>for </Text>
                        <Text style={styles.monthText}>Feburary</Text>
                    </View>
                    <Right style={styles.rightSide}>
                        <TouchableOpacity onPress={() => this.props.updateBudget(890)}>
                            <Text style={styles.editBtnText}>Edit Budget</Text>
                        </TouchableOpacity>
                    </Right>
                </View>
                <BudgetChart 
                    budget_amount={this.props.budget_amount}
                    budget_amount_value={this.props.budget_amount_value}
                    total_expenses={this.props.total_expenses}
                    total_expenses_value={this.props.total_expenses_value}
                />
            </Card>
        );
    }
}

export default HomeCard;