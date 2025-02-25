import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { View, StyleSheet } from 'react-native';

const PlaceHolderImage = require('@/assets/images/background-image.png');

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceHolderImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button label="Choisir une photo" theme="primary" />
                <Button label="Utiliser cette photo" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 32,
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#FFF',
    },

    imageContainer: {
        flex: 1,
        marginTop: 10,
    },

    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
