import { useState } from "react";
import apiCall from "../../utils/common/apiCall"
import BookDetails from "./BookDetail";
import { useEffect } from "react";

const Books = ()=>{
    const bookJsonUrl = '/public/books.json';
    const [books, setBooks] = useState([]);
    
    const getBookList = async () => {
        const books = await apiCall(bookJsonUrl);
        setBooks(books);
    };

    useEffect(() => {
        getBookList();
    }, []);

    return (
        <div id='bookList' className="pt-16">
            <h1 className="text-center text-xl font-semibold p-8">Check out our latest books!</h1>
            <div className="grid p-8 space-x-6 space-y-8 lg:grid-cols-3">
            {
                books?.map((book)=>(<BookDetails {...book}></BookDetails>))
            }
            </div>
        </div>
    )
}

export default Books