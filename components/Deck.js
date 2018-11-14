import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, Dimensions, FlatList } from 'react-native'
import { purple, white, orange, gray } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions'
import Card from './Card'
import Swiper from 'react-native-swiper'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
      return {
        title: deckTitle
      }
    }

  makeCard = (card) => {
    const { saveCard, goBack, deckTitle } = this.props

    saveCard(card)
    goBack()
    //saveCard(deckTitle, card)

  }



  render(){
    const { deck } = this.props
    const cardCount = deck.questions.length
    console.log("Deck from inside Deck", deck.questions)
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.body}>
            <Text style={{fontSize:32}}>
              {cardCount} Cards
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deckTitle: deck.title,
              deck: deck
            }
          )}>
              <View style={styles.deck}>
                <Text style={styles.noDataText}>
                  Add Card
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deckTitle: deck.title,
              deck: deck
            }
          )}>
              <View style={styles.deck}>
                <Text style={styles.noDataText}>
                  Take Quiz
                </Text>
              </View>
            </TouchableOpacity>



          </View>
        </View>
      </View>
    )

  }


}

const { width, height} = Dimensions.get('window')
const deckWidth = width - 20
const styles = StyleSheet.create({
  header: {
    flex:1
  },
  body: {
    flex:1,
    justifyContent: 'center'
  },
  footer: {
    flex:1
  },
  card: {
    flex: 1,
    backgroundColor: white,
    // justifyContent: 'center',
    alignItems: 'center',
  },
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
  deck: {
    width: 200,
    backgroundColor: orange,
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
    color: white,
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'
  }
})

function mapStateToProps (state, {navigation}) {
  const { deck } = navigation.state.params

  return {
    deck
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
)(Deck)
