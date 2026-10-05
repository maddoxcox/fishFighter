 import './GameOverScreen.css';                                                                         
                                                                                                         
  function GameOverScreen(props) {
    return (                                                                                             
      <div className="gameover-screen">
        <h1 className="gameover-title">Game Over</h1>
        <p className="final-score">Score: {props.score}</p>                                              
   
        <div className="missed-section">                                                                 
          <h2 className="missed-title">Fish You Missed</h2>
          <div className="missed-list">                                                                  
            {props.missedFish.map((fish, index) => (
              <div key={index} className="missed-card">                                                  
                <p className="missed-hawaiian">{fish.hawaiian_name}</p>                                  
                <p className="missed-english">{fish.english_name}</p>
              </div>                                                                                     
            ))}   
          </div>                                                                                         
        </div>    

        <button className="play-again-btn" onClick={props.onPlayAgain}>Play Again</button>               
      </div>
    );                                                                                                   
  }               

  export default GameOverScreen;
