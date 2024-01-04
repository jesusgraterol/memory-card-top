import { useState } from 'react';
import GameService from './services/game/game.service.js';
import Header from './components/header/header.component.jsx';
import GameBoard from './components/game-board/game-board.component.jsx';
import GameResult from './components/game-result/game-result.component.jsx';

/**
 * Game Instance
 */
const handSize = 16;
const game = new GameService(handSize);
game.startGame();



/**
 * App Component
 * Acts as the parent component of the game, managing all state and events for the children.
 */
function App() {
  // init the states
  const [ hand, setHand ] = useState(game.hand);
  const [ score, setScore ] = useState(0);
  //const [ highestScore, setHighestScore ] = useState(0);
  const [ gameEnded, setGameEnded ] = useState(false);
  




  // triggers when a card is clicked
  const handleOnCardClick = (cardID) => {
    game.handleCardClick(cardID);
    setScore(game.score);
    setGameEnded(game.gameEnded);

    // only set the new hand if the game didn't end
    if (!game.gameEnded) {
      setHand(game.hand);
    }
  }

  // triggers when the play again button is clicked within the game result view
  const handleOnPlayAgainClick = () => {
    game.startGame();
    setHand(game.hand);
    setScore(game.score);
    //setHighestScore(game.highestScore);
    setGameEnded(game.gameEnded);
  }





  // build the view
  return (
    <div id='appContainer'>
      {/* Header */}
      <Header score={score} handSize={handSize} />

      {/* GameBoard */}
      <GameBoard hand={hand} onCardClick={handleOnCardClick} />

      {/* Game Result Overlay */}
      {
        gameEnded && 
        <GameResult score={score} handSize={handSize} onPlayAgainClick={handleOnPlayAgainClick} />
      }
    </div>
  )
}





/**
 * Module Exports
 */
export default App;
