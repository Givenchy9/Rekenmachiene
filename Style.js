import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: 'black'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    inputContainer: {
        backgroundColor: 'black'
    },
    inputButton: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        height: 100,
        margin: 3,
    },

    inputButtonText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red'
    },
    displayContainer: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center'
    },

    displayText: {
        color: 'red',
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    }
});

export default Style;