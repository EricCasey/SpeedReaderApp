import React, {Component} from 'react';
import Word from './Word.jsx';
import './SR.css';

class SpeedReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wall: 'But I was not content with this discovery; but having now took more courage, and consequently more curiosity, I took my man Friday with me, giving him the sword in his hand, with the bows and arrows at his back, which I found he could use very dexterously, making him carry one gun for me, and I two for myself; and away we marched to the place where these creatures had been – for I had a mind now to get some fuller intelligence of them. When I came to the place, my very blood ran chill in my veins, and my heart sank within me at the very horror of the spectacle; indeed, it was a dreadful sight; at least it was so to me, though Friday made nothing of it. The place was covered with human bones, the ground dyed with the blood, and great pieces of flesh left here and there, half-eaten, mangled, and scorched; and, in short, all the tokens of the triumphant feast they had been making there, after a victory over their enemies. I saw three skulls, five hands, and the bones of three or four legs and feet, and abundance of other parts of the bodies; and Friday, by his signs, made me understand that they brought over four prisoners to feast upon; that three of them were eaten up and that he, pointing to himself was the fourth; that there had been a great battle between them and their next king, of whose subjects, it seems, he had been one, and that they had taken a great number of prisoners; all which were carried to several places by those who had taken them in the fight, in order to feast upon them, as was done here by these wretches upon those they brought hither.',
            wallArr: 'But I was not content with this discovery; but having now took more courage, and consequently more curiosity, I took my man Friday with me, giving him the sword in his hand, with the bows and arrows at his back, which I found he could use very dexterously, making him carry one gun for me, and I two for myself; and away we marched to the place where these creatures had been – for I had a mind now to get some fuller intelligence of them. When I came to the place, my very blood ran chill in my veins, and my heart sank within me at the very horror of the spectacle; indeed, it was a dreadful sight; at least it was so to me, though Friday made nothing of it. The place was covered with human bones, the ground dyed with the blood, and great pieces of flesh left here and there, half-eaten, mangled, and scorched; and, in short, all the tokens of the triumphant feast they had been making there, after a victory over their enemies. I saw three skulls, five hands, and the bones of three or four legs and feet, and abundance of other parts of the bodies; and Friday, by his signs, made me understand that they brought over four prisoners to feast upon; that three of them were eaten up and that he, pointing to himself was the fourth; that there had been a great battle between them and their next king, of whose subjects, it seems, he had been one, and that they had taken a great number of prisoners; all which were carried to several places by those who had taken them in the fight, in order to feast upon them, as was done here by these wretches upon those they brought hither.'.split(' '),
            currentWord: 'input text to read',
            reading: false,
            wordNum: 0,
            speed: 250
        }
    }

    handleOnChange = (value, name) => {
        this.setState({
            ...this.state,
            wall: value,
            wallArr: value.split(' '),
            currentWord: value.split(' ')[0],
            reading: false
        })
    }

    toggleReading = () => {
        this.state.reading
            ? this.setState({reading: false})
            : this.setState({reading: true})
    }

    speedChange = (event) => {
        // console.log(event.target.value)
        this.setState({speed: event.target.value})
    }

    render() {
        return (
            <div className="reader">
                <div id="readArea">
                    <div className="word">
                        <Word word={this.state.currentWord} arr={this.state.wallArr} reading={this.state.reading} wordNum={this.state.wordNum} speed={Number(this.state.speed)}/>
                    </div>
                </div>
                <div id="input">
                    <textarea defaultValue={this.state.wall} onChange={(e) => {
                        this.handleOnChange(e.target.value, e.target.name)
                    }}></textarea>
                </div>
                <div id="controls">
                    <div id="start" onClick={this.toggleReading}>
                        {this.state.reading
                            ? 'Stop'
                            : 'Start'}
                    </div>
                    <div id="WPM">
                        <input id="speed" type="range" min="50" max="1000" step="10" defaultValue="250" onChange={this.speedChange}/>
                        <h5>{this.state.speed} ms interval</h5>
                        <h5>{(60000/this.state.speed).toFixed(2)} WPM</h5>
                        <div>
                            <h3>
                                -tmp notes-
                            </h3>
                            <li>[done] should I tie the speed to a slider</li>
                            <li>word alignment modes!!!!</li>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpeedReader;
