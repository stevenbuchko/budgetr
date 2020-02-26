import { Text, Container, Header, Body, Form, Item, Label, Input } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export interface Props { 
    navigation: any;
    route: any;
}

export interface State {
    input_amount: string;
 }



class EditBudgetScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        console.log(this.props.route.params);

        const budget_amount = this.props.route.params.budget_amount;

        console.log(budget_amount);

        this.state = {
            input_amount: budget_amount.toString(),
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Image 
                            source={require("../../../assets/back-button.png")}
                            resizeMode="contain" 
                            style={styles.backBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Edit Budget</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Budget</Label>
                            <Input
                                value={this.state.input_amount}
                                onChangeText={(i) => this.setState({ input_amount: i })}
                            />
                        </Item>
                    </Form>
                </View>
            </Container>
        );
    }
}

export default EditBudgetScreen;