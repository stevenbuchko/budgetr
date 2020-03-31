import { Text } from 'native-base';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export interface Props {
    navigation: any;
}

export interface State { }

class WalletHeader extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.headerWrapper}>
                <Text style={styles.headerTitle}>Your Wallet</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddWalletAccount')}>
                    <Image
                        source={require("../../../../assets/add-card-icon.png")}
                        resizeMode="contain"
                        style={styles.addWalletBtn}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default WalletHeader;