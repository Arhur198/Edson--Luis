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
	Dimensions, 
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/MainStyles'




export default function Materias(){
	return(
		<View style={{ flex: 1, backgroundColor: '#A5CBD6' }}>
			<View style={style.header}>
			<Text style={style.textHeader}>Química</Text>
			</View>
			<View style={style.header2}>
			<Text style={style.textHeader2}>Professor Antônio</Text>
			</View>
			<View style={{alignItems:'center'}}>
			<TextInput
				placeholder='Adicione um novo material'
				style={style.textInput}
				multiline = {true}
				numberOfLines ={4}
				placeholder = "Adicione no mural..."
			
			/>
			</View>
			<View>
			<Text style={style.text}>Anexar:</Text>
			<Image

				style={style.img1}
				source={require('../../assets/image31.png')}
			/>
			<Image
				style={style.img2}
				source={require('../../assets/image32.png')}
			/>
	
			<Image
				style={style.img3}
				source={require('../../assets/image33.png')}
			/>
			
			<Image
				style={style.img4}
				source={require('../../assets/image34.png')}
			/>
			</View>
			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				style={[styles.container , specificStyle.container2]}
			>
				<ScrollView style={{marginTop:40 , width:"50%"}}>
				<Button
				icon={
					<Icon
						name="book"
						size={15}
						color="white"						/>
				}
				iconPosition="top"
				//onPress={()=>entrar()}
				title="Bora Revisar?"
				buttonStyle={specificStyle.button}
			/>
			<Button
				icon={
					<Icon
						name="book"
						size={15}
						color="white"						/>
				}
				iconPosition="top"
				//onPress={()=>entrar()}
				title="Apostilas"
				buttonStyle={specificStyle.button}
			/>
			
				</ScrollView>
			</KeyboardAvoidingView>
				
	
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
	    backgroundColor:'#FF6B00',
	    width:"100%",
	    height:60,
	    justifyContent:'center',
	    alignItems:'center',
	    marginTop:0
	},
	
    
	textHeader:{
	    fontWeight:'bold',
	    fontSize:25,
	    color:'#2293B0',
	    fontFamily:'Roboto'
    
	},
	header2:{
	    width:"100%",
	    height:38,
	    justifyContent:'center',
	    alignItems:'flex-start',
	    paddingTop:50,
	    alignItems:'center',
	    flexDirection:'row'
	
	},
    
	textHeader2:{
	    fontFamily:'Roboto',
	    fontSize:18,
	    marginLeft:14
	},
    
	textInput:{
	    marginTop: 38,
	    marginBottom: 30,
	    padding: 15,
	    width: 304,
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
	text:{
	    fontSize:18,
	    fontWeight:'bold',
	    fontFamily:'Roboto',
	    marginLeft:58,
	    color:"#DBA61C",
    
	},
    
	img1:{
	    width:25,
	    height:25,
	    marginTop:-25,
	    marginLeft:140
	},
    
	img2:{
	    width:25,
	    height:25,
	    marginTop:-25,
	    marginLeft:185
	},
    
	img3:{
	    width:25,
	    height:25,
	    marginTop:-25,
	    marginLeft:235
	},
    
	img4:{
	    width:25,
	    height:25,
	    marginTop:-25,
	    marginLeft:285
	},
    
    })


const specificStyle = StyleSheet.create({
	container2:{
		alignContent:'center',
		alignItems:'center'
	},	 
	button: {
		
		marginTop:10,
		borderRadius:8,
		borderStyle:'solid',
		alignItems:'center',
		
	    
	  }
	})