import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>📡 Contact</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#FFF',
        fontSize: 32,
    },
});
