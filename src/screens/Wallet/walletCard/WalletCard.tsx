import * as React from 'react';
import { Text } from 'native-base';
import { Dimensions, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

export interface Props {
    account_name: string;
    mask: string;
}

export interface State {

}

class WalletCard extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                },
            ]
        }
    }

    _renderItem = ({ item, index }) => {
        const { account_name, mask } = this.props;
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
                    <Text style={styles.cardNum}>••••  ••••  ••••  {item.title}</Text>
                    <View style={styles.bottomRow}>
                        <Text style={styles.name}>{item.text}</Text>
                    </View>
                </View>
            </ImageBackground >
        );
    }

    render() {
        const { account_name, mask } = this.props;
        console.log({ mask });

        return (
            <View style={styles.carouselWrapper}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
        );
    }
}

export default WalletCard;