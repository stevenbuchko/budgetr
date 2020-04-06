import { Text } from 'native-base';
import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

export interface Props { }

export interface State { }

class HomeHeader extends React.Component<Props, State> {
    render() {
        return (
            <ImageBackground
                source={{
                    uri:
                        'https://budgetrapp.s3.us-east-2.amazonaws.com/images/header-background.png',
                }}
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