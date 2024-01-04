import { useState } from 'react';
import GameService from './services/game/game.service.js';
import Header from './components/header/header.component.jsx';
import GameResult from './components/game-result/game-result.component.jsx';

/**
 * Game Instance
 */
const handSize = 16;
const game = new GameService(handSize);




/**
 * App Component
 * ...
 */
function App() {
  // init the states
  const [ hand, setHand ] = useState([]);
  const [ score, setScore ] = useState(0);
  //const [ highestScore, setHighestScore ] = useState(0);
  const [ gameEnded, setGameEnded ] = useState(false);
  

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
