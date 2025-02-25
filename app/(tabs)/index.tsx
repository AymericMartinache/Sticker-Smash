import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceHolderImage = require('@/assets/images/background-image.png');

export default function Home() {
    // Image Picker
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result);
            setSelectedImage(result.assets[0].uri);
        } else {
            alert("Vous n'avez choisi aucunes images...");
        }
    };

    const [selectedImage, setSelectedImage] = useState<string | undefined>(
        undefined
    );

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer
                    imgSource={PlaceHolderImage}
                    selectedImage={selectedImage}
                />
            </View>
            <View style={styles.footerContainer}>
                <Button
                    label="Choisir une photo"
                    theme="primary"
                    onPress={pickImageAsync}
                />
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
