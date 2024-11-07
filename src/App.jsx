import { createContext } from "react"
import GameBoard from "./assets/game_board/GameBoard"
import { guessNames } from "./assets/guessNames"
const GameContext = createContext();

function App() {
  const todaysKid = guessNames[3]
  return (

    <div className="background">
      <header className="banner">
        <h1>TEST GAME 2</h1>
      </header>
      <div className='flex h-full w-full'>
        <section className='w-[33%] bg-[#80D4D8] mt-1'>
          
        </section>
        <section className='flex flex-col flex-1 justify-center items-center'>
          <GameBoard todaysKid={todaysKid}/>
        </section>
      </div>
    </div>
  )
}

export default App
