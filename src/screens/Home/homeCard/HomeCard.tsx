import { Text, Container, Header, Body, Card, Left, Right } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View, ImageBackground } from 'react-native';
import BudgetChart from './budgetChart/BudgetChart'
import styles from './styles';

export interface Props { }

export interface State { }

class HomeCard extends React.Component<Props, State> {
    render() {
        return (
            <Card style={styles.cardContainer}>
                <View style={styles.headerWrapper}>
                    <View style={styles.leftSide}>
                        <Text style={styles.forText}>for </Text>
                        <Text style={styles.monthText}>Feburary</Text>
                    </View>
                    <Right style={styles.rightSide}>
                        <TouchableOpacity>
                            <Text style={styles.editBtnText}>Edit Budget</Text>
                        </TouchableOpacity>
                    </Right>
                </View>
                <BudgetChart />
            </Card>
        );
    }
}

export default HomeCard;