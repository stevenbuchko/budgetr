import { Text, Container, Header, Body, Card, Left, Right, Toast } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native';
import BudgetChart from './budgetChart/BudgetChart'
import styles from './styles';

export interface Props { 
    budget_amount: number;
    total_expenses: number;
    navigation: any;
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditBudget', 
                            {
                                budget_amount: this.props.budget_amount
                            }
                        )}>
                            <Text style={styles.editBtnText}>Edit Budget</Text>
                        </TouchableOpacity>
                    </Right>
                </View>
                <BudgetChart 
                    budget_amount={this.props.budget_amount}
                    total_expenses={this.props.total_expenses}
                />
            </Card>
        );
    }
}

export default HomeCard;