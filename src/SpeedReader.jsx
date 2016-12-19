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
            speed: 0
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

    speedChange = (event) => {
      this.setState({ speed: event.target.value })
      this.forceUpdate()
      return event.target.value
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
                      <select onChange={this.speedChange}>
                        <option value='60'>60</option>
                        <option value='200'>200</option>
                        // wtf... does this make sense?
                        <option value='500'>500</option>
                        <option value='5000'>5000</option>
                      </select>
                      <div>
                        <h3> - tmp notes- </h3>
                        <li>should I tie the speed to a slider</li>
                        <li>word alignment</li>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpeedReader;
