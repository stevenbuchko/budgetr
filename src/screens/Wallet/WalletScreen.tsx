import React from "react";
import { Text, View } from 'react-native';
import styles from "./styles";
import WalletCard from "./walletCard/WalletCard";
import WalletHeader from "./walletHeader/WalletHeader";

export interface Props {
    navigation: any;
}

export interface State { }

const PLAID_PUBLIC_KEY = "54c75f7e9700d13893662d872beee7";
const PLAID_ENV = "sandbox";
const PLAID_PRODUCT = "transactions";

class WalletScreen extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <WalletHeader
                    navigation={this.props.navigation}
                />
                <WalletCard />
            </View>
        )
    }
}

export default WalletScreen;