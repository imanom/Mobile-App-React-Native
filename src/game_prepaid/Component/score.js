import React from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';

export default class Score extends React.Component {
	
	render() {
		return (
			<View style={styles.score_container}>
			<Text>
				<Text style={styles.score}>{this.props.score}</Text>
				
				</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	score_container: {
		flex: 1,
		alignItems: 'center',
        padding: 10,
        marginBottom:25,
       
	},
	score: {
		fontSize: 40,
        fontWeight: 'bold',
        color:'#7FB3D5',
	}
});