import React , {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet,View, Alert } from 'react-native';
import {Button,Input,Text} from 'react-native-elements' 
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyles';
import consulta from '../dataBase/db';

export default function Login({navigation}){

	const [email,setEmail] = useState(null)
	const [senha,setSenha] = useState(null)



	async function entrar(){
		console.log(email)
		//console.warn(email)
		console.log(senha)
		//console.warn(senha)
		
		 const corpo = {
		     "email": email,
		     "senha": senha
		 }
		 const ret =  await consulta("/login.php" , corpo) 
		 console.log(ret)
		 console.log(ret["resultado"])
		 const erro =  "usuario ou senha invalido"
		 console.log(erro)
		 if(ret["resultado"] !== erro){
		     console.log('ok')
		     if(ret["codtipo"]==2){
			 navigation.navigate('Home')
		     }
		     else {
			 navigation.navigate('Home-Professor')
		     }
		     
     
		     
		 } 
     
		 else{
		     
		     Alert.alert(
		       "Erro",
		       "Usuário ou senha estão errados",
		       [],
		       {
			 cancelable: true,
			
		       }
		     );
		 }
		   
		 
       
	    }  

	const showAlert = () =>
	Alert.alert(
	  "Opções de Cadastro",
	  "Como deseja fazer seu cadastro?",
	  [
	    {
	      text: "Educador",
	     onPress: () => navigation.navigate('Professor'),
	    
	    },
	    {
		text: "Educando",
		onPress: () => navigation.navigate('Aluno'),
		
	    }
	  ],
	  {
	    cancelable: true,

	  }
	);

	return(
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			style={[styles.container , specificStyle.container2]}
		>
			<ScrollView style={{marginTop:80 , width:"90%"}}>
				<Text h3 style={{textAlign:"center", fontWeight:"bold",color:"#FF6800"}}>Login</Text>
				<Input
				        placeholder="E-mail"
					keyboardType="email-address"
					label="E-mail"
					leftIcon={{type:'font-awesome' , name:'envelope'}}
					onChangeText = {text => setEmail(text)}		
				/>
				<Input 
    				    placeholder="Senha"
				    label="Senha"
    				    secureTextEntry= {true}
    				    leftIcon={{type:'font-awesome' , name:'lock'}}
    				    onChangeText = {text => setSenha(text)}
      				/>
				<Button
					icon={
						<Icon
							name="check"
							size={15}
							color="white"
						/>
					}
					iconPosition="top"
					onPress={()=>entrar()}
					title="Entrar"
					buttonStyle={specificStyle.button}
				/>
				<Button
        				icon={
          					<Icon
            						name="user"
            						size={15}
            						color="white"
         					 />
       					 }
        
					iconPosition="top"
 				        title="Cadastrar"
					onPress={showAlert}
       					buttonStyle={specificStyle.button}
      />


			</ScrollView>

		</KeyboardAvoidingView>
	);
}

const specificStyle = StyleSheet.create({
	container2:{
			
	},	 
	button: {
		width:"100%",
		marginTop:10,
		borderRadius:8,
		borderStyle:'solid'
	    
	  }
	})