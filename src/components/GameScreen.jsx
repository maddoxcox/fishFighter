import './GameScreen.css';
                                                                                                         
  function GameScreen(props) {
    return (                                                                                             
      <div className="game-screen">
        <div className="hud">
          <span>Score: {props.score}</span>
          <span>Round {props.round}</span>                                                               
        </div>
                                                                                                         
        <div className="hp-section">
          <div className="hp-row">
            <span className="hp-label">You</span>                                                        
            <div className="hp-bar-bg">
              <div className="hp-bar-fill player-hp" style={{width: props.playerHP + '%'}}></div>        
            </div>                                                                                       
          </div>
          <div className="hp-row">                                                                       
            <span className="hp-label">Monster</span>                                                    
            <div className="hp-bar-bg">
              <div className="hp-bar-fill monster-hp" style={{width: props.enemyHP + '%'}}></div>        
            </div>                                                                                       
          </div>
        </div>                                                                                           
                  
        <div className="fish-photo">
          <img src={props.currentFish ? props.currentFish.photo : ''} alt="fish" />
        </div>                                                                                           
  
        <div className="choices">                                                                        
          {props.choices.map((choice, index) => (
            <button                                                                                      
              key={index}
              className="choice-btn"
              onClick={() => props.onSelectAnswer(choice)}
            >                                                                                            
              {choice}
            </button>                                                                                    
          ))}     
        </div>
      </div>
    );
  }

  export default GameScreen;