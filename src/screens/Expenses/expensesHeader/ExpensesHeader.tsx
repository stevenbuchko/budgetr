import { Text } from 'native-base';
import * as React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { format } from 'date-fns'
import styles from './styles';

export interface Props {
    total_expenses_formatted: string;
    total_revenue_formatted: string;
    total_net_formatted: string;
}

export interface State { }

class ExpensesHeader extends React.Component<Props, State> {
    month = format(new Date(), 'MMMM');

    render() {
        const { total_expenses_formatted, total_revenue_formatted, total_net_formatted } = this.props;

        return (
            <ImageBackground
                source={{
                    uri:
                        'https://budgetrapp.s3.us-east-2.amazonaws.com/images/header-background.png',
                }}
                resizeMode="contain"
                style={styles.backgroundImage}
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Expenses</Text>
                    <View style={styles.headerInfo}>
                        <View style={styles.headerInfoLeft}>
                            <Text style={styles.topText}>{this.month} Net</Text>
                            <Text style={styles.bottomText}>{total_net_formatted}</Text>
                        </View>
                        <View style={styles.headerInfoLeft}>
                            <View style={styles.positiveWrapper}>
                                <Image
                                    source={{
                                        uri:
                                            'https://budgetrapp.s3.us-east-2.amazonaws.com/images/up-arrow.png',
                                    }}
                                    resizeMode="contain"
                                    style={styles.arrowImage}>
                                </Image>
                                <Text style={styles.positiveText}>{total_revenue_formatted}</Text>
                            </View>
                            <View style={styles.negativeWrapper}>
                                <Image
                                    source={{
                                        uri:
                                            'https://budgetrapp.s3.us-east-2.amazonaws.com/images/down-arrow.png',
                                    }}
                                    resizeMode="contain"
                                    style={styles.arrowImage}>
                                </Image>
                                <Text style={styles.negativeText}>{total_expenses_formatted}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default ExpensesHeader;