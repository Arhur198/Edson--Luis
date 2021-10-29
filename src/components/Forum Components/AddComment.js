import React , { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
	View,
	Text,
	StyleSheetm,
	TextInput,
	TouchableWithoutFeedback as TWF,
	Alert
} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

class AddComment extends Component{
	state = {
		comment:'',
		editMode: false
	}

	handleAddComment = () => {
		Alert.alert('Adicionado' , this.state.comment)
	}

	render(){
		let commentArea = null 
		if(this.state.editMode){
			commentArea = (
				<View style={styles.container}>
					<TextInput
						placeholder="Adicione um comentario"
						style={styles.input} autoFocus={true}
						value={this.state.comment}
						onChangeText={comment => this.setState({comment})}
						onSubmitEditing={this.handleAddComment}
					/>
					<TWF onPress={()=>this.setState({editMode:false})}>
						<Ionicons   name="close-outline" size={30} color="red"/>
					</TWF>
				</View>
			)
		}
		else {
			commentArea = (
				<TWF onPress={()=>this.setState({editMode:true})}>
					<View style={styles.container}>
						<Ionicons name="chatbubble-outline" size={30} color="green"/>
						<Text style={styles.caption}>Adicone um comentário</Text>
					</View>
					
				</TWF>
				
			)
		}
		
		return(
			<View style={{flex:1}} >
				{commentArea}
			</View>
		)
		
	}

	
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		marginTop:10,
		paddingLeft:15
	},
	input:{
		width:'90%',

	},
	caption:{
		margin:10,
		fontSize:12,
		
	}


})


export default AddComment;