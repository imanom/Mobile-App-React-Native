import React from 'react'
import { BarChart, XAxis, Grid } from 'react-native-svg-charts' // 2.1.0
import { View } from 'react-native';

import "react-native-svg"; // Supported builtin module

export default class App extends React.PureComponent {

   render() {

        const fill = 'rgb(134, 65, 244)'
        const data = this.props.data
        const month = this.props.month
         
 
        return (
         <View style={ { height: 200 } }>
            <BarChart
                style={{ flex: 1 }}
                data={ data }
                svg={{ fill }}
                spacingInner={0.2}
                contentInset={{ top: 30, bottom: 30 }}
            >
               <XAxis
                    style={ { paddingVertical:10} }
                    data={ data }
                    formatLabel={ (value, index) => data[index] }
                    contentInset={{ left: 15, right: 20 }}
                                       

                
         
                /> 
                <XAxis
                    style={ { marginTop:160} }
                     data={ data }
                    formatLabel={ (value, index) => month[index] }
                    contentInset={{ left: 20, right: 20 }}
                  
                /> 
               
            </BarChart>
            </View>
                           

        )
    }
}
