
import React , {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet,View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import consulta from '../dataBase/db';
import styles from '../styles/MainStyles';


export default function Aluno({navigation}){
	const [email , setEmail] = useState(null)
	const [senha , setSenha] = useState(null)
	const [senhaConfirmada , setSenhaConfirmada] = useState(null)
	const [nome , setNome] = useState(null)
	const [disciplina , setDisciplina] = useState(null)
	const [isSelect , setIsSelect] = useState(false)
	const [errorEmail , setErrorEmail] = useState(null)
	const [errorSenha , setErrorSenha] = useState(null)
	const [errorSenhaConfirmada,setErrorSenhaConfirmada] = useState(null)
	const [errorNome , setErrorNome] = useState(null)
	const [errorDisciplina , setErrorDisciplina] = useState(null)
	const validar = () => {
		let error = false
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		if(!re.test(String(email).toLowerCase())){
		    setErrorEmail("Preencha seu email corretamente")
		    error = true
		}
		if(nome === null){
			setErrorNome("Preencha seu nome")
			error = true
		}
		if(senha === null){
			setErrorSenha("Preencha sua senha")
			error = true
		}if(senha.length<3){
			setErrorSenha("A senha deve conter mais de 3 caracteres")
			error = true
		}
	
		/*if(disciplina == null){
			setErrorDisciplina("Preencha o campo de disciplina")
			error = true
		
		}
		*/
		if(senha !== senhaConfirmada){

			setErrorSenhaConfirmada("Você informou duas senhas diferentes, as senhas devem possuir o mesmo valor")
			error = true
		}
	
		return !error	
	}

	async function salvar(){
		if(validar()){
			console.log(nome)
			console.log(email)
			console.log(senha)
			let corpo = {
				"nome": nome,
				"email":email,
				"senha":senha,
				"codtipo":2
			}
			let ret = await consulta('/cadastrausuario.php' , corpo)
			console.log(ret)
			const resp =  "erro_ao_inserir"
			if(ret["resultado"] !== resp){
				console.log('Tudo certo')
				navigation.navigate('Login')
			}
		}
		}
		

	/*const salvar = () => {
		if(validar()){
			console.log(email)
			console.log(senha)
			console.log(senhaConfirmada)
		}
	}
	*/
	
	return(
		<KeyboardAvoidingView 
		behavior={Platform.OS == "ios" ? "padding" : "height"}
		style={[styles.container , specificStyle.container2]}>
		  <ScrollView style={{marginTop:10 , width:"90%"}}>
		    <Text h3 style={{textAlign:"center", padding:10}}>Cadastrar Educando</Text>
		    <Input 
			    placeholder="Nome"
			    label="Nome"
			    keyboardType="email-address"
			    leftIcon={{type:'font-awesome' , name:'user'}}
			    onChangeText = {text => {
				    setNome(text)
				    setErrorNome(null)
			    }}
			    errorMessage={errorNome}
		    />
		    <Input 
			    placeholder="E-mail"
			    label="E-mail"
			    keyboardType="email-address"
			    leftIcon={{type:'font-awesome' , name:'envelope'}}
			    onChangeText = {text => {
				    setEmail(text)
				    setErrorEmail(null)
			    }}
			    errorMessage={errorEmail}
		    />
		    <Input 
			    placeholder="Senha"
			    label="Senha"
			    secureTextEntry= {true}
			    leftIcon={{type:'font-awesome' , name:'lock'}}
			    onChangeText = {text => {
				    setSenha(text)
				    setErrorSenha(null)
			    }}
			    errorMessage={errorSenha}
		    />
	    
		    <Input 
			    placeholder="Confirmar Senha"
			    label="Confirmar Senha"
			    secureTextEntry= {true}
			    leftIcon={{type:'font-awesome' , name:'lock'}}
			    onChangeText = {text => {
				    setSenhaConfirmada(text)
				    setErrorSenhaConfirmada(null)
			    }}
			    errorMessage={errorSenhaConfirmada}
		    />
		    <CheckBox
			    
			    title="Eu aceito os termos de uso"
			    checkedIcon="check"
			    uncheckedIcon="square-o"
			    checkedColor="green"
			    uncheckedColor="red"
			    checked={isSelect}
			    onPress={()=>setIsSelect(!isSelect)}
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
			    onPress={()=>salvar()}
			    title="Salvar"
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
