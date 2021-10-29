import React , { Component } from 'react'
import {
	StyleSheet,
	FlatList,
	View
} from 'react-native'

import Header from '../components/Forum Components/Header'
import Post from '../components/Forum Components/Post'

class Feed extends Component{
	state = {
		posts: [{
			id: Math.random(),
			nickName:'Rafael',
			email:'refael@rafael.com',
			text:'Em 1905, o genial físico alemão Albert Einstein afirmou que tempo e espaço são relativos e estão profundamente entrelaçados. Parece complicado?' ,
			comments: [{
				nickName:'Bernardo',
				comment:'Boa observação'
			}]	
		}]
	}

	render(){
		return(
			<View style={styles.container}>
				<Header />
				<FlatList
					data={this.state.posts}
					keyExtractor={item => `${item.id}`}
					renderItem={({ item }) => 
						<Post key={item.id} {...item} />} />
			
			</View>
		)
	}

	

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor:'#F5FCFF',
		
	}
})


export default Feed;