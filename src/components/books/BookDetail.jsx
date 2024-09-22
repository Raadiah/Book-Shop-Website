const BookDetails = ({bookId, bookName, author, image, tags, category, rating})=>{
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src={image}
                alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                { bookName?.length > 30 ? `${bookName?.substring(0, 25)}...` : bookName }
                <div className="badge badge-accent">{category}</div>
                </h2>
                <button className="btn btn-wide">Book Details</button>
                <div className="card-actions justify-end">   
                <p className="justify-end flex flex-wrap gap-2">
                    {
                        tags.map(
                            (tag)=><span className="text-xs italic">#{tag}</span>
                        )
                    }
                </p>      
                </div>
            </div>
        </div>
    )
}

export default BookDetails