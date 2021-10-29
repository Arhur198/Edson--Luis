import  React from 'react';
import { View,StyleSheet}from 'react-native';
import { Text,SafeAreaView,Dimensions,FlatList } from 'react-native';


const DATA = [
	{  
	    id: "Postagem1",
	    title: 'Professora Marta',
	    text: 'Bom dia , alunos de História, as atvidades dessa semana já estão disponiveis!',
	},
	{
	    id: "Postagem2",
	    title: 'Professor Antônio',
	    text: 'Se ficaram com alguma dúvida da aula, não exitem em perguntar!!!',
	},
	{
	    id: "Postagem3",
	    title: 'Professora Ana Clara',
	    text: 'Qualquer coisa que quiserem perguntar, me enviem um email que eu responderei!!!',
	},
	{
	    id: "Postagem4",
	    title: 'Professor Jorge Otávio',
	    text: 'Pessoal amanhã terá prova da materia, qualquer aluno com notas abaixo de 6 pontos será reprovado!!! Estudem!!!',
	},
    ]

const Item = ({item}) => (
	<View style ={styles.Itens}>
	    <Text style ={styles.AparenciaMural}>
		{item.title}
	    </Text>
	    <Text style ={styles.AparenciaMural2}>
		{item.text}
	    </Text>
	</View>
    );

 
export default function Mural(){
	return(
		<View style={{flex:1, backgroundColor:'#A5CBD6'}}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>Mural</Text>
			</View>
			<SafeAreaView style = {styles.container}>
				<FlatList
				data={DATA}
				renderItem={Item}
				keyExtractor ={(item) => item.id}
				/>
			</SafeAreaView>
		</View>
	);
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor:'#A5CBD6',
       alignItems: 'center',
       
     },  
    
     Itens:{
         borderColor: "#DBA61C",
         borderBottomLeftRadius: 2,
         borderLeftWidth: 2, 
         borderTopWidth: 2,
         borderRadius: 2,
         marginTop: 30,
     },
     AparenciaMural:{
         padding: 10,
         fontSize: 18,
         fontFamily: "Roboto",
     },
     AparenciaMural2:{
         marginLeft: 20,
         marginTop: 10,
         fontSize: 15,
         fontFamily: "Roboto",
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
 })
 
