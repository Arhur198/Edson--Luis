import  React from 'react';
import { View, StyleSheet, KeyboardAvoidingView}from 'react-native';
import { Text,Dimensions,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function Sobre(){
	return(
		<View style={{flex:1, backgroundColor:'#A5CBD6', width:'100%'}}>
			<View style={style.header}>
			<Text style={style.text}>Conheça um pouco mais sobre nós</Text>
		</View>
		<KeyboardAvoidingView 
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				style={[styles.container , specificStyle.container2]}
		>
			 <ScrollView style={{marginTop:10 , width:"90%"}}>
				<View style={{padding:15, alignItems:'center'}}>
					<Image
						style={style.img1}
						source={require('../../assets/image78.png')}
					/>
					<Text style={style.text2}>
					A experiência do Cursinho Popular Edson Luís (CPEL) teve início no ano de 2014,
					organizada por militantes do Levante Popular da Juventude e professores
					colaboradores de diversas áreas.
					Por meio da metodologia da educação popular proposta por Paulo Freire, o principal
					objetivo do CPEL é construir conhecimento junto aos estudantes em situação de
					vulnerabilidade social para que eles também possam acessar as universidades e
					protagonizar o processo de democratização do ensino superior.
					</Text>
					<Image
						style={style.img}
						source={require('../../assets/image2.png')}
					/>
					<Text style={style.text3}>
					Atualmente, o CPEL é vinculado à rede Podemos+, presente em todos os estados
					do Brasil. Além disso, o cursinho tornou-se um programa de extensão da
					Universidade Federal de São João del-Rei (UFSJ), sendo um dos programas que
					recebeu o prêmio destaque durante três anos consecutivos.
					</Text>
					<View style={styles.imgContainer}>
						<Image
							style={style.img}
							source={require('../../assets/image1.png')}
						/>
						<Image
							style={style.img}
							source={require('../../assets/image44.png')}
						/>
					</View>
				</View>
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
	text:{
		color:'#FF6800',
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		fontSize: 25,
		justifyContent:'center',
		textAlign:'center'
	  
	      },
	header:{
	    backgroundColor:'#2293B0',
	    width:windowWidth,
	    height:windowHeight*0.15,
	    justifyContent:'center',
	    alignItems:'center',
	    marginTop:0,
	    
	},

	text2:{
		fontSize:15,
		color:'black',
		textAlign:'justify',
		

	},
	text3:{
		fontSize:15,
		color:'black',
		textAlign:'justify',
		marginTop:10

		

	},
	img:{
		marginTop:10,
		marginLeft:10
		
		
	},
	img1:{
		margin:10,
		height:windowHeight*0.30,
		width:windowWidth*0.80
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

const styles = StyleSheet.create({
		container: {
		  flex: 1,
		  backgroundColor:'#A5CBD6',
		  alignItems: 'center',
		  width:windowWidth
		},
		imgContainer:{
			flexDirection:'row',
			padding:10,
			alignItems:'center'
		

		}
})
