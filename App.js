
import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import  Header  from './src/components/header';

export default class App extends Component{
    constructor(props){
       super(props);

       this.state={
            input1: '',
            input2:'',
            result:''
        }
        this.sum = this.sum.bind(this);
        this.deduct = this.deduct.bind(this);
        this.div = this.div.bind(this);
        this.mult = this.mult.bind(this);
    }
  sum (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 + number2;
    this.setState({
        result:result
    })
  }
  deduct (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 - number2;
    this.setState({
        result:result
    })
  }
  div (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 / number2;

    this.setState({
        result:result
    })
  }
  mult (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 * number2;
    this.setState({
        result:result
    })
  }
    render() {
      return(
        <View style={styles.container}>

         <Header headerText='Simple Calculator'/>

         <View style={styles.buttonWrapper}>
            <Button onPress={this.sum}
                    color='#000000'
                    tit
                    title='+'
            
            />
             <Button onPress={this.mult}
                    color='#000000'
                    title='*'
            
            />
             <Button onPress={this.div}
                    color='#000000'
                    title='/'
            
            />
             <Button onPress={this.deduct}
                    color='#000000'
                    title='-'
            
            />

          </View>

          <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
                       placeholder='First Number'
                       onChangeText={(text) => {
                         this.setState({
                           input1:text
                         })
                       }}
                       value={this.state.input1}
            />
          

          <TextInput style={styles.input}
                       placeholder='Second Number'
                       onChangeText={(text) => {
                         this.setState({
                           input2:text
                         })
                       }}
                       value={this.state.input2}
          />

    <Text style={styles.simpleText}> Result: {this.state.result}</Text>
        
          </View>
        </View>
      );
    }
  }

   const styles = StyleSheet.create({
     container:{
       flex:1,
       flexDirection:'column'
     },
     buttonWrapper:{
       flexDirection:'row',
       justifyContent:'space-around',
       
      
     },

     contentWrapper:{
       padding:20,
       flexDirection:'column',
       justifyContent:'center'

     },
     input:{
        height:45,
        fontSize:20
     },
     simpleText:{
        height:45,
        fontSize:30
     }
     
   });