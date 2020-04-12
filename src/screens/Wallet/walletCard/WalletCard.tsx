import * as React from 'react';
import { Text } from 'native-base';
import { Dimensions, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

interface Account {
    name: string,
    mask: string
}

export interface Props {
    accounts: Account[]
}

export interface State {

}

class WalletCard extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        }
    }

    getCarouselItems() {
        let carouselItems = [];
        var i;
        console.log("length: " + this.props.accounts);
        for (i = 0; i <= this.props.accounts.length - 1; i++) {
            console.log("mask: " + this.props.accounts[i].mask);
            carouselItems.push({
                mask: this.props.accounts[i].mask,
                name: this.props.accounts[i].name
            });
        };
        console.log("lkjsdlk: " + carouselItems);
        return carouselItems;
    }

    _renderItem = ({ item, index }) => {
        return (
            <ImageBackground
                source={{
                    uri:
                        'https://budgetrapp.s3.us-east-2.amazonaws.com/images/card-background.png',
                }}
                resizeMode="contain"
                style={styles.cardBackground}
            >
                <View style={styles.accountWrapper}>
                    <Text style={styles.cardNum}>••••  ••••  ••••  {item.mask}</Text>
                    <View style={styles.bottomRow}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            </ImageBackground >
        );
    }

    render() {
        return (
            <View style={styles.carouselWrapper}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.getCarouselItems()}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
        );
    }
}

export default WalletCard;