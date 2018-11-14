import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, Dimensions } from 'react-native'
import { purple, white, orange, gray } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions'

class Card extends Component {

  render () {
    return(
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.noDataText}>
            This is a Card
          </Text>
        </View>
      </View>
    )
  }
}

const { width, height} = Dimensions.get('window')
const deckWidth = width - 20
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  box: {
    height: 50,
    backgroundColor: orange,
    margin: 10,
  },
  card: {
    width: deckWidth,
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    marginBottom: 30,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'
  }
})

function mapStateToProps (state, {navigation}) {
  const { card } = navigation.state.params

  return {
    card
  }
}

function mapDispatchToProps (dispatch, {navigation}) {
  const { deckTitle } = navigation.state.params

  return {
    saveCard: (card) => dispatch(addCard(deckTitle, card)),
    goBack: () => navigation.goBack(),

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
