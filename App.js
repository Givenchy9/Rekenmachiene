import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React, { useState } from 'react';
import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '+', 'ce'],
  ['c', '=',]
];

export default function App() {
  const [inputValue, setInputValue] = useState('0');
  const [previousInputValue, setPreviousInputValue] = useState('0');
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  // Render the input buttons for the calculator
  function renderButtons() {
    return inputButtons.map((row, r) => (
      <View style={Style.inputRow} key={"row-" + r}>
        {row.map((input, i) => (
          <InputButton
            value={input}
            onPress={() => buttonPress(input)}
            key={r + "-" + i}
          />
        ))}
      </View>
    ));
  }

  // Handle button press based on the input type (number or operator)
  const buttonPress = (input) => {
    if (typeof input === 'number') {
      handleNumberInput(input);
    } else {
      handleStringInput(input);
    }
  };

  // Handle number input (build the number incrementally)
  const handleNumberInput = (num) => {
    // Prevent adding extra leading zeros
    if (inputValue === '0') {
      setInputValue(num.toString());
    } else {
      setInputValue(inputValue + num);
    }
  };

  // Handle operator or action input (e.g., +, -, *, /, =, c, ce)
  const handleStringInput = (str) => {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        // Set the operator and store the current value
        setSelectedSymbol(str);
        setPreviousInputValue(inputValue);
        setInputValue('0');
        break;

      case '=':
        // Perform the calculation
        if (selectedSymbol) {
          const result = calculateResult(selectedSymbol);
          setInputValue(result.toString());
          setPreviousInputValue('0');
          setSelectedSymbol(null);
        }
        break;

      // case 'ce':
      //   // Clear the calculator's memory
      //   setInputValue('0');
      //   setPreviousInputValue('0');
      //   setSelectedSymbol(null);
      //   break;

      case 'c':
        // Clear the current input value
        setInputValue('0');
        break;
    }
  };

  // Perform the calculation based on the selected operator
  const calculateResult = (operator) => {
    const prev = parseFloat(previousInputValue);
    const current = parseFloat(inputValue);

    switch (operator) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return prev / current;
      default:
        return current;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={Style.displayContainer}>
        <Text style={Style.displayText}>{inputValue}</Text>
      </View>
      <View style={Style.inputContainer}>
        {renderButtons()}
      </View>
    </View>
  );
}
