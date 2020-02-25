import { LinearGradient } from 'expo-linear-gradient';
import { Text, Container, Header, Body, Form, Item, Label, Input } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View, ImageBackground } from 'react-native';
import styles from './styles';

export interface Props { 
    navigation: any;
}

export interface State { }

class HomeHeader extends React.Component<Props, State> {
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
                            <Label>Username</Label>
                            <Input />
                        </Item>
                    </Form>
                </View>
            </Container>
        );
    }
}

export default HomeHeader;