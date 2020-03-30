import * as React from 'react';
import { Text } from 'native-base';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

export interface Props {

}

export interface State {

}

class WalletCard extends React.Component<Props, State> {

    render() {
        return (
            <View>
                <ImageBackground
                    source={require("../../../../assets/card-background.png")}
                    resizeMode="contain"
                    style={styles.cardBackground}
                >
                    <View style={styles.accountWrapper}>
                        <Text style={styles.cardNum}>••••  ••••  ••••  2930</Text>
                        <View style={styles.bottomRow}>
                            <Text style={styles.name}>Steven Buchko</Text>
                            <Text style={styles.expDate}>01/22</Text>
                        </View>
                    </View>
                </ImageBackground >
            </View>
        );
    }
}

export default WalletCard;