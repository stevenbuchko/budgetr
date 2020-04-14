import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Text, View } from 'native-base';
import { Button, Image, TouchableOpacity } from 'react-native';
import styles from "./styles";

const PLAID_PUBLIC_KEY = '54c75f7e9700d13893662d872beee7';
const PLAID_ENV = 'sandbox';
const PLAID_PRODUCT = 'transactions';
const CLIENT_NAME = 'Budgetr';

const injectedJavaScript = `(function() {
  window.postMessage = function(data) {
    window.ReactNativeWebView.postMessage(data);
  };
})()`;

export default class PlaidAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            status: 'LOGIN',
        };
    }

    render() {
        // Possible statuses: CONNECTED | EXIT | ACKNOWLEDGE | EVENT | LOGIN
        switch (this.state.status) {
            case 'plaid_link-undefined::connected':
                return this.renderDetails();
            case 'LOGIN':
            case 'plaid_link-undefined::exit':
                return this.renderSplash();
            default:
                return this.renderTransactionConnection();
        }
    }

    renderDetails() {
        this.props.completePlaidLink(this.state.data.metadata);

        return (
            <View style={styles.container}>
                <Text>Institution: {this.state.data.metadata.institution.name}</Text>
                <Text>
                    Institution ID: {this.state.data.metadata.institution.institution_id}
                </Text>
            </View>
        );
    }

    renderSplash() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Image
                            source={{
                                uri:
                                    'https://budgetrapp.s3.us-east-2.amazonaws.com/images/back-button.png',
                            }}
                            resizeMode="contain"
                            style={styles.backBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Add Account</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Add New Account"
                        color="#0047CC"
                        onPress={() => this.setState({ status: '' })}
                    />
                </View>
            </View>
        )
    }

    renderTransactionConnection() {
        return (
            <WebView
                source={{
                    uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=${PLAID_PUBLIC_KEY}&env=${PLAID_ENV}&product=${PLAID_PRODUCT}&clientName=${CLIENT_NAME}&isWebView=true&isMobile=true`,
                }}
                onMessage={e => this.onMessage(e)}
                injectedJavaScript={injectedJavaScript}
            />
        );
    }


    onMessage(e) {
        console.log('in on message shit');
        if (!!!e || !!!e.nativeEvent) {
            console.log('no e');
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