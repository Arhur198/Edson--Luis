import React , {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	Platform,
	Image
} from 'react-native'

class Header extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<Text style={styles.text}>{this.props.text}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: Platform.OS === 'ios' ? 20 : 25,
		padding: 12,
		borderBottomWidth: 1,
		borderColor:'#BBB',
		width:"100%"
		
		
		
	},

	rowContainer: {
		flexDirection:'row',
		alignItems:'center',
		
		
	},
	text:{
		color:'#000',
		fontSize:28,
		height:30,
		
		
		
	}

})

export default Header;