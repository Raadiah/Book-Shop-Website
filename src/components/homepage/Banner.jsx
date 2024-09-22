import bookImage from '../../assets/books.png'

function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
            src={bookImage}
            className="max-w-xs max-h-xs rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
            Unlock a World of Stories – Find Your Next Favorite Book at Reader's Cafe
            </p>
            <button className="btn btn-primary">Buy Book</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
