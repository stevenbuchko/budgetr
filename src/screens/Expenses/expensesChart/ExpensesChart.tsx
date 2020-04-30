import { Text } from 'native-base';
import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { VictoryGroup, VictoryChart, VictoryArea, VictoryAxis } from "victory-native";
import styles from './styles';

export interface Props {
    expense_chart_data: any;
    income_chart_data: any;
}

export interface State { }

class ExpensesChart extends React.Component<Props, State> {

    getDaysInMonth() {
        let month = new Date().getMonth();
        let year = new Date().getFullYear();

        // Here January is 1 based
        //Day 0 is the last day in the previous month
        return new Date(year, month, 0).getDate();
        // Here January is 0 based
        // return new Date(year, month+1, 0).getDate();
    };

    render() {
        return (
            <View style={styles.chartWrapper}>
                {this.props.expense_chart_data.length == 0 || this.props.income_chart_data.length == 0 ? (
                    <Text>Fuck</Text>
                ) : (
                        <VictoryChart
                            height={270}
                            padding={{ top: 20, bottom: 30, left: 0, right: 0 }}
                        >
                            <VictoryAxis
                                dependentAxis
                                style={{
                                    axis: { stroke: "transparent" },
                                    grid: { stroke: "#77869E", strokeDasharray: "2, 8" },
                                    tickLabels: {
                                        fontSize: 13,
                                        fontFamily: "avenir-next-medium",
                                        padding: 5,
                                        fill: "#1D3041"
                                    }
                                }}
                                offsetX={50}
                                tickCount={4}
                                tickFormat={(t) => `$${t}`}
                            />
                            <VictoryAxis
                                style={{
                                    axis: { stroke: "transparent" },
                                    tickLabels: {
                                        fontSize: 13,
                                        fontFamily: "avenir-next-medium",
                                        fill: "#77869E",
                                    }
                                }}
                            />
                            <VictoryGroup
                                style={{
                                    data: { strokeWidth: 3, fillOpacity: .1 }
                                }}
                                domain={{ x: [0, this.getDaysInMonth()] }}
                                domainPadding={{ y: 20 }}
                            >
                                <VictoryArea
                                    interpolation="monotoneX"
                                    style={{
                                        data: { fill: "#4DF1A1", stroke: "#4DF1A1" }
                                    }}
                                    data={this.props.income_chart_data}
                                />
                                <VictoryArea
                                    interpolation="monotoneX"
                                    style={{
                                        data: { fill: "#F46069", stroke: "#F46069" }
                                    }}
                                    data={this.props.expense_chart_data}
                                />
                            </VictoryGroup>
                        </VictoryChart>
                    )
                }
            </View>
        );
    }
}

export default ExpensesChart;