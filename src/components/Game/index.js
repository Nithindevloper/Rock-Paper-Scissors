import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import GameOptions from '../GameOptions'

import GameResultView from '../GameResultView'
import {
  MainContainer,
  ScoreContainer,
  PlayAgainButton,
  ItemContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  CloseLineButton,
  RulesImage,
  ItemsImagesContainer,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMessage} = this.state
    return (
      <GameResultView
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)

    if (choicesList[number].id === id) {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    } else if (
      (choicesList[number].id === 'ROCK' && id === 'SCISSORS') ||
      (choicesList[number].id === 'PAPER' && id === 'ROCK') ||
      (choicesList[number].id === 'SCISSORS' && id === 'PAPER')
    ) {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <GameOptions
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {showResult, score} = this.state

    return (
      <MainContainer>
        <ScoreContainer>
          <ItemContainer>
            <Heading>
              ROCK <br /> PAPER <br /> SCISSORS
            </Heading>
          </ItemContainer>

          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopUpContainer>
          <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseLineButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
