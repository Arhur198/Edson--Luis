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


} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/MainStyles'
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
      
export default function Forum(){
	return(
	<View style={{ flex: 1, backgroundColor: '#A5CBD6' }}>
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
}
