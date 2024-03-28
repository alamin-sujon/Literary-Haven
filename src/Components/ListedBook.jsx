
import { useState } from "react";
import { ReadBook } from "./ReadLoacalStorage";
import ReadedBook from "./ReadedBook";
import { WishBook } from "./WishLocalStorage";
import WishedBook from "./WishedBook";
import Select from 'react-select'



const ListedBook = () => {
  const books = ReadBook();

  
  
  const wishBooks = WishBook();
  
 const [allBooks, setAllBooks] = useState(books)

  const Assending = (ids) => {
    
    let data = [...books];
    if(ids === 'rating'){
      
      let result = data.sort((a, b) => {
        const rating1 = a.rating.toString();
        
        const rating2 = b.rating.toString();
        
        const result = rating2.localeCompare(rating1);
        
        return result;
        
      }
    
    
     
    )
    return result;
  }
  if(ids === 'totalPages'){
      
      let result = data.sort((a, b) => {
        const rating1 = a.totalPages.toString();
        
        const rating2 = b.totalPages.toString();
        
        const result = rating2.localeCompare(rating1);
        
        return result;
        
      }
    
    
     
    )
    return result;
  }
  if(ids === 'yearOfPublishing'){
      
      let result = data.sort((a, b) => {
        const rating1 = a.yearOfPublishing.toString();
        
        const rating2 = b.yearOfPublishing.toString();
        
        const result = rating2.localeCompare(rating1);
        
        return result;
        
      }
    
    
     
    )
    return result;
  }
    
  }

 

 

  const handleRating = (event) => {
   const datas =  Assending(event.label)
   
   setAllBooks(datas);
   
   
  }

  const options = [
    { value: 'rating', label: 'rating' },
    { value: 'totalPages', label: 'totalPages' },
    { value: 'yearOfPublishing', label: 'yearOfPublishing' }
  ]

  
  return (
    <div>
      <h2 className="text-center text-4xl font-bold py-6 bg-[#F3F3F3]">
        Books
      </h2>
      
      <div className="flex justify-center my-5">
        
      
         <Select className="w-[200px] " options={options} onChange={handleRating}/>
      </div>
      


      <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl" aria-label="Read Book" checked />
  <div role="tabpanel" className="tab-content p-10">
  {allBooks.map((book) => (
          <ReadedBook key={book.bookId} book={book}></ReadedBook>
        ))}
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl" aria-label="Wishlist Books"   />
  <div role="tabpanel" className="tab-content p-10">
  {wishBooks.map((book) => (
          <WishedBook key={book.bookId} book={book}></WishedBook>
        ))}
  </div>

  
</div>

    </div>
  );
};

export default ListedBook;
