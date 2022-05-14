import { useState } from 'react'

function SearchForm(props) {
    const [searchString, setSearchString] = useState('minions');

    function handleChange(event) {
        setSearchString(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.getImages();
    }

    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <input
                placeholder="Search"
                type="text"
                name="searchString"
                required
                onChange={handleChange}
                value={searchString}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;
