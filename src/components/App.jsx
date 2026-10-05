import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import PlayerLostScreen from './PlayerLostScreen';
import PlayerWonScreen from './PlayerWonScreen';
import useGameState from '../hooks/useGameState';

function App() {
    const gameState = useGameState();

    if (gameState.screen === 'start') {
      return <StartScreen onStart={gameState.startGame} />;
    }

    if (gameState.screen === 'game') {
      return <GameScreen
        score={gameState.score}
        round={gameState.round}
        playerHP={gameState.playerHP}
        enemyHP={gameState.enemyHP}
        currentFish={gameState.currentFish}
        choices={gameState.choices}
        feedbackState={gameState.feedbackState}
        correctAnswer={gameState.correctAnswer}
        onSelectAnswer={gameState.selectAnswer}
      />;
    }

    if (gameState.screen === 'playerLost') {
      return <PlayerLostScreen
        score={gameState.score}
        missedFish={gameState.missedFish}
        onPlayAgain={gameState.startGame}
      />;
    }

    if (gameState.screen === 'playerWon') {
      return <PlayerWonScreen score={gameState.score} onPlayAgain={gameState.startGame}
      />;
    }
}

export default App;
