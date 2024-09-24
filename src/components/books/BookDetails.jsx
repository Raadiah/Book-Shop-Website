import { useLocation } from 'react-router-dom';
import Rating from "../common/Rating"
import { FaHeart } from 'react-icons/fa';

const BookDetails = ()=>{
    const { state } = useLocation();
    const { bookId, review, totalPages, publisher, yearOfPublishing, bookName, author, image, tags, category, rating } = state.book;
    window.scrollTo(0,0);
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content bg-white rounded-md p-8 min-h-3/4 w-3/4 flex-col lg:flex-row">
                <img
                src={image}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div className='space-y-4'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h3 className="card-title">
                    {author}
                    </h3>
                    <div className="card-actions">  
                        <Rating ratingValue={rating}></Rating> 
                    </div>
                    <p className='italic'>
                        "{review}"
                    </p>
                    <div className='grid grid-cols-3 gap-x-4'>
                        <span className='col-span-1 font-semibold'>Category</span>
                        <span className='col-span-2'>{category}</span>
                        <span className='col-span-1 font-semibold'>Tags</span>
                        <span className='col-span-2'>{tags.join(', ')}</span>
                        <span className='col-span-1 font-semibold'>Total Pages</span>
                        <span className='col-span-2'>{totalPages}</span>
                        <span className='col-span-1 font-semibold'>Publisher</span>
                        <span className='col-span-2'>{publisher}</span>
                        <span className='col-span-1 font-semibold'>Year of Publishing</span>
                        <span className='col-span-2'>{yearOfPublishing}</span>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <button className="btn btn-outline">
                            <FaHeart></FaHeart>
                            Wish to Read
                        </button>
                        <button className="btn btn-accent">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails