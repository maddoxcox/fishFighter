import './GameOverScreen.css';

  function PlayerWonScreen(props) {
    return (                                                                                             
      <div className="gameover-screen">
        <h1 className="gameover-title">You Won!</h1>
        <p className="final-score">Score: {props.score}</p>                                                  

        <button className="play-again-btn" onClick={props.onPlayAgain}>Play Again</button>               
      </div>
    );                                                                                                   
  }
export default PlayerWonScreen;