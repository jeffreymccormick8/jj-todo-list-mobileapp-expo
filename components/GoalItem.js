import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
   <TouchableOpacity 
   onPress= {props.onDelete.bind(this, props.id)}
   activeOpacity={0.8}>
       <View style={styles.todo}>
    <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        padding: 5,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'blue',
        marginTop: 6,
      },

});

export default GoalItem;