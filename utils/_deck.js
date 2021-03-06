import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = "Jake:Mobile-Flashcards"

function setDummyData (){
  console.log("inside setDummyData")
  let dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  console.log("Dummydata", dummyData)
  debugger
  console.log("After debugger")
  return dummyData

}


export function getDecksResults (results){
  console.log("inside getDecksResults")
  console.log(results)
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}
