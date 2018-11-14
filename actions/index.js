export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks ( decks ){
  console.log(decks)
  return{
    type: RECEIVE_DECKS,
    decks
  }
}

export function addCard (deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card
  }
}
