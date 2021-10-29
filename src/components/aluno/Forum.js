import React from 'react';
import { View,Image,StyleSheet,TextInput}from 'react-native';
import { Text,Dimensions} from 'react-native';

export default function Forum(){
	return (
		<View style={{ flex: 1, backgroundColor: '#A5CBD6' }}>
			 <View style={style.header}>
			      <Text style={style.textHeader}>Participe do nosso fórum</Text>
			  </View>
			  <View style={style.header2}>
			      <Image
				  style={style.img}
				  source={require('../../assets/image24.png')}
			      />
			      <TextInput
				  placeholder="Pesquise uma palavra chave"
				  style={style.textInput}
			      />
			  </View>
			  <View style={{alignItems:'center'}}>
			      <TextInput
				  placeholder="Adicione no mural"
				  style={style.textInput2}
			      />
			  </View>
			  <View style={style.view}>
			      <Text style={style.title}>Aluna Maria</Text>
			      <View style={style.view2}>
				  <Text style={style.subtitle}>Vocês acreditam que o Brasil foi descoberto ou invadido?</Text>
			      </View>
			      <View style={style.comentario}>
			      <TextInput
				  placeholder='Adicione um comentário'
				  style={style.input}
			      />
			      </View>
			  </View>
		</View>
	      );
} 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const style = StyleSheet.create({
	conteiner:{
	    flex:1,
	    backgroundColor:'#A5CBD6'
	},
	header:{
	    backgroundColor:'#2293B0',
	    width:windowWidth,
	    height:windowHeight*0.15,
	    justifyContent:'center',
	    alignItems:'center',
	    marginTop:0
	},
	textHeader:{
	    fontWeight:'bold',
	    fontSize:25,
	    fontFamily:'Roboto',
	    color:'#FF6800',
	    
	},
    
	header2:{
	    alignItems:'flex-end',
	    paddingTop:0,
	    paddingRight:20
	},
	textInput:{
	
	    marginBottom: 30,
	    padding: 15,
	    width: 290,
	    height: 48,
	    fontSize: 16,
	    fontWeight: "bold",
	    borderRadius: 30,
	    borderColor: "#DBA61C",
	    borderStartWidth : 2,
	    borderEndWidth : 2,
	    borderTopWidth : 2,
	    borderLeftWidth: 2,
	    borderRightWidth: 2,
	    borderBottomWidth : 2,
	},
	img:{
	    right:10,
	    top:40
	},
	textInput2:{
	
	    marginBottom: 30,
	    padding: 15,
	    width: 250,
	    height: 60,
	    fontSize: 16,
	    fontWeight: "bold",
	    borderRadius: 30,
	    borderColor: "#DBA61C",
	    borderStartWidth : 2,
	    borderEndWidth : 2,
	    borderTopWidth : 2,
	    borderLeftWidth: 2,
	    borderRightWidth: 2,
	    borderBottomWidth : 2,
	},
    
	view:{
	    left:30,
	    width: 300,
	    height: 160,
	    borderColor: "#DBA61C",
	    borderStartWidth : 2,
	    borderEndWidth : 2,
	    borderTopWidth : 2,
	    borderLeftWidth: 2,
	    borderRightWidth: 2,
	    borderBottomWidth : 2,
	    paddingLeft:30,
        marginTop:-12
	    
	},
    
	title:{
	   fontSize:18,
	   fontWeight:'400',
	   right:10
	},
    
	view2:{
	    width:277,
	    height:57,
	    padding:10
	},
    
	subtitle:{
	    fontFamily:'Roboto',
	    fontWeight:'400',
	    fontSize:16
	},
	comentario:{
	    paddingTop:20,
	    alignItems:'flex-start'
	},
	input:{
	    marginBottom: 30,
	    width: 240,
	    height: 41,
	    fontSize: 16,
	    fontWeight: "bold",
	    borderRadius: 30,
	    borderColor: "#DBA61C",
	    borderStartWidth : 2,
	    borderEndWidth : 2,
	    borderTopWidth : 2,
	    borderLeftWidth: 2,
	    borderRightWidth: 2,
	    borderBottomWidth : 2,
	    textAlign:'center'
	}
    })


 