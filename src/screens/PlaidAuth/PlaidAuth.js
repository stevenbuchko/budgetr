import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const PLAID_PUBLIC_KEY = '54c75f7e9700d13893662d872beee7';
const PLAID_ENV = 'sandbox';
const PLAID_PRODUCT = 'transactions';

export default class PlaidAuth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView
                source={{
                    uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=${PLAID_PUBLIC_KEY}&env=${PLAID_ENV}&product=${PLAID_PRODUCT}&isWebView=true&isMobile=true`,
                }}
                onMessage={e => this.onMessage(e)}
            />

        );
    }
}