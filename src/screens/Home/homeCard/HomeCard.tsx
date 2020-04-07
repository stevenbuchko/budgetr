import { Text, Card, Right } from 'native-base';
import { format } from 'date-fns'
import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import BudgetChart from './budgetChart/BudgetChart'
import styles from './styles';

export interface Props {
    budget_amount: number;
    total_expenses_amount: number;
    total_expenses_formatted: string;
    navigation: any;
}

export interface State {

}

class HomeCard extends React.Component<Props, State> {

    month = format(new Date(), 'MMMM');

    render() {
        return (
            <Card style={styles.cardContainer}>
                <View style={styles.headerWrapper}>
                    <View style={styles.leftSide}>
                        <Text style={styles.forText}>for </Text>
                        <Text style={styles.monthText}>{this.month}</Text>
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
                    total_expenses_amount={this.props.total_expenses_amount}
                    total_expenses_formatted={this.props.total_expenses_formatted}
                />
            </Card>
        );
    }
}

export default HomeCard;