import React from "react";
import { Text, View } from 'react-native';
import styles from "./styles";
import { WebView } from "expo";
import { Button } from "native-base";

export interface Props {
    navigation: any;
}

export interface State { }

class AddWalletAccountScreen extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the add wallet account screen</Text>
            </View>
        )
    }
}

export default AddWalletAccountScreen;