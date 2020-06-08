import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
	
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.header_text}>Play to get 50 points</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'stretch',
		paddingTop: 10,
		paddingBottom: 10,
        backgroundColor: '#D4E6F1',
        marginTop:0,
	},
	header_text: {
		fontWeight: 'bold',
		fontSize: 17,
		textAlign: 'center'
	}
});