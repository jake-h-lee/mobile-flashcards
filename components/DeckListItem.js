import React, {Component} from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { purple, white, orange, grey } from '../utils/colors'

class DeckListItem extends Component {

  onPress = () => {
    this.props.onPressItem(this.props.id)
  }

  render(){
     const { title, questions } = this.props
     const cardCount = questions.length
     return (
       <TouchableOpacity onPress={this.onPress}>
         <View>
           <Text>
             {title}
           </Text>
           <Text>
             {cardCount} Cards
           </Text>
         </View>
       </TouchableOpacity>
     )
  }

}
