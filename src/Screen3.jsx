import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

function Screen3() {
    const [state, setState] = useState("");
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
            <Image
                style={{
                    width: 99,
                    height: 112,
                    marginBottom: 10,
                }}
                source={require("../assets/lock.png")}
            />

            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: 10,
                }}
            >
                FORGET
            </Text>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: 10,
                }}
            >
                PASSWORD
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    marginBottom: 30,
                }}
            >
                Provide your account’s email for which you want to reset your
                password{" "}
            </Text>
            <View>
                <TextInput
                    value={state}
                    onChangeText={setState}
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontSize: 24,
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />

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
                        NEXT
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

export default Screen3;
