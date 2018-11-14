import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { purple, white } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class AddDeck extends Component {
  state = {

  }
  render () {

    return (
      <View>
        <Text>ADD DECK VIEW</Text>
      </View>

    )

  }


}

export default connect()(AddDeck)
