import React, {Component} from 'react'
import {View,StyleSheet} from 'react-native'
import Header from '../components/Forum Components/Header'
import Feed from './Feed'

export default class Disciplinas extends Component{
	render(){
		<View style={styles.container}>
			<Header text="Matemática"/>
			<Feed/>
		</View>	
	}
}