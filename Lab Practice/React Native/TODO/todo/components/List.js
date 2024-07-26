import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

function List({ items }) {
    const [listItems, setItemsList] = useState(items || []);
    const [filterTerm, setFilterTerm] = useState("");

    const mappingFunc = (item, index) => (
        <View key={index}>
            <Text>{item}</Text>
        </View>
    );

    let  filterFunc=(text,item)=>{
        item.toLowerCase().includes(text.toLowerCase())

    };

    const handleFilterChange = (text) => {
        setFilterTerm(text);
        const filteredItems = items.filter(item =>
            item.toLowerCase().includes(text.toLowerCase())
        );
        setItemsList(filteredItems);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={handleFilterChange}
                value={filterTerm}
                placeholder="Enter term to filter"
            />
            {listItems.map(mappingFunc)}
        </View>
    );
}

export default List;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10
    }
});
