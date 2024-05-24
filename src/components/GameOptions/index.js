import {OptionImage, OptionListItem, GameOptionButton} from './styledComponents'

const GameOptions = props => {
  const {buttonDetails, onGetId} = props
  const {imageUrl, id} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }
  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
