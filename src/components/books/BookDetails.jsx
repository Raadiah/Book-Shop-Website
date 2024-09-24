import { useLocation } from 'react-router-dom';

const BookDetails = ()=>{
    const { state } = useLocation();
    const { bookId, bookName, author, image, tags, category, rating } = state;
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                src={image}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{bookName}</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-ghost">Get Started</button>
                <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetails