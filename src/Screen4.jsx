import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    VirtualizedList,
} from "react-native";

function Screen4() {
    return (
        <LinearGradient
            colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
            style={{
                backgroundColor: "#2196F3",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 20,
                height: "100vh",
                width: "100vw",
            }}
        >
            <Text
                style={{
                    fontSize: 60,
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: 100,
                }}
            >
                CODE
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    marginBottom: 50,
                }}
            >
                VERIFICATION
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                }}
            >
                Enter ontime password sent on
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    marginBottom: 50,
                }}
            >
                ++849092605798
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    marginBottom: 30,
                }}
            >
                <TextInput
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: 24,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />
                <TextInput
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: 24,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />{" "}
                <TextInput
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: 24,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />{" "}
                <TextInput
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: 24,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />{" "}
                <TextInput
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: 24,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />{" "}
                <TextInput
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: 24,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />
            </View>
            <TouchableOpacity
                style={{
                    width: "100%",
                    backgroundColor: "#FFC107",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 5,
                    marginBottom: 15,
                    marginHorizontal: 10,
                }}
            >
                <Text
                    style={{
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    VERIFY CODE
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default Screen4;
