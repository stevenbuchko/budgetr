import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as React from 'react';
import styles from './styles';
import { View } from 'native-base';
import { Text } from 'react-native';

export interface Props {
    budget_amount: number,
    total_expenses_amount: number,
    total_expenses_formatted: string
}

export interface State {
    total_expenses: number
}

class BudgetChart extends React.Component<Props, State> {
    render() {
        const { budget_amount, total_expenses_amount, total_expenses_formatted } = this.props;

        const percentage = (total_expenses_amount * -1 / budget_amount) * 100;
        const budget_amount_formatted = (budget_amount).toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');

        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={270}
                    width={15}
                    fill={percentage}
                    tintColor="#0047CC"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#DFE7F5"
                    lineCap="round"
                    duration={0}
                    arcSweepAngle={240}
                    rotation={-120}
                />
                <View style={styles.innerCircle}>
                    <Text style={styles.topText}>You've Spent</Text>
                    <Text style={styles.spendText}>{total_expenses_formatted}</Text>
                    <View style={styles.lowerTextWrapper}>
                        <Text style={styles.lowerText}>out of </Text>
                        <Text style={styles.budgetText}>${budget_amount_formatted}</Text>
                    </View>
                </View>
                <View style={styles.underCircle}>
                    <Text style={styles.percentageText}>0%</Text>
                    <Text style={styles.percentageText}>100%</Text>
                </View>
            </View>

        );
    }
}

export default BudgetChart;