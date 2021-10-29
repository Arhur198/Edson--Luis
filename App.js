import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Aluno from './src/screens/CadastroAluno';
import Professor from './src/screens/CadastroProfessor';
import HomeAluno from './src/screens/HomePageAluno';
import HomeProfessor from './src/screens/HomeProfessor'
import Feed from './src/screens/Feed';


export default function App() {

  const Stack = createStackNavigator();

  function MyStack(){
    return(
  
       <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerTitleAlign: 'center'}} />
            <Stack.Screen name="Aluno" component={Aluno} options={{headerTitleAlign: 'center' , title:"Cadastro do Educando"}}/>
            <Stack.Screen name="Professor" component={Professor} options={{headerTitleAlign: 'center', title:"Cadastro do Educador"}}/>
            <Stack.Screen name="Home" component={HomeAluno} options={{headerTitleAlign: 'center' , title:"Página do Educando"}}/>
            <Stack.Screen name="Home-Professor" component={HomeProfessor} options={{headerTitleAlign: 'center', title:"Página do Educador"}}/>
            <Stack.Screen name="Feed" component={Feed} options={{headerTitleAlign: 'center'}}/>
          </Stack.Navigator>
        </NavigationContainer>


    )
  }

  return (
    <MyStack/>
  );
}
