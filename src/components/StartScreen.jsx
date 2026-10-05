import './StartScreen.css';

function StartScreen(props) {
    return (
        <div className="start-screen">
            <h1 className="game-title">Fish Fighter</h1>
            <p className="subtitle">Learn Hawaiian Fish</p>
            <button onClick={props.onStart} className="start-button">Start Game</button>
        </div>
    );
}

export default StartScreen;