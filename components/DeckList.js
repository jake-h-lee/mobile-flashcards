import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, FlatList, List, ListItem } from 'react-native'
import { purple, white, orange, blue, gray } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { fetchDecksResults } from '../utils/api'
import { AppLoading } from 'expo'
import DeckListItem from './DeckListItem'
import { receiveDecks } from '../actions'
import { TabNavigator, StackNavigator } from 'react-navigation'


class DeckList extends Component {
  state = {
    ready: false,
  }
  componentDidMount (){
    const { dispatch } = this.props

    fetchDecksResults()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(()=> ({ready: true})))
  }

  render () {
    const { decks } = this.props
    const { ready } = this.state
    const deckArray = Object.values(decks)

    if (ready === false) {
    return <AppLoading />
    }

    return (
      <View style={styles.container}>
          <FlatList
            data={deckArray}
            keyExtractor={({item, key})=> key}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'Deck',
              { deckTitle: item.title,
                deck: item
              }
            )}>
                <View style={styles.deck}>
                  <Text style={styles.noDataText}>
                    {item.title}
                  </Text>
                  <Text style={styles.noDataText}>
                    {item.questions.length > 1 ?
                      item.questions.length + " cards" :
                      item.questions.length + " card"
                    }
                  </Text>
                </View>
              </TouchableOpacity>
            )

            }
          />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    alignItems: 'stretch',
  },
  box: {
    height: 50,
    backgroundColor: orange,
    margin: 10,
  },
  deck: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
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

function mapStateToProps (decks) {
  return{
    decks
  }
}

export default connect(
  mapStateToProps
)(DeckList)
