import HintBox from "./HintBox"
import NameForm from "./NameForm"

export default function GameBoard(props) {
    const { todaysKid } = props;
        
    return (
        <>
            <NameForm kid={todaysKid} />
            
        </>
    )
}