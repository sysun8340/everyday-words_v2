import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/words.css'
import { getIdByDate, getWordsById, genRandomId } from '../utils'

class Words extends Component {

  fetchWordsById = id => dispatch => {
    const words = getWordsById(id)
    dispatch({
      type: 'WORDS_CHANGE',
      words: words
    })
  }

  randomWords = (dispatch) => {
    const id = genRandomId()
    dispatch(this.fetchWordsById(id))
  }

  componentWillMount () {
    const { dispatch } = this.props
    const id = getIdByDate(new Date())
    dispatch(this.fetchWordsById(id))
  }

  render() {
    const { words, dispatch } = this.props
    
    return (
      <div className='wordsContainer'>
        <p className='wordsText'>{words.text}</p>
        <button 
          className='randomButton'
          onClick={() => this.randomWords(dispatch)}
        >
          随机一下
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  words: state.words
})
export default connect(mapState)(Words)