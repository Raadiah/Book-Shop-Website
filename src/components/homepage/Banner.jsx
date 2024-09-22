import bookImage from '../../assets/books.png'

function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
            src={bookImage}
            className="max-w-xs max-h-xs mt-6 lg:mt-0 rounded-lg shadow-2xl" />
            <div>
            <p className="py-6 pr-6">
            Unlock a World of Stories – Find Your Next Favorite Book at <span className='font-semibold text-green-700'>Reader's Cafe</span>
            </p>
            <button className="btn btn-primary">Buy Book</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
