import React from "react";
import { Text, View, Container } from "native-base";
import styles from "./styles";
import { ScrollView } from "react-native";
import ExpensesHeader from "./expensesHeader/ExpensesHeader";

export interface Props {
    navigation: any;
}

export interface State {

}

class ExpensesScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <ExpensesHeader />
                </ScrollView>
            </Container>
        );
    }
}

export default ExpensesScreen;