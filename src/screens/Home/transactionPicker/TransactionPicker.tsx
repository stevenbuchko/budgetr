import { Text } from 'native-base';
import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    transaction_timeframe: string;
    changeTransactionTimeframe: any;
}

export interface State { }

class TransactionPicker extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.pickerWrapper}>
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('1 DAY')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === '1 DAY'
                            ? '#DFE7F5'
                            : 'transparent',
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontFamily: 'avenir-next-medium',
                            fontSize: 13,
                            color:
                                this.props.transaction_timeframe === '1 DAY'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            1 Day
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('7 DAYS')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === '7 DAYS'
                            ? '#DFE7F5'
                            : 'transparent',
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontFamily: 'avenir-next-medium',
                            fontSize: 13,
                            color:
                                this.props.transaction_timeframe === '7 DAYS'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            7 Days
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('30 DAYS')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === '30 DAYS'
                            ? '#DFE7F5'
                            : 'transparent',
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontFamily: 'avenir-next-medium',
                            fontSize: 13,
                            color:
                                this.props.transaction_timeframe === '30 DAYS'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            30 Days
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('3 MONTHS')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === '3 MONTHS'
                            ? '#DFE7F5'
                            : 'transparent',
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontFamily: 'avenir-next-medium',
                            fontSize: 13,
                            color:
                                this.props.transaction_timeframe === '3 MONTHS'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            3 Months
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TransactionPicker;