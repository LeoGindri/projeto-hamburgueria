export default function Button({textValue, classname, click}){
    return(
        <div>
            <button onClick={click} className={classname}>{textValue}</button>
        </div>
    )
}