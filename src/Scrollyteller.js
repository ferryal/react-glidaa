/** @jsx jsx */
import { Component, createRef, useEffect, useState, useRef } from 'react';
import { css, jsx } from '@emotion/core';
import { Card } from "react-bootstrap";
import { Scrollama, Step } from 'react-scrollama';
// import Lottie from 'react-lottie';
import Tabletop from "tabletop";
// import Lottie from 'lottie-react-web';
// import "@lottiefiles/lottie-player";
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
// import { Lottie } from './components/Lottie';
import anime from './assets/animation/1.json'
import animeTwo from './assets/animation/2.json'
import animeThree from './assets/animation/3.json'
import animeFour from './assets/animation/4.json'
import animeFive from './assets/animation/3.json'

const narration = require("./assets/data/narration.json");


const narrativeStyle = css`
  img {
    max-width: 500px;
  }
  .main {
    padding: 3vh 2vw;
    display: flex;
    justify-content: space-between;
  }
  .graphic {
    flex-basis: 50%;
    position: sticky;
    top: 15vh;
    width: 100%;
    height: 75vh;
    align-self: flex-start;
  }
  .data {
    font-size: 5rem;
    text-align: center
  }
  .scroller {
    flex-basis: 30%;
  }
  .card-text {
    font-size: 18px !important;
    line-height: 1.3;
  }
  .step {
    margin-right: 50px;
    padding-top: 200px;
    padding-bottom: 200px;
    '&:last-child': {
      margin-bottom: 0;
    }
    font-size: 20px;
  }
  .card {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    margin-left:20px;
    margin-right:20px;
    text-align: center;
    padding: 10%;
  }
  .blurb {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 3%;
    text-align: center;
    font-size: 24px;
    min-height: 50%;
  }
  .desc {
    margin-left:20px;
    margin-right:20px;
  }
  .btn {
    color: #575757;
  }
  .card-text-s {
    padding: 10%;
    font-size: 24px !important;
  }
`
;

const introBlurb = (
  <div>
    <left>
    <br></br>
    <p>
    You can intro your story here, or delete this by deleting the "introBlurb" constant from being defined and from being rendered. This text export from goole sheet
    </p>
    <br></br>
    </left>
  </div>
);


