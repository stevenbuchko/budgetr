import { LinearGradient } from 'expo-linear-gradient';
import { Text, Container, Header, Body } from 'native-base';
import * as React from 'react';
import { Image, TouchableOpacity, View, ImageBackground } from 'react-native';
import styles from './styles';

export interface Props { }

export interface State { }

class HomeHeader extends React.Component<Props, State> {
    render() {
        return (
            <ImageBackground
                source={require("../../../../assets/header-background.png")}
                resizeMode="contain"
                style={styles.backgroundImage}
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Your Budget</Text>
                </View>     
            </ImageBackground>
        );
    }
}

export default HomeHeader;