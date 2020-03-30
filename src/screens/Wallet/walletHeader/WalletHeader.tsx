import { Text } from 'native-base';
import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

export interface Props { }

export interface State { }

class WalletHeader extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.headerWrapper}>
                <Text style={styles.headerTitle}>Your Wallet</Text>
            </View>
        );
    }
}

export default WalletHeader;