function SearchResults({ images }) {
    console.log(images)

    if(!images.length) {
        return <h2>No images found!</h2>
    }

    return (
        <>
            {images.map(image => (
                <div key={image.id} className="gif">
                    <img src={image.images.downsized_large.url} />
                </div>
            ))}
        </>
    )
}

export default SearchResults;
