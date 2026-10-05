import { useState,useEffect} from 'react';                                                                      
import fish from '../data/fish.js';                                                                    
                                                                                                         
  function useGameState() {
    const [screen, setScreen] = useState('start');
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);                                                               
    const [playerHP, setPlayerHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(100);                                                         
    const [currentFish, setCurrentFish] = useState(null);                                                
    const [choices, setChoices] = useState([]);
    const [missedFish, setMissedFish] = useState([]);                                                    
    const [feedbackState, setFeedbackState] = useState(null);                                            
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [playerWon, setPlayerWon] = useState(false);
    
    function loadQuestion() {
		const randomIndex = Math.floor(Math.random() * fish.length);
      	const selected = fish[randomIndex];
      	setCurrentFish(selected);                                                                          
     	setCorrectAnswer(selected.hawaiian_name);
                                                                                                         
      	const otherNames = fish                                                                                
      		.filter(f => f.id !== selected.id)
      		.map(f => f.hawaiian_name)                                                                         
      		.sort(() => Math.random() - 0.5)
      		.slice(0, 3);                                                                                      
   
  		const shuffled = [selected.hawaiian_name, ...otherNames]                                               
      		.sort(() => Math.random() - 0.5);

  		setChoices(shuffled);                                                                                    
                  
      	setFeedbackState(null);
    }                                                                                                    
   
    function startGame() {                                                                               
      setScreen('game');
      setScore(0);
      setRound(1);
      setPlayerHP(100);
      setEnemyHP(100);
      setMissedFish([]);                                                                                 
      loadQuestion();
    }
    
    function selectAnswer(jawaiiName) {
    	if (jawaiiName === correctAnswer) {
    		const newEnemyHP = enemyHP - 20
    		setEnemyHP(newEnemyHP)
    		setScore(prev => prev + 100)
    		setFeedbackState('correct')
    		if (newEnemyHP <= 0) {
    			setPlayerWon(true)
    			setScreen('playerWon')
    		} else {
    			setRound(prev => prev + 1)
    			loadQuestion()
    		}
    	} else if (jawaiiName !== correctAnswer) {
    		const newPlayerHP = playerHP -20
    		setPlayerHP(newPlayerHP)
    		setMissedFish(prev => [...prev, currentFish])
    		setFeedbackState('wrong')
    		if (newPlayerHP <= 0) {
    			setPlayerWon(false);
    			setScreen('playerLost')
    		} else {
    			setRound(prev => prev + 1)
    			loadQuestion()
    		}
    	}
    	
    	
    }
                                                                                                         
    return {      
      screen,                                                                                            
      score,      
      round,
      playerHP,
      enemyHP,
      currentFish,
      choices,
      missedFish,
      feedbackState,                                                                                     
      correctAnswer,
      startGame,
      selectAnswer,
      playerWon
    };                                                                                                   
  }               

  export default useGameState;