import { Text } from 'native-base';
import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { VictoryGroup, VictoryChart, VictoryArea, VictoryAxis } from "victory-native";
import styles from './styles';

export interface Props { }

export interface State { }

class ExpensesChart extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.chartWrapper}>
                <VictoryChart
                    height={300}
                    padding={{ top: 50, bottom: 30, left: 0, right: 0 }}
                >
                    <VictoryAxis
                        dependentAxis
                        style={{
                            axis: { stroke: "transparent" },
                            grid: { stroke: "#77869E", strokeDasharray: "2, 8" },
                        }}
                        offsetX={50}
                        tickCount={4}
                    />
                    <VictoryAxis
                        style={{
                            axis: { stroke: "transparent" }
                        }}
                    />
                    <VictoryGroup
                        style={{
                            data: { strokeWidth: 4, fillOpacity: .1 }
                        }}
                    >
                        <VictoryArea
                            interpolation="natural"
                            style={{
                                data: { fill: "#4DF1A1", stroke: "#4DF1A1" }
                            }}
                            data={[
                                { x: 1, y: 2 },
                                { x: 2, y: 3 },
                                { x: 3, y: 5 },
                                { x: 4, y: 4 },
                                { x: 5, y: 7 }
                            ]}
                        />
                        <VictoryArea
                            interpolation="natural"
                            style={{
                                data: { fill: "#F46069", stroke: "#F46069" }
                            }}
                            data={[
                                { x: 1, y: 3 },
                                { x: 2, y: 2 },
                                { x: 3, y: 6 },
                                { x: 4, y: 2 },
                                { x: 5, y: 6 }
                            ]}
                        />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        );
    }
}

export default ExpensesChart;