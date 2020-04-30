import { Text, View } from 'native-base';
import { Image } from 'react-native';
import * as React from 'react';
import styles from './styles';

export interface Props {

}

export interface State {

}

class CategoryCard extends React.Component<Props, State> {
    positiveOrNegativeColor(amount: number) {
        if (amount > 0) {
            return '#EE5A55'
        } else {
            return '#2AD95A'
        }
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                <Image
                    source={{
                        uri:
                            'https://budgetrapp.s3.us-east-2.amazonaws.com/images/Shops.png',
                    }}
                    resizeMode="contain"
                    style={styles.categoryIcon}
                />
                <View style={styles.textWrapper}>
                    <Text
                        style={styles.categoryText}
                        ellipsizeMode='tail'
                        numberOfLines={1}
                    >
                        Shops
                    </Text>
                </View>
                <Text style={{
                    alignSelf: 'center',
                    color: this.positiveOrNegativeColor(300),
                    fontSize: 16,
                    fontFamily: 'avenir-next-medium',
                    textAlign: 'right',
                    flex: 1,
                    marginRight: 20
                }}>
                    $300.00
                </Text>
            </View >
        )
    }
}

export default CategoryCard;