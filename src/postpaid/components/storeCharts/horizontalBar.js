import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
  Animated
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class HorizBar extends React.Component {

  state = {
    progress: this.props.progress,
   
  }

  
 
  render() {
    const barWidth = 200;
    
 
    return (
      <View style={styles.container}>
        <View>
          {/* <Text style={styles.label}>Voice</Text> */}
          <ProgressBarAnimated
            width={barWidth}
            height={22}
            value={this.state.progress}

            backgroundColor="#008080"
            style={styles.bar}
          />
           {/* <Text style={styles.label}>  
                    (450 min/ 570 min) 
            </Text>  
           */}
        </View>
        {/* <View style={styles.separator} /> */}
        
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    //marginTop: 50,
    //padding: 15,
  },
  bar:{
    color:'black',
     zIndex: 1,  
  },

  separator: {
    marginVertical: 2,
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  
});
