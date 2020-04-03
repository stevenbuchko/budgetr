import React from "react";
import { View } from 'react-native';
import axios from "axios";
import styles from "./styles";
import WalletCard from "./walletCard/WalletCard";
import WalletHeader from "./walletHeader/WalletHeader";

export interface Props {
    navigation: any;
}

export interface State {
    account_name: string;
    mask: string;
}

const PLAID_PUBLIC_KEY = "54c75f7e9700d13893662d872beee7";
const PLAID_ENV = "sandbox";
const PLAID_PRODUCT = "transactions";

class WalletScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            account_name: '',
            mask: ''
        };
    }

    async fetchData() {
        try {
            await axios.get('http://192.168.1.2:3000/api/v1/plaid/dc5bf63a-38d1-474e-b944-9a18e206a81e')
                .then(res => {
                    console.log('data: ' + res.data);
                    const account_name = res.data.name;
                    const mask = res.data.mask;

                    this.setState({ account_name, mask });
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log('Fetch Error:', error)
        }
    }

    componentDidMount() {
        this.fetchData();

        this.props.navigation.addListener('focus', () => {
            this.fetchData();
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <WalletHeader
                    navigation={this.props.navigation}
                />
                <WalletCard
                    account_name={this.state.account_name}
                    mask={this.state.mask}
                />
            </View>
        )
    }
}

export default WalletScreen;