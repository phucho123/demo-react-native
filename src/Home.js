import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, FlatList, SafeAreaView, Image, Switch, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'

const Home = () => {
    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
    ];
    const [isEnabled, setIsEnabled] = useState(false);
    const [text, setText] = useState("");
    const [apiData, setData] = useState([]);
    const getData = async () => {
        let res = await fetch('https://fakestoreapi.com/products')
        res = await res.json();
        setData(res);
    }
    return (

        <SafeAreaView style={{ display: "flex", gap: 10 }}>
            {/* Button */}
            <View style={styles.container}>
                <Text style={{
                    fontSize: 24,
                }}>Button</Text>
                <Button
                    title="Learn More"
                    color="blue"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => alert("Button is pressed")}
                />
            </View>

            {/* FlatList */}
            {/* <SafeAreaView style={styles.container}>
                <Text style={{
                    fontSize: 24,
                }}>FlatList</Text>
                <SafeAreaView>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Text style={{
                            fontSize: 16
                        }}>{item.title}</Text>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </SafeAreaView> */}

            {/* Image */}
            <View style={styles.container}>
                <Text style={{
                    fontSize: 24,
                }}>Image</Text>
                <View>
                    <Image source={require('../assets/favicon.png')} />
                </View>
            </View>

            {/* Switch */}
            <View style={styles.container}>
                <Text style={{
                    fontSize: 24,
                }}>Switch</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                />
            </View>

            {/* Pressable */}
            <View style={styles.container}>
                <Text style={{
                    fontSize: 24,
                }}>Pressable</Text>
                <Pressable style={{
                    backgroundColor: '#2196F3',
                    padding: 10,
                    borderRadius: 5,
                }} onPress={() => alert("Pressable is pressed")}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>Press Me</Text>
                </Pressable>
            </View>

            {/* TextInput */}
            <View style={styles.container}>
                <Text style={{
                    fontSize: 24,
                }}>TextInput</Text>
                <View>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginBottom: 20,
                        }}
                        onChangeText={(val) => setText(val)}
                        value={text}
                        placeholder="Enter text here"
                    />
                </View>
            </View>

            {/* TouchableOpacity*/}
            <View style={styles.container}>
                <Text style={styles.text}>TouchableOpacity</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'blue',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 5,
                    }}
                    onPress={() => alert("TouchableOpacity is pressed")}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                    }}>Press Me</Text>
                </TouchableOpacity>
            </View>

            {/* ScrollView */}
            {/* <View style={styles.container}>
                <Text style={styles.text}>ScrollView</Text>
                <View style={{ borderColor: "gray", borderWidth: 2, borderRadius: 10 }}>
                    <ScrollView style={{
                        height: 100,
                        paddingHorizontal: 10,
                    }}>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                        <Text>Scroll me</Text>
                    </ScrollView>
                </View>
            </View> */}

            {/* Get API data */}
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>Get API data</Text>
                    <View>
                        <Button
                            title="Get data"
                            color="blue"
                            accessibilityLabel="Learn more about this purple button"
                            onPress={() => getData()}
                        />
                    </View>
                </View>
                {
                    apiData.map((data) => (
                        <Text key={data.id}>
                            {data.title}
                        </Text>
                    ))
                }
            </View>
        </SafeAreaView >
    )
}

export default Home

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "space-between"
    }
});