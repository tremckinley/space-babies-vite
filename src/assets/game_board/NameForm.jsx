/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import RoundCounter from './RoundCounter';
import HintBox from './HintBox';
import * as formServices from '../../services/handleKey'

export default function NameForm(props) {
  const { kid, onAnswerUpdate } = props;
  const [answerBox, setAnswerBox] = useState([])
  const [roundNum, setRoundNum] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  

    const kidNameArray = String(kid.name).split("");
    let initialAnswerBox = []
    for (let index = 0; index < kidNameArray.length; index++) {
      initialAnswerBox.push('_')  
    }

    const updateAtIndex = (index, newElement) => {
      const newArray = [...answerBox];
      newArray[index] = newElement !== '' ? newElement : '_';
      setAnswerBox(newArray);
      onAnswerUpdate(newArray); 
    };

  const answerBlocks = () => {
    return ( kid.name != undefined ? (
      kidNameArray.map((letter, idx) => {
        return (
          <input
            key={idx}
            type="text"
            className="w-[3rem] h-[3rem] text-center uppercase rounded-md bg-[#d9d9d9] p-1 m-[2px] border border-black caret-transparent focus:border-4 focus:border-purple-600"
            maxLength={1}
            onKeyDown={formServices.handleKey}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {updateAtIndex(idx, e.target.value)}}           
          ></input>
        );
      })
    ) : (
      <div className="bg-gray-400/40 p-4 rounded-lg text-red-900 text-xl"><i className='fa-solid fa-trash'></i>
        No Baby Name Provided
      </div>
    )
)}

const handleNameFormSubmit = (event) => {
  event.preventDefault();
  const childAnswer = answerBox.join("")
  console.log("Submitted Answer: " + childAnswer );
  if (childAnswer == kid.name) {
    alert("you win!")
    setGameOver(true);
  } else {
    switch (roundNum) {
      case 1:
      case 2:
      case 3:
        break;

      default:
        alert('Nice Try the answer today was ' + kid.name)
        console.log("you lose.");
        setGameOver(true);
    }
    setRoundNum((prev) => prev + 1);
  }
}

    useEffect(() => {
      setAnswerBox(initialAnswerBox)
      
    },[])

  
  return (
    <>
      <RoundCounter roundNum={roundNum} gameOver={gameOver}/>
      <form  className="flex flex-col items-center" 
        onSubmit={handleNameFormSubmit}>
      <div>{answerBlocks()}</div>
      <div className="pl-[1em] bg-[#D9D9D9] p-2 rounded mt-2 mb-[2rem] text-center tracking-[.5em] uppercase">{answerBox.join('')}</div>
          <HintBox todaysKid={kid} round={roundNum} />
      <button className="w-full bg-black p-2 mt-[2rem] text-sm rounded-lg border-4 border-double border-stone-300 text-slate-200 active:bg-[#2C82AA]">
          Guess
      </button>
      </form>
    </>
  )
}
