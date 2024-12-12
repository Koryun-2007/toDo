function Header({inputValue,setValue,setItems}){

    function click(e){        
        setValue ("")
        setItems(function (oldState){
            return [...oldState, inputValue]
        })
    }
    
    return (
        <>
            <input onChange={(e) => setValue(e.target.value)} value={inputValue} type="text" />
            <button onClick={click}>click</button>
        </>
    )
}
export default Header