export default function HintBox(props) {
    const { todaysKid, round } = props;
    return (
        <div className="bg-[#80D4D8] p-4 rounded-md w-60 text-center">
            {`This is a name for a ${todaysKid.gender}.`}
        {
            round > 1 && (<div>{todaysKid.popularity}</div>)
        }
        {
            round > 2 && (<div>{`${todaysKid.country} for ${todaysKid.meaning}.`}</div>)
        }
        </div>
        
    )
}