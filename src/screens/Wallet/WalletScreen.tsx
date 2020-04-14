import React from "react";
import { View } from 'react-native';
import axios from "axios";
import styles from "./styles";
import WalletCard from "./walletCard/WalletCard";
import WalletHeader from "./walletHeader/WalletHeader";

interface Account {
    name: string;
    mask: string;
}

export interface Props {
    navigation: any;
}

export interface State {
    accounts: Account[];
}

const PLAID_PUBLIC_KEY = "54c75f7e9700d13893662d872beee7";
const PLAID_ENV = "sandbox";
const PLAID_PRODUCT = "transactions";

class WalletScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            accounts: []
        };
    }

    async fetchData() {
        try {
            await axios.get('http://192.168.1.2:3000/api/v1/plaid/dc5bf63a-38d1-474e-b944-9a18e206a81e')
                .then(res => {
                    console.log('data: ' + res.data.accounts);
                    const accounts = res.data.accounts;

                    this.setState({ accounts });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log('Fetch Error:', error)
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <WalletHeader
                    navigation={this.props.navigation}
                />
                <WalletCard
                    accounts={this.state.accounts}
                />
            </View>
        )
    }
}

export default WalletScreen;