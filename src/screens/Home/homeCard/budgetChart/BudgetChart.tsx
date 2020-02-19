import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import * as React from 'react';
import styles from './styles';
import { View } from 'native-base';

export interface Props { }

export interface State { }

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

class BudgetChart extends React.Component<Props, State> {


    render() {
        return (
                    <View style={styles.container}>
                        <VictoryChart width={350} theme={VictoryTheme.material}>
                            <VictoryBar data={data} x="quarter" y="earnings" />
                        </VictoryChart>
                    </View>
                );
            }
        }

export default BudgetChart;