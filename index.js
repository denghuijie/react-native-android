import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class HelloWorld extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>hello react native</Text>
                <Text>aaa+{JSON.stringify(this.props)}</Text>
            </View>
        );
    }
}
class HelloWorld2 extends React.Component {
    render() {
        let data1=  this.props.data1;
        let data2=  this.props.data2;
        let data3=  this.props.data3;
        let tagfrom=this.props.fromtag;
        if (tagfrom=='A')
        {
            return (
                <Text>{data1}</Text>
            );
        }else if (tagfrom=='B'){
            return (
                <Text>{data2}</Text>
            );
        }
        else if (tagfrom=='C'){
            return (
                <Text>{data3}</Text>
            );
        }else{
            return <Text>aaa+{JSON.stringify(this.props)}</Text>
        }
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('App1', () => HelloWorld);
AppRegistry.registerComponent('App2', () => HelloWorld2);