import React from 'react';
import { StyleSheet, Text, PanResponder, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default class PieComponent extends React.Component {
  
  
  render() {
    const fill = 50;
    const data1 = this.props.text1;
    const data2 = this.props.text2;

    return (
      <View
        style={styles.container}
       >
       <ProgressCircle
            percent={50}
            radius={70}
            borderWidth={8}
            color="#999"
            shadowColor="#3399FF"
            bgColor="#fff"
            
        >
            <Text style={{ fontSize: 18 }}>{data1}</Text>
            <Text style={{ fontSize: 12 }}>{data2}</Text>
        </ProgressCircle>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    //paddingTop: 10
  },
  
});
