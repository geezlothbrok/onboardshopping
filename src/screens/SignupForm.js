import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function SignupForm() {
    return (
        <View style = {styles.container}>
            
            <View style = {styles.headingContainer}>
                <Text style = {styles.headText}>
                    Sign up
                </Text>
            </View>

            <View style = {styles.detailsContainer}>
                <TextInput style = {styles.username} placeholder = 'Username'></TextInput>
                <Text style = {styles.line}></Text>
                <TextInput style = {styles.username} placeholder = 'Email'></TextInput>
                <Text style = {styles.line}></Text>
                <TextInput style = {styles.username} placeholder = 'Password'></TextInput>
                <Text style = {styles.line}></Text>
                <TextInput style = {styles.username} placeholder = 'Password again'></TextInput>
                <Text style = {styles.line}></Text>
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.link}>
                <Text style = {styles.already}>You already have account?</Text>
                <TouchableOpacity>
                    <Text style = {styles.log}>Log in</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create ({
    container : {
        flex : 1,
        marginTop : 40,
        marginHorizontal : 50
    },
    headingContainer : {
        flex : 0.1
    },
    headText : {
        fontSize : 35,
        color : '#630AB3'
    },
    detailsContainer : {
        flex : 0.5,
    },
    username : {
        fontSize : 18,
        marginTop : 30
    },
    line : {
        height : 2,
        width : '100%',
        backgroundColor : '#630AB3',
        marginTop : 10
    },
    buttonContainer : {
        flex : 0.2,
        marginTop : 50,
        alignItems : 'center',
        justifyContent : 'center',
    },
    button : {
        height : 50,
        width : '100%',
        backgroundColor : '#630AB3',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 11
    },
    buttonText : {
        fontWeight : 'bold',
        fontSize : 23,
        color : 'white'
    },
    link : {
        flex : 0.1,
        flexDirection : 'row',
        marginLeft : 10,
        marginTop : 20
    },
    log : {
        marginLeft : 10,
        color : '#630AB3'
    },
    already : {
        color : '#424242'
    }
})