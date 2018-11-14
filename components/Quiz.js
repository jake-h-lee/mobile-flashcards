import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, Dimensions, FlatList, Animated } from 'react-native'
import { purple, white, orange, gray, blue, black } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions'
import Card from './Card'
import Swiper from 'react-native-swiper'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
      return {
        title: deckTitle + ' Quiz'
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
    console.log("Deck from inside Quiz", deck.questions)


    return (

      <Swiper
        loop={true}
        showsPagination={true}
        index={0}>
        {deck.questions.map((card,key)=>{
          return (

            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>
                  {key+1} / {cardCount}
                </Text>
              </View>
              <View style={styles.body}>
                <View style={styles.card}>
                  <Text style={styles.bodyText}>
                    {card.question}
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.checkAnswerContainer}>
                  <Text style={styles.footerText}>
                    Check Answer
                  </Text>
                </View>
                <View style={styles.endQuizContainer}>
                  <Text style={styles.footerText}>
                    End Quiz
                  </Text>
                </View>

              </View>
            </View>
          )
        })}
      </Swiper>


    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header:{
    flex: 1,
    backgroundColor: purple,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding:20,
  },
  body:{
    flex: 8,
    backgroundColor: orange,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
  },
  footer:{
    flex: 2,
    backgroundColor: blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerText:{
    color: white,
    fontSize: 18,
  },
  bodyText:{
    color: black,
    fontSize: 28,
  },
  footerText:{
    color: white,
    fontSize: 18,
  },
  card:{
    borderRadius: 8,
    backgroundColor: white,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkAnswerContainer:{
    flex:1,
  },
  endQuizContainer:{
    flex:1,
  },
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
)(Quiz)
