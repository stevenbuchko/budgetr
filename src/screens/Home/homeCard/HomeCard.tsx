import { Text, Container, Header, Body, Card, Left, Right, Toast } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native';
import BudgetChart from './budgetChart/BudgetChart'
import styles from './styles';

export interface Props { 
    budget: number;
    updateBudget: any;
    spent: number;
}

export interface State { 
    modalVisible: boolean;
}

class HomeCard extends React.Component<Props, State> {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible: boolean) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Card style={styles.cardContainer}>
                <View style={styles.headerWrapper}>
                    <View style={styles.leftSide}>
                        <Text style={styles.forText}>for </Text>
                        <Text style={styles.monthText}>Feburary</Text>
                    </View>
                    <Right style={styles.rightSide}>
                        <TouchableOpacity onPress={() => this.props.updateBudget(890)}>
                            <Text style={styles.editBtnText}>Edit Budget</Text>
                        </TouchableOpacity>
                    </Right>
                </View>
                <BudgetChart 
                    budget={this.props.budget}
                    spent={this.props.spent}
                />
            </Card>
        );
    }
}

export default HomeCard;