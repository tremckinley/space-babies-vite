import {useState, useEffect} from 'react';

export default function NameForm(props) {
  const { kid, submit, onAnswerUpdate } = props;
  const [answerBox, setAnswerBox] = useState([])
  
  const handleKey = (e) => {
    if (
      e.target.value.length > 0 &&
      e.key != "Backspace" &&
      e.target.nextElementSibling
    ) {
      e.target.nextElementSibling.focus();
    } else if (
      e.target.value.length < 1 &&
      e.key === "Backspace" &&
      e.target.previousElementSibling
    ) {
      e.target.previousElementSibling.focus();
    }
  };

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

  const answerBlocks = () =>{
    return ( kid.name != undefined ? (
      kidNameArray.map((letter, idx) => {
        return (
          <input
            key={idx}
            type="text"
            className="w-[3rem] h-[3rem] text-center uppercase rounded-md bg-[#d9d9d9] p-1 m-[2px] border border-black"
            maxLength={1}
            onKeyDown={(e) => handleKey(e)}
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
    useEffect(() => {
      setAnswerBox(initialAnswerBox)
    
    },[])

  
  return (    
    <form  className="flex flex-col items-center" 
      onSubmit={submit}>
    <div>{answerBlocks()}</div>
    <div className="pl-[1em] bg-[#D9D9D9] p-2 rounded mt-2 mb-[2rem] text-center tracking-[.5em] uppercase">{answerBox.join('')}</div>
        {props.children}
    <button className="w-full bg-black p-2 mt-[2rem] text-sm rounded-lg border-4 border-double border-stone-300 text-slate-200 active:bg-[#2C82AA]">
        Guess
    </button>
    </form>
  )
}
