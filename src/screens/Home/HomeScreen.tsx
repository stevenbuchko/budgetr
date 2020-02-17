import React from "react";
import { View, Text, Container } from "native-base";
import styles from "./styles";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCard from "./homeCard/HomeCard";

export interface Props { }

export interface State { }

class HomeScreen extends React.Component<Props, State> {
    render() {
        return (
            <Container style={styles.container}>
                <HomeHeader />
                <HomeCard />
            </Container>
        );
    }
}

export default HomeScreen;