import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const mylist = [
        {
            "date": "20/09",
            "weekday": "Seg",
            "max": 34,
            "min": 18,
            "description": "Tempo limpo",
            "condition": "clear_day"
        },
        {
            "date": "21/09",
            "weekday": "Ter",
            "max": 35,
            "min": 15,
            "description": "Chuvas esparsas",
            "condition": "rain"
        },
        {
            "date": "22/09",
            "weekday": "Qua",
            "max": 18,
            "min": 13,
            "description": "Chuvas esparsas",
            "condition": "rain"
        },
        {
            "date": "23/09",
            "weekday": "Qui",
            "max": 21,
            "min": 12,
            "description": "Tempo limpo",
            "condition": "clear_day"
        },
        {
            "date": "24/09",
            "weekday": "Sex",
            "max": 28,
            "min": 13,
            "description": "Tempo limpo",
            "condition": "clear_day"
        },
        {
            "date": "25/09",
            "weekday": "Sáb",
            "max": 26,
            "min": 16,
            "description": "Chuvas esparsas",
            "condition": "rain"
        },
        {
            "date": "26/09",
            "weekday": "Dom",
            "max": 30,
            "min": 18,
            "description": "Chuvas esparsas",
            "condition": "rain"
        },
        {
            "date": "27/09",
            "weekday": "Seg",
            "max": 30,
            "min": 18,
            "description": "Chuvas esparsas",
            "condition": "rain"
        },
        {
            "date": "28/09",
            "weekday": "Ter",
            "max": 31,
            "min": 20,
            "description": "Chuvas esparsas",
            "condition": "rain"
        },
        {
            "date": "29/09",
            "weekday": "Qua",
            "max": 34,
            "min": 21,
            "description": "Chuvas esparsas",
            "condition": "rain"
        }      
];

export default function Home(){
    return(
        <SafeAreaView style={styles.container}> 
            <Menu/>
            <Header/>
            <Conditions/>

            <FlatList
            horizontal={true}
            contentContainerStyle={{paddingBottom:'5%'}}
            style={styles.list}
            data={mylist}
            keyExtractor={item=>item.date}
            renderItem={({item}) => <Forecast data={item}/>}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e8f0ff',
        paddingTop:'5%'
    },
    list:{
        marginTop:10,
        marginLeft:10,
    }
});