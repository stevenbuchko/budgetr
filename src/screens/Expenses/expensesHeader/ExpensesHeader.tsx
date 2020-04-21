import { Text } from 'native-base';
import * as React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { format } from 'date-fns'
import styles from './styles';

export interface Props { }

export interface State { }

class ExpensesHeader extends React.Component<Props, State> {
    month = format(new Date(), 'MMMM');

    render() {
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
                            <Text style={styles.bottomText}>$4,500.00</Text>
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
                                <Text style={styles.positiveText}>$4,500.00</Text>
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
                                <Text style={styles.negativeText}>$4,500.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default ExpensesHeader;