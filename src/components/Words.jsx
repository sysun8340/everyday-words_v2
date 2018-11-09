import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { getIdByDate, getWordsById, genRandomId } from '../utils'
import '../style/words.css'

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
        <p className='wordsRef'>{`（${words.reference}）`}</p>
        <div className='buttonContainer'>
          <Button 
            type='primary'
            onClick={() => this.randomWords(dispatch)}
          >
            随机一下
          </Button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  words: state.words
})
export default connect(mapState)(Words)