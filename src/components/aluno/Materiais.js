import React, { useState } from 'react';
import { View,StyleSheet,KeyboardAvoidingView}from 'react-native';
import {Dimensions} from 'react-native';
import { Button,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { TouchableOpacity } from 'react-native';



export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
	    	    <View style={styles.header}>
				<Text style={styles.textHeader}>Disciplinas</Text>
			</View>
       <KeyboardAvoidingView 
        	behavior={Platform.OS == "ios" ? "padding" : "height"}
		style={[styles.container , specificStyle.container2]}>
            <ScrollView style={{marginTop:10 , width:"100%"}}>
		<View style={styles.viewBtn}>
			<TouchableOpacity style={styles.btn} onPress={function(){
				()=>navigation.navigate('Feed')
			}}>
				
				<Text style={styles.textbtn}> Matemática</Text>
				<Icon style={styles.icon} name="calculator" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn} onPress={function(){
				()=>navigation.navigate('Feed')
			}}>
				
				<Text style={styles.textbtn}> Quimica</Text>
				<Icon style={styles.icon} name="flask" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn} onPress={function(){
				()=>navigation.navigate('Feed')
			}}>
				
				<Text style={styles.textbtn}> Física</Text>
				<Icon style={styles.icon} name="superscript" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn} onPress={function(){
				()=>navigation.navigate('Feed')
			}}>
				
				<Text style={styles.textbtn}> História</Text>
				<Icon style={styles.icon} name="institution" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn} onPress={function(){
				()=>navigation.navigate('Feed')
			}}>
				
				<Text style={styles.textbtn}> Geografia</Text>
				<Icon style={styles.icon} name="mortar-board" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn} onPress={function(){
				()=>navigation.navigate('Feed')
			}}>
				
				<Text style={styles.textbtn}> Português</Text>
				<Icon style={styles.icon} name="book" size={20}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn} onPress={function(){
				()=>navigation.navigate('Feed')
			}}>
				
				<Text style={styles.textbtn}> Biologia</Text>
				<Icon style={styles.icon} name="pagelines" size={20}/>
			</TouchableOpacity>

		</View>

            </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor:'#A5CBD6',
       width:windowWidth
     },
     header:{
	backgroundColor:'#2293B0',
	width:windowWidth,
	height:windowHeight*0.15,
	justifyContent:'center',
	alignItems:'center',
	
    },
    textHeader:{
	fontWeight:'bold',
	fontSize:25,
	fontFamily:'Roboto',
	color:'#FF6800',
	
    },
    btn:{
	    backgroundColor:'green',
	    width:windowHeight*0.45,
	    padding:5,
	    height: windowHeight*0.10,
	    borderBottomWidth:1,
	    borderRadius:40,
	    flexDirection:'row',
	    margin:5
	
	    
    },
    viewBtn:{
	    alignItems:'center',
	    justifyContent:'center',
	    flex:1,
	    
	    
	    
    },
    textbtn:{
	    textAlign:'left',
	    justifyContent:'center',
	    fontSize:20,
	    width:windowWidth*0.35,
	    margin: 5,
	    color:"white",
	    paddingLeft:5
	    
	    
	
    },
    icon:{
	paddingTop:10,
	paddingLeft:windowWidth*0.20,
	width:windowWidth*0.30,
	color:"white",
	

	
	

    }
 
 })
 
 const specificStyle = StyleSheet.create({
	container2:{
			
	},	 
	button: {
		width:windowWidth,
		marginTop:10,
		borderRadius:8,
		borderStyle:'solid',
	    
	  }
	})

