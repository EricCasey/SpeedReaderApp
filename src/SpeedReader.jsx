import React, {Component} from 'react';
import Word from './Word.jsx';
import './SR.css';

class SpeedReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wall: '8-bit twee selfies, ethical chia XOXO biodiesel church-key synth enamel pin locavore selvage live-edge waistcoat iPhone. Brunch direct trade quinoa, letterpress poke tote bag craft beer. Lyft put a bird on it gluten-free, fam lumbersexual tilde church-key narwhal. Drinking vinegar activated charcoal etsy, tumblr mumblecore cliche cray sriracha brunch wolf. Sriracha pabst cliche hexagon post-ironic, affogato kale chips PBR&B brooklyn health goth keffiyeh. Authentic waistcoat snackwave, blue bottle unicorn flannel tofu asymmetrical brunch YOLO DIY. Try-hard hexagon gochujang gluten-free thundercats, kale chips single-origin coffee pickled.',
            wallArr: '8-bit twee selfies, ethical chia XOXO biodiesel church-key synth enamel pin locavore selvage live-edge waistcoat iPhone. Brunch direct trade quinoa, letterpress poke tote bag craft beer. Lyft put a bird on it gluten-free, fam lumbersexual tilde church-key narwhal. Drinking vinegar activated charcoal etsy, tumblr mumblecore cliche cray sriracha brunch wolf. Sriracha pabst cliche hexagon post-ironic, affogato kale chips PBR&B brooklyn health goth keffiyeh. Authentic waistcoat snackwave, blue bottle unicorn flannel tofu asymmetrical brunch YOLO DIY. Try-hard hexagon gochujang gluten-free thundercats, kale chips single-origin coffee pickled.'.split(' '),
            currentWord: 'input text to read',
            reading: false,
            wordNum: 0,
            speed: '200'
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
      this.state.reading ? this.setState({ reading: false }) : this.setState({ reading: true })
    }

    render() {
        return (
            <div className="reader">
                <div id="readArea">
                    <div className="word">
                      <Word
                        word={this.state.currentWord}
                        speed={this.state.speed}
                        arr={this.state.wallArr}
                        reading={this.state.reading}
                        wordNum={this.state.wordNum}/>
                    </div>
                </div>
                <div id="input">
                    <textarea defaultValue={this.state.wall} onChange={(e) => {
                        this.handleOnChange(e.target.value, e.target.name)
                    }}></textarea>
                </div>
                <div id="controls">
                    <div id="start" onClick={this.toggleReading}>
                      { this.state.reading ? 'Stop' : 'Start' }
                    </div>
                    <div id="WPM">
                      <select>
                        <option value='50'>50 words per min</option> // for testing obviously
                        <option value='100'>100 words per min</option>
                        <option value='200'>200 words per min</option>
                        <option value='1000'>1000 words per min</option>
                      </select>
                      <div>
                        <h3> - tmp notes- </h3>
                        <li>start logic to be fixed</li>
                        <li>make it not start automatically fak</li>
                        <li>should I tie the speed to a slider</li>
                        <li>pause & reset</li>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpeedReader;
