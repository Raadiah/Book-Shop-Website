import Rating from "../common/Rating"

const Book = ({bookId, bookName, author, image, tags, category, rating})=>{
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="h-1/2 bg-gray-100">
                <img
                src={image}
                alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                { bookName?.length > 30 ? `${bookName?.substring(0, 25)}...` : bookName }
                <div className="badge badge-accent">{category}</div>
                </h2>
                <h3 className="card">
                {author}
                </h3>
                <div className="card-actions">  
                    <Rating ratingValue={rating}></Rating> 
                </div>
                <div className="card-actions">  
                    <p className="justify-end flex flex-wrap gap-2">
                        {
                            tags.map(
                                (tag)=><span className="text-xs italic">#{tag}</span>
                            )
                        }
                    </p> 
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-wide">Book Details</button>    
                </div>
            </div>
        </div>
    )
}

export default Book