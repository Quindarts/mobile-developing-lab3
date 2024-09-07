import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FirstScreen = () => {
    return (
        <View
            style={{
                backgroundColor: '#2196F3',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
                height: '100vh',
                width: '100vw',
            }}
        >
            <View
                style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            ></View>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                    marginBottom: 10,
                }}
            >
                GROW
            </Text>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                    marginBottom: 10,
                }}
            >
                YOUR BUSINESS
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    marginBottom: 30,
                }}
            >
                We will help you to grow your business using online server
            </Text>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 120,
                        backgroundColor: '#FFC107',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderRadius: 5,
                        marginBottom: 15,
                        marginHorizontal: 10,
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 120,
                        backgroundColor: '#FFC107',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderRadius: 5,
                        marginBottom: 15,
                        marginHorizontal: 10,
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FirstScreen;
