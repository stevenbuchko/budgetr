import React from "react";
import { Text, View } from "native-base";
import styles from "./styles";

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
            <View style={styles.container}>
                <Text>This is the expenses screen</Text>
            </View>
        );
    }
}

export default ExpensesScreen;