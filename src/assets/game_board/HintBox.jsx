export default function HintBox(props) {
    const { todaysKid, round } = props;
    return (
        <div className="border-double border-4 border-stone-500 bg-zinc-300 justify-center p-4 rounded-md">
            {`This is a name for a ${todaysKid.gender}.`}
        {
           round > 1 && (
           <div>{todaysKid.popularity}</div> 
            )

        }
        {round > 2 && (
            <div>{`${todaysKid.country} for ${todaysKid.meaning}.`}</div>
        )}
        </div>
        
    )
}