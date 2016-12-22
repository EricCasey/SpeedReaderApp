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
            speed: 250,
            readMode: 'centre',
            font: 'sans'
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

    handleModeChange = (value, name) => {
      // console.log(value)
      this.setState({readMode: value})
    }

    handleFontChange = (value, name) => {
      // console.log(value,name)
      this.setState({font: value})
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
              <h1><i>ReadQuik.io</i></h1>
                <div id="readArea">

                    <div className="word">
                        <Word
                          word={this.state.currentWord}
                          arr={this.state.wallArr}
                          reading={this.state.reading}
                          wordNum={this.state.wordNum}
                          speed={Number(this.state.speed)}
                          mode={this.state.readMode}
                          font={this.state.font}/>
                    </div>
                      <div id="reticle"></div>
                </div>
                <div id="input">
                    <textarea defaultValue={this.state.wall} onChange={(e) => {
                        this.handleOnChange(e.target.value, e.target.name)
                    }}></textarea>
                </div>

             <div
                  id="modes"
                  className="controller"
                  onChange={(e) => {
                    this.handleModeChange(e.target.value, e.target.name)
                    }}
                >
                  <div className="mode">
                    <input type="radio" name="readMode" value="centre" defaultChecked
                      title="Centre-aligned words"/>
                    Middle
                  </div>
                  <div className="mode">
                    <input type="radio" name="readMode" value="sprits"
                      title="something like for every (arr.length/2)-1 methinks. close enough" />
                    Sptsdfj
                  </div>
                  <div className="mode">
                    <input type="radio" name="readMode" value="mashed"
                      title="This one will be the thing where the middle letter are jumbled but the first and last are the same" />
                    Mashed
                  </div>
                </div>
                <div id="WPM" className="controller">
                    <h5 id="rawSpeed">{this.state.speed} ms/word</h5>
                    <input id="speed" type="range" min="100" max="1000" step="10" defaultValue="250" onChange={this.speedChange}/>
                    <h5 id="wordSpeed">{(60000/this.state.speed).toFixed(0)} WPM</h5>
                </div>
                <div id="details">
                  <p>{this.state.wallArr.length} words</p>
                  <p>{(this.state.wallArr.length/((60000/this.state.speed))).toFixed(2)} min to read</p>
                </div>
                <div
                  id="fontModes"
                  className="controller"
                  onChange={(e) => {
                    this.handleFontChange(e.target.value, e.target.name)
                    }}
                >
                  <div className="mode">
                    <input type="radio" name="readFont" value="sans" defaultChecked
                      title="Read in a Sans-Serif Font"/>
                    Sans
                  </div>
                  <div className="mode">
                    <input type="radio" name="readFont" value="serif"
                      title="Read in a Serif Font"/>
                    Serif
                  </div>
                  <div className="mode">
                    <input type="radio" name="readFont" value="mono"
                      title="Read in a monospace font" />
                    Mono
                  </div>
                </div>
                <div id="controls">
                    <div id="start" onClick={this.toggleReading}>
                        {this.state.reading
                            ? 'Stop'
                            : 'Start'}
                    </div>
                    <div id="notes"><i>
                            <h3>
                                -Next Steps-
                            </h3>
                            <li>Mashuped Mode</li>
                            <li>Spritz-like Mode</li>
                            <li>Acceleration</li>
                            <li>dim screen</li>
                            <li>responsivenessessing</li>
                            </i>
                        </div>
                </div>
            </div>
        );
    }
}

export default SpeedReader;
