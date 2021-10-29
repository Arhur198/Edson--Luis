/*import React, {Component} from 'react' 
import {View,StyleSheet,TouchableWithoutFeedback,Animated,SafeAreaView,FlatList, Dimensions,Text} from 'react-native';
import {AntDesign,Entypo} from '@expo/vector-icons'


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
	<View style ={style.Itens}>
	    <Text style ={style.AparenciaMural}>
		{item.title}
	    </Text>
	    <Text style ={style.AparenciaMural2}>
		{item.text}
	    </Text>
	</View>
    );

 

export default class Forum extends Component {
	animetion = new Animated.Value(0)
	toggleMenu = () =>{

		const toValue = this.open ? 0 : 1

		Animated.spring(this.animetion,{
			toValue,
			friction: 4,
		}).start();

		this.open = !this.open
	}
	render(){
	const cameraStyele = {
		transform: [
			{scale:this.animetion},
			{
				translateY: this.animetion.interpolate({
					inputRange:[0,1],
					outputRange:[0,-60]	
				})
			}
		]
	}
	const heartStyele = {
		transform: [
			{scale:this.animetion},
			{
				translateY: this.animetion.interpolate({
					inputRange:[0,1],
					outputRange:[0,-120]	
				})
			}
		]
	}
	const rotation = {
		transform: [
			{
				rotate: this.animetion.interpolate({
					inputRange: [0,1],
					outputRange: ["0deg" , "45deg"]	
				})
			}
		]
	}
	return(
		<>
		<View style={[styles.container,this.props.style]}>
			<TouchableWithoutFeedback>
				<Animated.View style={[styles.button,styles.submenu,heartStyele]}>
					<AntDesign name="heart" size={20} color="#FFF"/>
				</Animated.View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback>
				<Animated.View style={[styles.button,styles.submenu,cameraStyele]}>
					<Entypo name="camera" size={20} color="#FFF"/>
				</Animated.View>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback onPress={this.toggleMenu}>
				<Animated.View style={[styles.button,styles.menu , rotation]}>
					<AntDesign name="plus" size={24} color="#FFF"/>
				</Animated.View>
			</TouchableWithoutFeedback>
		</View>
	
			</>
	);
}
}

const styles = StyleSheet.create({
	container:{
		alignItems:'center',
		position:'absolute'
		
	},
	button:{
		position: 'absolute',
		width:60,
		height:60,
		borderRadius:60/2,
		justifyContent:'center',
		alignItems:'center',
		shadowRadius:10,
		shadowColor:'#00213b',
		shadowOpacity:0.3,
		shadowOffset:{
			height:10,
		}
	},
	menu:{
		backgroundColor:'#00213b'	
	},
	submenu:{
		width:48,
		height:48,
		borderRadius:48/2,
		backgroundColor:'#00213b'	
	}
})

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

*/

import * as React from 'react';
import { 
	View, 
	useWindowDimensions,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView, 
	Platform, 


} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/MainStyles'
import ActionButton from 'react-native-action-button';
import { ListItem, Avatar } from 'react-native-elements';

const list = [
	{
	  name: 'Amy Farha',
	  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
	  subtitle: 'Novo material adicionado, confiram!'
	},
	{
	  name: 'Chris Jackson',
	  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
	  subtitle: 'Material revisado'
	},
	 // more items
      ]
      
export default function Forum(){
	return(
	<View style={{ flex: 1, backgroundColor: '#A5CBD6' }}>
		<ActionButton buttonColor="rgba(231,76,60,1)">
		<ActionButton.Item buttonColor='#9b59b6' title="Adicionar ao fórum" onPress={() => console.log("notes tapped!")}>
		<Icon name="plus" style={styles.actionButtonIcon} />
		</ActionButton.Item>
		<ActionButton.Item buttonColor='#3498db' title="Editar no fórum" onPress={() => {}}>
		<Icon name="edit" style={styles.actionButtonIcon} />
		</ActionButton.Item>
		<ActionButton.Item buttonColor='#1abc9c' title="Remover do fórum" onPress={() => {}}>
		<Icon name="trash" style={styles.actionButtonIcon} />
		</ActionButton.Item>
		</ActionButton>  

		<View>
		{
			list.map((l, i) => (
			<ListItem key={i} bottomDivider>
				<Avatar source={{uri: l.avatar_url}} />
				<ListItem.Content>
				<ListItem.Title>{l.name}</ListItem.Title>
				<ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
				</ListItem.Content>
			</ListItem>
			))
		}
		</View>
	</View>
);
}



