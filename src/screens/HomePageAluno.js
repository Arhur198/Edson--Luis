/*import * as React from 'react';
import { View, useWindowDimensions,Image,StyleSheet,TextInput,KeyboardAvoidingView}from 'react-native';
import { Text,SafeAreaView,Dimensions,FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ListItem, Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
    

const FirstRoute = () => (
  
      <KeyboardAvoidingView 
        		behavior={Platform.OS == "ios" ? "padding" : "height"}
		        style={[styles.container , specificStyle.container2]}>
            <ScrollView style={{marginTop:10 , width:"90%"}}>
            <Button
	 	 icon={
			<Icon
				name="edit"
				size={30}
				color="white"
                
                
			/>
  		}
  		title="Matemática"
  		type="outline"
        buttonStyle={{padding:30}}
        titleStyle={{fontSize:45}}
		
	/> 
	<Button
		icon={
			<Icon
				name="edit"
				size={30}
				color="white"
			/>
		}
  		title="Física"
        type="outline"
         buttonStyle={{padding:30}}
           titleStyle={{fontSize:45}}
	/>
		<Button
		icon={
			<Icon
				name="edit"
				size={30}
				color="white"
			/>
		}
  		title="Português"
 		 type="outline"
           buttonStyle={{padding:30}}
             titleStyle={{fontSize:45}}
           
	/>
		<Button
		icon={
			<Icon
				name="edit"
				size={30}
				color="white"
			/>
		}
  		title="Química"
 		 type="outline"
           buttonStyle={{padding:30}}
             titleStyle={{fontSize:45}}
	/>
		<Button
		icon={
			<Icon
				name="edit"
				size={30}
				color="white"
			/>
		}
  		title="Geografia"
 		 type="outline"
           buttonStyle={{padding:30}}
             titleStyle={{fontSize:45}}
	/>
		<Button
		icon={
			<Icon
				name="edit"
				size={30}
				color="white"
			/>
		}
  		title="História"
 		 type="outline"
           buttonStyle={{padding:30}}
             titleStyle={{fontSize:45}}
	/>
            </ScrollView>
      </KeyboardAvoidingView>
	
  
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#A5CBD6' }}>
	   <View style={style.header}>
                <Text style={style.textHeader}>Participe do nosso fórum</Text>
            </View>
            <View style={style.header2}>
                <Image
                    style={style.img}
                    source={require('../assets/image24.png')}
                />
                <TextInput
                    placeholder="Pesquise uma palavra chave"
                    style={style.textInput}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <TextInput
                    placeholder="Adicione no mural"
                    style={style.textInput2}
                />
            </View>
            <View style={style.view}>
                <Text style={style.title}>Aluna Maria</Text>
                <View style={style.view2}>
                    <Text style={style.subtitle}>Vocês acreditam que o Brasil foi descoberto ou invadido?</Text>
                </View>
                <View style={style.comentario}>
                <TextInput
                    placeholder='Adicione um comentário'
                    style={style.input}
                />
                </View>
            </View>
  </View>
);

const ThirdRoute = () => (
	<View style={{flex:1, backgroundColor:'#A5CBD6'}}>
		<SafeAreaView style = {styles.container}>
			<FlatList
			data={DATA}
			renderItem={Item}
			keyExtractor ={(item) => item.id}
			/>
             	</SafeAreaView>
	</View>
);

const FourthRoute = () => (
	<View style={{flex:1, backgroundColor:'#A5CBD6'}}>
		<View style={style.header}>
                <Text style={style.text}>Conheça um pouco mais sobre nós</Text>
            </View>
            <View style={style.description}>
                <Text style={style.text2}>
                  A experiência do Cursinho Popular Edson Luís (CPEL) teve início no ano de 2014,
                  organizada por militantes do Levante Popular da Juventude e professores
                  colaboradores de diversas áreas.
                  Por meio da metodologia da educação popular proposta por Paulo Freire, o principal
                  objetivo do CPEL é construir conhecimento junto aos estudantes em situação de
                  vulnerabilidade social para que eles também possam acessar as universidades e
                  protagonizar o processo de democratização do ensino superior.
                  Atualmente, o CPEL é vinculado à rede Podemos+, presente em todos os estados
                  do Brasil. Além disso, o cursinho tornou-se um programa de extensão da
                  Universidade Federal de São João del-Rei (UFSJ), sendo um dos programas que
                  recebeu o prêmio destaque durante três anos consecutivos.
                s</Text>
            </View>
	</View>	
);

export default function Aluno() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Matérias' },
    { key: 'second', title: 'Fórum' },
    {key:'third', title:'Mural'},
    {key:'fourth',title:'Sobre'}
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
    fourth:FourthRoute
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}



const style = StyleSheet.create({
	conteiner:{
	    flex:1,
	    backgroundColor:'#A5CBD6'
	},
	text:{
		color:'black',
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		fontSize: 20,
		paddingTop: 30,
		textAlign: 'center',
		justifyContent:'center'
	  
	      },
	header:{
	    backgroundColor:'#2293B0',
	    width:"100%",
	    height:60,
	    justifyContent:'center',
	    alignItems:'center',
	    marginTop:0
	},
	textHeader:{
	    fontWeight:'bold',
	    fontSize:25,
	    fontFamily:'Roboto',
	    color:'#FF6800',
	    
	},
    
	header2:{
	    alignItems:'flex-end',
	    paddingTop:0,
	    paddingRight:20
	},
	textInput:{
	
	    marginBottom: 30,
	    padding: 15,
	    width: 290,
	    height: 48,
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
	img:{
	    right:10,
	    top:40
	},
	textInput2:{
	
	    marginBottom: 30,
	    padding: 15,
	    width: 250,
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
    
	view:{
	    left:30,
	    width: 300,
	    height: 160,
	    borderColor: "#DBA61C",
	    borderStartWidth : 2,
	    borderEndWidth : 2,
	    borderTopWidth : 2,
	    borderLeftWidth: 2,
	    borderRightWidth: 2,
	    borderBottomWidth : 2,
	    paddingLeft:30,
        marginTop:-12
	    
	},
    
	title:{
	   fontSize:18,
	   fontWeight:'400',
	   right:10
	},
    
	view2:{
	    width:277,
	    height:57,
	    padding:10
	},
    
	subtitle:{
	    fontFamily:'Roboto',
	    fontWeight:'400',
	    fontSize:16
	},
	comentario:{
	    paddingTop:20,
	    alignItems:'flex-start'
	},
	input:{
	    marginBottom: 30,
	    width: 240,
	    height: 41,
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
	    textAlign:'center'
	}
    })

 const {height, width} = Dimensions.get('window');
 const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor:'#A5CBD6',
       alignItems: 'center',
     },  
     Login:{
         fontSize: 30,
         fontWeight: "bold",
         color: "#32457F",
         fontFamily: "Roboto",
         textAlign: "center",
         marginTop: 20,
     },
     CamposLogin:{
         marginTop: 15,
     },
     TextoLogin:{
         fontFamily: "Roboto",
         fontSize: 12,
         color: "#302C2C",
     },
     CamposLogin2:{
         marginTop: 15
     },
 
     
 
     PerdeuSenha:{
         fontSize: 14,
         fontFamily: "Roboto",
         marginTop: 5,
         textAlign: "center",
         marginBottom: 34,
         color: "#000000",
     },
 
    
     input:{
         padding: 15,
         width: 270,
         height: 60,
         backgroundColor: "#C4C4C4",
         fontSize: 16,
         fontWeight: "bold",
         borderRadius: 8,
         borderColor: "black",
         borderStartWidth : 1,
         borderEndWidth : 1,
         borderTopWidth : 1,
         borderLeftWidth: 1,
         borderRightWidth: 1,
         borderBottomWidth : 1,
     },
     botaoLogin:{
         width: 140,
         height: 50,
         textAlign: "center",
         marginTop: 16,
         borderRadius: 10,
         backgroundColor: "#FFFE65",
         alignItems: "center",
         justifyContent: "center",
     },
     Cadastro:{
         fontSize: 35,
         fontWeight: "bold",
         color: "#32457F",
         fontFamily: "Roboto",
         textAlign: "center",
         marginTop: 20
     },
     botaoCadastro1:{
         height: 65,
         width: 248,
         marginTop: 44,
         backgroundColor: "#FFFE65",
         alignItems: "center",
         justifyContent: "center",
         borderRadius: 20,
     },
     botaoCadastro2:{
         height: 65,
         width: 248,
         marginTop: 60,
         backgroundColor: "#FFFE65",
         alignItems: "center",
         justifyContent: "center",
         borderRadius: 20,
     },
     TextoCadastro1:{
         fontFamily: "Roboto",
         fontSize: 22,
         marginTop: 58,
         color: "#32457F",
     },
     TextoCadastro2:{
        fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: "bold",
        color:'#FF6800',
         
         
     },
     ProfessorText:{
         fontFamily: "Roboto",
         fontSize: 12,
         fontWeight: "bold",
         color: "#302C2C",
     },
     inputProfessor: {
         marginTop: 20,
         padding: 15,
         width: 238,
         height: 45,
         backgroundColor: "#C4C4C4",
         fontSize: 16,
         fontWeight: "bold",
         borderRadius: 8,
         borderColor: "black",
         borderStartWidth : 1,
         borderEndWidth : 1,
         borderTopWidth : 1,
         borderLeftWidth: 1,
         borderRightWidth: 1,
         borderBottomWidth : 1,
     },
     botaoConfirmarProf:{
         height: 54,
         width: 121,
         marginTop: 44,
         backgroundColor: "#FFFE65",
         alignItems: "center",
         justifyContent: "center",
         borderRadius: 20,
     },
     TextoCadastroProf:{
         fontFamily: "Roboto",
         fontSize: 15,
         color: "#32457F",
         fontWeight: "bold",
         textAlign: "center",
        
     },
     ItensMural:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#2293B0",
        width:width,
        height: 100,
        marginTop: -15
       
     },
     ItensMural2:{
         alignItems: "center",
         justifyContent: "center",
         flexDirection: "row",
         backgroundColor: "#2293B0",
         width: 414,
         height: 120,
         marginTop: 25
         
         
     },
     ImagemComLegenda1:{
         width: 39,
         height: 38,
         marginLeft:58,
         right:40
         
     },
     ImagemComLegenda2:{
         width: 39,
         height: 39,
         marginLeft: 58,
         right:25
     },
     TextoLegenda1:{
         fontFamily: "Roboto",
         fontWeight: "bold",
         fontSize: 18,
         color: "#473F51"
     },
     TextoLegenda2:{
         fontFamily: "Roboto",
         fontWeight: "bold",
         fontSize: 18,
         color: "#473F51",
         marginLeft: 30,
     },
     inputMural:{
         marginTop: 38,
         marginBottom: 30,
         padding: 15,
         width: 304,
         height: 60,
         backgroundColor: "#e2e2e2",
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
     ItensMural3:{
         alignItems: "center",
         justifyContent: "center",
         flexDirection: "row",
         backgroundColor: "#C4C4C4",
         width: width,
         height: 60,
         marginTop: 46,
         marginBottom: 40,
     },
     textoSobre:{
         padding: 15,
         fontFamily :"Roboto",
         fontSize: 15,
         textAlign: "center",
         marginTop: 46,
         color: "#473F51",
         fontWeight :"bold",
     },
     imagemSobre:{
         width: width * 0.45,
         height: height * 0.12,
         borderRadius: 45,
         alignItems: "center",
         justifyContent: "center",
         marginTop: 46,
     },
     TextInput2:{
         alignContent: "stretch",
         marginTop: 100,
         padding: 15,
         width: 293,
         height: 40,
         backgroundColor: "#e2e2e2",
         fontSize: 16,
         fontWeight: "bold",
         borderRadius: 8,
         borderColor: "#DBA61C",
         borderStartWidth : 1,
         borderEndWidth : 1,
         borderTopWidth : 1,
         borderLeftWidth: 1,
         borderRightWidth: 1,
         borderBottomWidth : 1,
     },
     imagemForum: {
         padding: 10,  
         width: 36,
         height: 36,
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
     MateriasTitulo:{
         alignItems: "center",
         justifyContent: "center",
         flexDirection: "row",
         backgroundColor: "#C4C4C4",
         width: width,
         height: 60,
         marginTop: 30,
         marginBottom: 40,
     },
     materias:{
         backgroundColor: '#e2e2e2',
     },
     ImagemMaterias :{
         marginLeft: 8,
         width: 39,
         height:39,
         padding: 10,   
     },
     ItensMateria:{
         marginTop: 35,
         flexDirection: "row",
     },
     TextoMateria:{
         color: "#DBA61C",
         fontFamily: "Roboto",
         fontSize: 18,
         marginLeft: 30,
         fontWeight: "bold",
     },
     ImagemSobre:{
         width: 87,
         height: 87,
         alignSelf: "center",
         alignItems: "center",
     },
     TelaMateria: {
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center"
 
     },
     AnexoMateria: {
         width: 25,
         height: 25,
     },
     TextoOutPlace: {
         fontFamily: "Roboto",
         color: "#DBA61C",
         fontSize: 18,
         fontWeight: "bold",
     },
     MateriaQuimica: {
         flexDirection: "row",
         borderTopWidth: 2,
         marginTop: 15,
         padding: 10,
     },
     TextForum:{
         fontWeight: "bold",
         fontSize: 30,
         color: "#32457F",
         backgroundColor: "#C4C4C4",
     },
     inputForum:{
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
         alignSelf: "flex-end",
         marginRight: 10,
         padding: 10,
         width: 270,
         height: 50,
         backgroundColor: "#e2e2e2",
         fontSize: 12,
         fontWeight: "bold",
         borderColor: "#DBA61C",
         borderWidth: 1,
         borderRadius: 5,
     },
     inputForum2:{
         width: 270,
         height: 46,
         borderWidth: 1,
         borderRadius: 5,
         borderColor: "#DBA61C",
         backgroundColor: "#e2e2e2",
         padding: 12,
         alignSelf: "flex-start",
     },
     ItensForum:{
         borderColor: "#DBA61C",
         borderBottomLeftRadius: 2,
         borderLeftWidth: 2, 
         borderTopWidth: 2,
         borderRightWidth: 2,
         borderRadius: 2,
         borderBottomWidth: 2,
         marginTop: 30,
     },   
     
     MateriasTitulo2:{
         alignItems: "center",
         justifyContent: "center",
         flexDirection: "row",
         backgroundColor: "#C4C4C4",
         width: width,
         height: 115,
         marginTop: 30,
     }, 

     view:{
         width:"100%",
         height:"15%",
         backgroundColor: "#2293B0",
         top: 20,
         alignItems:'center',
         justifyContent:'center'
     },

     textView:{
         fontSize:25,
         marginTop:-20,
         fontFamily:'Roboto',
         fontWeight:'bold',
         color:'#FF6800',
     },
 
 })
 
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
*/

import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Materiais from '../components/aluno/Materiais' 
import Forum from '../components/aluno/Forum';
import Mural from '../components/aluno/Mural';
import Sobre from '../components/aluno/Sobre';

const Tab = createBottomTabNavigator();

export default function Aluno() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Materiais') {
              return (
                <Ionicons
                  name="home"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Forum') {
              return (
                <Ionicons
                  name="bulb"
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Mural') {
                return(
                    <Ionicons
                        name="school"
                        size={size}
                        color={color}
                    />
                );

            }
            else if (route.name === 'Sobre'){
                return(
                    <Ionicons
                        name="list-circle"
                        size={size}
                        color={color}
                    />
                );

            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Materiais" component={Materiais} />
        <Tab.Screen name="Forum" component={Forum}/>
        <Tab.Screen name="Mural" component={Mural}/>
        <Tab.Screen name="Sobre" component={Sobre}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
