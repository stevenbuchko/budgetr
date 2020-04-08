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
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('DAY')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === 'DAY'
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
                                this.props.transaction_timeframe === 'DAY'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            Day
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('WEEK')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === 'WEEK'
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
                                this.props.transaction_timeframe === 'WEEK'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            Week
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('MONTH')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === 'MONTH'
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
                                this.props.transaction_timeframe === 'MONTH'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            Month
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeTransactionTimeframe('YEAR')}>
                    <View style={{
                        backgroundColor: this.props.transaction_timeframe === 'YEAR'
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
                                this.props.transaction_timeframe === 'YEAR'
                                    ? '#0047CC'
                                    : '#77869E',
                        }}>
                            Year
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TransactionPicker;