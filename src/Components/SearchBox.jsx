function SearchBox({placeholder,handleChange}) {
    return (  
        <input type='search' placeholder={placeholder} onChange={handleChange}></input>
        );
}

export default SearchBox;