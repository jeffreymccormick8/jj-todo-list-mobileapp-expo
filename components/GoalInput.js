import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter Goal Here"
                style={styles.input} onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>

    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        width: '75%',
        borderColor: '#3d3d3d',
        borderWidth: 0.5,
        padding: 5
      },
});
export default GoalInput;