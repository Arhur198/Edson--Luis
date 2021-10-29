/*import * as React from 'react';
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
import styles from '../styles/MainStyles'
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

const FirstRoute = () => (
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
                    source={require('../assets/image31.png')}
                />
                <Image
                    style={style.img2}
                    source={require('../assets/image32.png')}
                />

                <Image
                    style={style.img3}
                    source={require('../assets/image33.png')}
                />
                
                <Image
                    style={style.img4}
                    source={require('../assets/image34.png')}
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

const SecondRoute = () => (
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

const ThirdRoute = () => (
	<View style={{flex:1,backgroundColor:'#A5CBD6'}}>
	 <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Adicionar ao mural" onPress={() => console.log("notes tapped!")}>
            <Icon name="plus" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Editar no mural" onPress={() => {}}>
            <Icon name="edit" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Remover do mural" onPress={() => {}}>
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
const FourthRoute = () => (
	<View style={{flex:1,backgroundColor:'#A5CBD6'}}>
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
                </Text>
            </View>
	</View>	
);


export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Matérias' },
    { key: 'second', title: 'Fórum' },
    {key:'third',title:'Mural'},
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
    
	img5:{
	    width:39,
	    height:39,
	    marginTop:110,
	    marginLeft:0
	   
	},
    
	text2:{
	    fontWeight:'400',
	    fontSize:15,
	    fontFamily:'Roboto',
	    marginTop:10,
	    marginLeft: 45,
	    textAlign:'left'
	},
    
	header3:{
	    width:"100%",
	    height:38,
	    justifyContent:'center',
	    alignItems:'flex-start',
	    paddingTop:35,
	    alignItems:'center',
	    flexDirection:'row'
	},
	text3:{
	    fontWeight:'400',
	    fontSize:18,
	    fontFamily:'Roboto',
	    marginTop:150,
	    marginLeft:10
	
	},
	img6:{
	    width:39,
	    height:39,
	    flexDirection:'row',
	    marginTop:170,
	    marginLeft:-15
	},
	img:{
		left:260,
		top:10
	}
    
    
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

*/


import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Materiais from '../components/professor/Materiais' 
import Forum from '../components/professor/Forum';
import Mural from '../components/professor/Mural';
import Sobre from '../components/professor/Sobre';

const Tab = createBottomTabNavigator();

export default function Professor() {
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
