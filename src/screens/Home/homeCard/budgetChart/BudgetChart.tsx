import { AnimatedCircularProgress } from 'react-native-circular-progress';
import NumberFormat from 'react-number-format';
import * as React from 'react';
import styles from './styles';
import { View } from 'native-base';
import { Text } from 'react-native';

export interface Props { 
    budget_amount: number,
    total_expenses: number,
}

export interface State { }

class BudgetChart extends React.Component<Props, State> {
    render() {
        const { budget_amount, total_expenses } = this.props;

        const percentage = ( total_expenses / budget_amount ) * 100;
        console.log(percentage);

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
                    arcSweepAngle={240}
                    rotation={-120}
                />
                <View style={styles.innerCircle}>
                    <Text style={styles.topText}>You've Spent</Text>
                    <Text style={styles.spendText}>${total_expenses}</Text>
                    <View style={styles.lowerTextWrapper}>
                        <Text style={styles.lowerText}>out of </Text>
                        <Text style={styles.budgetText}>${budget_amount}</Text>
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