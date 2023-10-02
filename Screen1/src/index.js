import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const index = ({ navigation }) => {
    return (
        <View style={styles.btn}>
            <Button
                title="Screen1"
                onPress={() => navigation.navigate("Screen1")} />
            <Button
                title="Screen2"
                onPress={() => navigation.navigate("Screen2")}
            />
            <Button
                title="Screen3"
                onPress={() => navigation.navigate("Screen3")} />
            <Button
                title="Screen4"
                onPress={() => navigation.navigate("Screen4")} />
            <Button
                title="Screen5"
                onPress={() => navigation.navigate("Screen5")} />
            <Button
                title="Screen6"
                onPress={() => navigation.navigate("Screen6")} />
            <Button
                title="Screen7"
                onPress={() => navigation.navigate("Screen7")} />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
    },
});

export default index;