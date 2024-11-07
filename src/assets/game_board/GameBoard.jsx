import HintBox from "./HintBox"
import NameForm from "./NameForm"
import { guessNames } from "../guessNames"
import { useContext } from "react";

export default function GameBoard(props) {
    const { todaysKid } = props;
    return (
        <>
            <NameForm kid={todaysKid} submit >
                <HintBox todaysKid={todaysKid} />
            </NameForm>
            
        </>
    )
}