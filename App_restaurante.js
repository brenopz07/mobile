import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable} from 'react-native';

export default function App_restaurante(){

    const [number, setNumber] = useState(0);
    const [limite, setLimite] = useState(null)

    function add(){
        if (number < limite){
        setNumber(number + 1);
        }
    }

    function remove(){
        if (number > 0){
        setNumber(number - 1);
        }
    }
    return(
        <View style={styles.container}>
            <View>
                <Text>
                    Qual o limite desejado?
                </Text>
                <TextInput style={styles.input}
                keyboardType="numeric"
                value={limite}
                onChangeText={(texto) => setLimite(texto)}
                >
                </TextInput>
            </View>
            <Text style={styles.texto}>
                Pessoas no restaurente:
            </Text>
            <Text style={styles.numero}>
                {number}
            </Text>
            {number == 10 && 
            (<Text style={styles.textoLimite}>
                Limite de pessoas atingido
            </Text>)}
            <View style={styles.areabotao}>
                <Pressable 
                disabled = {number == 10}
                style={[styles.botao, { backgroundColor: '#1d75cd' },
                    number == 10 && {backgroundColor: '#DDD'}
                ]}
                onPress={add}
                >
                    <Text style={styles.botaoText}>Adicionar</Text>
                </Pressable>
            
                <Pressable 
                disabled = {number == 0}
                style={[styles.botao, { backgroundColor: '#cd3e1d' },
                    number == 0 && {backgroundColor: '#DDD'}
                ]}
                onPress={remove}
                >
                    <Text style={styles.botaoText}>Remover</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    texto:{
        fontSize:25,
        paddingBottom:40,
    },
    numero:{
        backgroundColor:'black',
        fontSize:50,
        padding:20,
        borderRadius:15,
        color:'white'
    },
    areabotao:{
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15, 
    },
    botao:{
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin:15,
    },
    botaoText:{
        fontSize: 22,
        color:'#FFF'
    },
    textoLimite:{
        fontSize: 25,
        color:'black',
        marginTop:10,
        backgroundColor:'yellow',
        padding:10,
        borderRadius:10,
    },
    input:{
        marginBottom:30,
        fontSize:15,
        backgroundColor:'white'
    }
});