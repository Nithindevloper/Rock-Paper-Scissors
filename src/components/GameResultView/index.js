import {
  ShowResultContainer,
  ResultImageContainer,
  ResultTextImgContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  const {id, imageUrl} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImageContainer>
        <ResultTextImgContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={imageUrl} alt="opponent choice" />
        </ResultTextImgContainer>
      </ResultImageContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
