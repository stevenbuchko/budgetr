import { Text, Container, Form, Item, Label, Input } from 'native-base';
import axios from "axios";
import * as React from 'react';
import { Button, Image, TouchableOpacity, View } from 'react-native';
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

    updateBudget() {
        const new_budget = Number(this.state.input_amount);
        console.log(new_budget);

        const params = {
            'budget_amount': new_budget,
        };
        
        try {
            axios.put('http://192.168.1.2:3000/api/v1/users/dc5bf63a-38d1-474e-b944-9a18e206a81e', params,
                {
                    headers: {
                        'content-type': 'application/json',
                    }
                }
            )
            .then(res => {
                console.log(res.data);
                this.props.navigation.pop();
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log('Fetch Error:', error)
        }
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
                    <Button 
                        title="Update Budget"
                        onPress={() => this.updateBudget()}
                    />
                </View>
            </Container>
        );
    }
}

export default EditBudgetScreen;