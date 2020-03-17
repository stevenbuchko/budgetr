import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const PLAID_PUBLIC_KEY = '54c75f7e9700d13893662d872beee7';
const PLAID_ENV = 'sandbox';
const PLAID_PRODUCT = 'transactions';

export default class PlaidAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            status: '',
        };
    }

    render() {
        // Possible statuses: CONNECTED | EXIT | ACKNOWLEDGE | EVENT | LOGIN
        switch (this.state.status) {
            case 'plaid_link-undefined::connected':
                this.props.navigation.pop();
            case 'LOGIN':
            case 'plaid_link-undefined::exit':
                return;
            default:
                return this.renderTransactionConnection();
        }
    }

    renderTransactionConnection() {
        return (
            <WebView
                source={{
                    uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=${PLAID_PUBLIC_KEY}&env=${PLAID_ENV}&product=${PLAID_PRODUCT}&isWebView=true&isMobile=true`,
                }}
                onMessage={e => this.onMessage(e)}
            />

        );
    }


    onMessage(e) {
        if (!!!e || !!!e.nativeEvent) {
            return;
        }
        const encodedEventString = e.nativeEvent.data || null;
        const decodedEventString = decodeURIComponent(encodedEventString);
        const finalEventString = decodeURIComponent(decodedEventString);

        console.log(JSON.parse(finalEventString));

        this.props.handleEvent(JSON.parse(finalEventString));
        this.setState({
            data: JSON.parse(finalEventString),
            status: JSON.parse(finalEventString).action,
        });
        this.props.completePlaidLink(this.state.data.metadata);
    }
}