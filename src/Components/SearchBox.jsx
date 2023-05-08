function SearchBox({placeholder,handleChange}) {
    return (  
        <>
        Search :
        <input type='search' className="form-control w-25 d-inline" placeholder={placeholder} onChange={handleChange}></input>
        </> 
        );
}

export default SearchBox;