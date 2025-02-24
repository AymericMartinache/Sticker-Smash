import { Text, View, StyleSheet } from 'react-native';

import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>🏠 Home Screen</Text>
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
});
