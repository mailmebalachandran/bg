import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const StateDetails = (props) =>{

    return (
        <View style={{margin:20}}>
            <Button title="Back" onPress={() => {props.navigation.navigate("Dashboard")}}></Button>
            <Text style={{padding:10, fontWeight:'bold'}}>State : <Text>{props.route.params.state.state}</Text></Text>
            <Text style={{padding:10, color:'red'}}>Active Count : <Text>{props.route.params.state.active}</Text></Text>
            <Text style={{padding:10, color:'darkred'}}>Confirmed Count : <Text>{props.route.params.state.confirmed}</Text></Text>
            <Text style={{padding:10, color:'gray'}}>Death Count : <Text>{props.route.params.state.deaths}</Text></Text>
            <Text style={{padding:10, color:'green'}}>Recovered Count : <Text>{props.route.params.state.recovered}</Text></Text>
            <Text style={{padding:10}}>Last Updated Date : <Text>{props.route.params.state.lastupdatedtime}</Text></Text>
            <Button title="Back" onPress={() => {props.navigation.navigate("Dashboard")}}></Button>
        </View>
    )
}
export default StateDetails;