import React from "react";
import { View, Text, Container } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";

export interface Props { }

export interface State { }

class HomeScreen extends React.Component<Props, State> {
    render() {
        return (
            <Container style={styles.container}>
                <HomeHeader/>
                <View>
                    <Text>This is the home screen</Text>
                </View>
            </Container>
        );
    }
}

export default HomeScreen;