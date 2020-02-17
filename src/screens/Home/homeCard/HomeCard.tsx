import { LinearGradient } from 'expo-linear-gradient';
import { Text, Container, Header, Body, Card } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View, ImageBackground } from 'react-native';
import styles from './styles';

export interface Props { }

export interface State { }

class HomeCard extends React.Component<Props, State> {
    render() {
        return (
            <Card style={styles.cardContainer}>

            </Card>
        );
    }
}

export default HomeCard;