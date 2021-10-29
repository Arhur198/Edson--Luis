import React , {Component} from 'react'
import {
	StyleSheet,
	View,
	Image,
	Dimensions,
	Text
} from 'react-native'

import Autor from './Autor'
import Comments from './Comentarios';
import Add from './AddComment'

class Post extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.text}</Text>
					<Autor email={this.props.email} nickname={this.props.nickName}/>
				<Comments comments={this.props.comments}/>
				<Add/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		width:'90%'

	},
	image:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width * 3/4,
		resizeMode:'contain'
	},
	 
	text:{
		marginTop: 10,
		textAlign:'justify',
		fontSize:12,
		paddingLeft:10
	}
})

export default Post;