import './App.css';

import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import hello from "./assets/hello.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiArrowBack, BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

import { Lrc, useRecoverAutoScrollImmediately } from 'react-lrc';

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // for handling the play and pause
  const [play, { pause, duration, sound }] = useSound(hello); // for handling the sound

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain
  };

  const Demo = () => {
    const {
      signal,
      recoverAutoScrollImmediately
    } = useRecoverAutoScrollImmediately();
    return (
      <>
      <Lrc
          className='lrc'
          lrc={'[00:06.41]Hello, it\'s me\n' +
            '[00:11.66]I was wondering if after all these years you\'d like to meet\n' +
            '[00:17.91]To go over everything\n' +
            '[00:23.67]They say that time\'s supposed to heal ya\n' +
            '[00:27.42]But I ain\'t done much healing\n' +
            '[00:30.67]Hello, can you hear me\n' +
            '[00:36.16]I\'m in California dreaming about who we used to be\n' +
            '[00:42.16]When we were younger and free\n' +
            '[00:48.66]I\'ve forgotten how it felt before the world fell at our feet\n' +
            '[00:54.17]There\'s such a difference between us\n' +
            '[01:00.67]And a million miles\n' +
            '[01:07.42]Hello from the other side\n' +
            '[01:12.66]I must have called a thousand times\n' +
            '[01:18.67]To tell you I\'m sorry for everything that I\'ve done\n' +
            '[01:23.91]But when I call you never seem to be home\n' +
            '[01:31.67]Hello from the outside\n' +
            '[01:37.16]At least I can say that I\'ve tried\n' +
            '[01:42.66]To tell you I\'m sorry for breaking your heart\n' +
            '[01:48.66]But it don\'t matter it clearly doesn\'t tear you apart anymore\n' +
            '[02:01.67]Hello, how are you?\n' +
            '[02:07.16]It\'s so typical of me to talk about myself I\'m sorry\n' +
            '[02:13.91]I hope that you\'re well\n' +
            '[02:19.66]Did you ever make it out of that town where nothing ever happened\n' +
            '[02:25.42]It\'s no secret that the both of us\n' +
            '[02:31.91]Are running out of time\n' +
            '[02:38.17]So hello from the other side\n' +
            '[02:44.16]I must have called a thousand times\n' +
            '[02:49.66]To tell you I\'m sorry for everything that I\'ve done\n' +
            '[02:55.41]But when I call you never seem to be home\n' +
            '[03:02.41]Hello from the outside\n' +
            '[03:08.42]At least I can say that I\'ve tried\n' +
            '[03:14.16]To tell you I\'m sorry for breaking your heart\n' +
            '[03:19.66]But it don\'t matter it clearly doesn\'t tear you apart anymore\n' +
            '[03:29.42]Ooooohh, anymore\n' +
            '[03:35.42]Ooooohh, anymore\n' +
            '[03:41.92]Ooooohh, anymore\n' +
            '[03:47.67]Anymore\n' +
            '[03:51.16]Hello from the other side\n' +
            '[03:56.92]I must have called a thousand times\n' +
            '[04:02.67]To tell you I\'m sorry for everything that I\'ve done\n' +
            '[04:08.42]But when I call you never seem to be home\n' +
            '[04:15.42]Hello from the outside\n' +
            '[04:21.66]At least I can say that I\'ve tried\n' +
            '[04:26.91]To tell you I\'m sorry for breaking your heart\n' +
            '[04:32.67]But it don\'t matter it clearly doesn\'t tear you apart anymore\n'}
          lineRenderer={({ index, line, active }) => {
            const style = {
              color: 'white',
              fontSize: active ? '20px' : '16px',
              fontweight: active ? 'bold' : 'normal',
            };
            return <div key={index} style={style}>{line.content}</div>;
          } }
          currentMillisecond={seconds * 1000}
          recoverAutoScrollSingal={signal}
          recoverAutoScrollInterval={5000}
          style={{
            width: '100%',
            height: '400px',
          }}
          recoverAutoScrollImmediately={recoverAutoScrollImmediately}
           />
          </>
    );
  };

  return (
    <>
    <div style={{
      background : 'linear-gradient(180deg, red 0%, brown 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
    }}>
    <div className='nav_music_area'>
      <div className='nav_music_area_left'>
        {/* back button */}
        <button className='nav_music_area_left_button'><BiArrowBack style={{
          width: '30px',
          height: '30px',
        }}/></button>
      </div>
      <div className='nav_music_area_right'>
        {/* <button className='nav_music_area_right_button'>Login</button>
        <button className='nav_music_area_right_button'>Sign Up</button> */}
      </div>
    </div>
    <div className="component" style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
        <div className='music_playing_area'>
          <img
            className="musicCover"
            src="https://i1.sndcdn.com/artworks-000422809374-wjekm4-t500x500.jpg"
            width={400}
            height={400}
            style={{
              borderRadius: '5px',
            }}/>
          <div className="time"
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className='time_range'
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: '10px',
              }}
            >
              <p style={{
                marginRight: '150px',
              }}>
                {currTime.min}:{currTime.sec < 10 ? `0${currTime.sec}` : currTime.sec}
              </p>
              <p style={{
                marginLeft: '190px',
              }}>
                {time.min}:{time.sec}
              </p>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="timeline"
            onChange={(e) => {
              sound.seek([e.target.value]);
            } }
            style={{
              width: '400px',
            }} />
          <div>
            <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipPrevious />
              </IconContext.Provider>
            </button>
            {!isPlaying ? (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </button>
            ) : (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <AiFillPauseCircle />
                </IconContext.Provider>
              </button>
            )}
            <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipNext />
              </IconContext.Provider>
            </button>
          </div>
        </div>
        <div className='lyric_playing_area'>
          {/* <p>
            Hello, it's me <br />
            I was wondering if after all these years you'd like to meet <br />
            To go over everything <br />
            They say that time's supposed to heal ya <br />
            But I ain't done much healing <br />
            Hello, can you hear me? <br />
            I'm in California dreaming about who we used to be <br />
            When we were younger and free <br />
            I've forgotten how it felt before the world fell at our feet <br />
            There's such a difference between us <br />
            And a million miles <br />
            Hello from the other side <br />
            I must've called a thousand times <br />
            To tell you I'm sorry for everything that I've done <br />
            But when I call, you never seem to be home <br />
            Hello from the outside <br />
          </p> */}
          <Demo />
        </div>
      </div>
      </div>
      </>
  );
}

export default App;