function Scrollyteller() {
  // constructor(props) {
  //   super(props);
  //   this.myRef = createRef();
  //   this.state = {
  //     data: "1",
  //     progress: 0,
  //     src: "",
  //     items: []
  //   }
    
  // }
  const [data, setData] = useState('1');
  const [progress, setProgress] = useState(0);
  const [src, setSrc] = useState('');
  const [items, setItems] = useState([]);
  const myRef = useRef(null);
  const inputRef = useRef(null);


  useEffect(() => {
    Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1EDvVinkf7BhEnctM0BrWU3WtXW4LuQoXYAM67qDRHZ8/edit?usp=sharing",simpleSheet: true}).then((items) => {console.log(items); this.setState({ items: items})}).catch((err) => console.warn(err));
  }, [])


  useEffect(() => {
    if (data === '1') {
      console.log('MASUK 1')
      myRef.current.addEventListener('load', function (e) {
          // 4. configure the interactivity library
          create({
            mode: 'scroll',
            player: `#firstLottie`,
            actions: [
              {
                visibility: [0, 1],
                type: 'seek',
                frames: [0, 100],
              },
            ],
          });
        }, {once: true});
    } else if (data === '2') {
      console.log('MASUK 2')
      myRef.current.addEventListener('load', function (e) {
        // 4. configure the interactivity library
        create({
          mode: 'scroll',
          player: `#twoLottie`,
          actions: [
            {
              visibility: [0, 1],
              type: 'seek',
              frames: [0, 100],
            },
          ],
        });
      });
    }
  }, [data])

  const update = data => {
    var src = "./assets/images/" + data + ".png";
    // this.setState({src});
    setSrc(src)
  }


  const onStepEnter = ({ element, data }) => {
    setData(data)
    update(data);
    // this.setState( { data });
    console.log(typeof data)
    //this.update(data);
  }

  const onStepExit= ({ element }) => {
    element.style.backgroundColor = '#fff';
  }

  const onStepProgress = ({ element, progress }) => {
    // console.log(element)
    // console.log(progress)
    setProgress(progress)
    // this.setState({ progress });
  }

  

  const renderAnimation = () => {
    const animation = {
      1: 'https://assets10.lottiefiles.com/private_files/lf30_pKg5bm.json',
      2: 'https://assets9.lottiefiles.com/packages/lf20_ntnh0s55.json',
      3: 'https://assets9.lottiefiles.com/packages/lf20_9wjm14ni.json',
      4: 'https://assets9.lottiefiles.com/packages/lf20_Fh701N.json',
      5: 'https://assets9.lottiefiles.com/packages/lf20_ntnh0s55.json'
    }
    console.log(data)
    console.log(typeof data)
    if (data === '1') {
      return (
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="firstLottie"
          controls
          mode="normal"
          src={animation[2]}
          style={{ width: '320px' }}
        ></lottie-player>
      );
    } else if (data === '2') {
      console.log("MASUK 2 LOTTIE")
      return (
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="twoLottie"
          controls
          mode="normal"
          src={animation[1]}
          style={{ width: '320px' }}
        ></lottie-player>
      );
    } else if (data === '3') {
      return (
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="threeLottie"
          controls
          mode="normal"
          src={animation[2]}
          style={{ width: '320px' }}
        ></lottie-player>
      );
    } else if (data === '4') {
      return (
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="fourLottie"
          controls
          mode="normal"
          src={animation[2]}
          style={{ width: '320px' }}
        ></lottie-player>
      );
    } else if (data === '5') {
      return (
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="fivrLottie"
          controls
          mode="normal"
          src={animation[2]}
          style={{ width: '320px' }}
        ></lottie-player>
      );
    }
  }

    // const { data, items } = this.state;
    console.log(myRef)
    // const src = './assets/images/' + data + '.png';
    // const src = './assets/animation/' + data + '.json';
    // console.log(src)
    const animation = {
      1: 'https://assets9.lottiefiles.com/packages/lf20_ntnh0s55.json',
      2: 'https://assets9.lottiefiles.com/packages/lf20_Fh701N.json',
      3: 'https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json',
      4: 'https://assets9.lottiefiles.com/packages/lf20_Fh701N.json',
      5: 'https://assets10.lottiefiles.com/private_files/lf30_pKg5bm.json'
    }
    // console.log(animation[1]);

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: data === 1 ? anime : data === 2 ? animeTwo : data === 3 ? animeThree : data === 4 ? animeFour : animeFive,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div>
        <div css={narrativeStyle}>
          <div className="blurb">
            <Card>
              <div className="card-text-s">
                {introBlurb}
              </div>
            </Card>
          </div>
          <div className='main'>
            <div className='graphic'>
            
    {/*<Card.Img variant="top" src={require(`./assets/images/${this.state.data}.png`)}/> */}

                {/*<lottie-player
                    ref={this.myRef} // 2. set the reference for the player
                    id="firstLottie"
                    controls
                    mode="normal"
                    src={`./assets/animation/${this.state.data}.json`}
                    style={{ width: '320px' }}
                  ></lottie-player>*/}

              {/*<Lottie
                options={{
                  animationData: animeFour
                }}
              />*/}
              <lottie-player
                ref={myRef} // 2. set the reference for the player
                id="firstLottie"
                // controls
                mode="normal"
                src={animation[1]}
                style={{ width: '1000px' }}
              ></lottie-player>
              
            
            </div>
            <div className='scroller'>
              <Scrollama
                onStepEnter={onStepEnter}
                onStepExit={onStepExit}
                progress
                onStepProgress={onStepProgress}
                offset={0.33}
              >
                { items.length > 0 ? items.map(narr => (
                  <Step data={narr.key} key={narr.key}>
                    <div className="step" >
                      <p className = "desc" id={"desc" + narr.key}>
                        <Card>
                          <Card.Body>
                            <Card.Text>{narr.description}</Card.Text>
                          </Card.Body>
                        </Card>
                      </p>
                    </div>
                  </Step>
                )) : narration.map(narr => (
                  <Step data={narr.key} key={narr.key}>
                    <div className="step" >
                      <p className = "desc" id={"desc" + narr.key}>
                        <Card>
                          <Card.Body>
                            <Card.Text>{narr.description}</Card.Text>
                          </Card.Body>
                        </Card>
                      </p>
                    </div>
                  </Step>
                ))}
              </Scrollama>
            </div>
          </div>
        </div>
      </div>
      )
  }

export default Scrollyteller;
