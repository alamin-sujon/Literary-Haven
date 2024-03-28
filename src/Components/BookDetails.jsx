import ReadLoacalStorage from "./ReadLoacalStorage";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import WishLocalStorage from "./WishLocalStorage";
const BookDetails = () => {
  const data = [
    {
      bookId: 1,
      bookName: "The Silent Patient",
      author: "Alex Michaelides",
      image: "https://i.ibb.co/0t9MygL/one.webp",
      review:
        "A gripping psychological thriller that keeps you guessing until the very end.",
      totalPages: 336,
      rating: 4.5,
      category: "Mystery",
      tags: ["Suspense", "Psychological"],
      publisher: "Celadon Books",
      yearOfPublishing: 2019,
    },
    {
      bookId: 2,
      bookName: "Educated: A Memoir",
      author: "Tara Westover",
      image: "https://i.ibb.co/xF5RVMX/two.jpg",
      review:
        "A powerful memoir about resilience, education, and the pursuit of knowledge.",
      totalPages: 352,
      rating: 4.7,
      category: "Biography",
      tags: ["Memoir", "Education"],
      publisher: "Random House",
      yearOfPublishing: 2018,
    },
    {
      bookId: 3,
      bookName: "Where the Crawdads Sing",
      author: "Delia Owens",
      image: "https://i.ibb.co/88srsTP/three.jpg",
      review:
        "A beautifully written novel that immerses you in the marshlands of North Carolina.",
      totalPages: 384,
      rating: 4.6,
      category: "Fiction",
      tags: ["Nature", "Romance"],
      publisher: "G.P. Putnam's Sons",
      yearOfPublishing: 2018,
    },
    {
      bookId: 4,
      bookName: "Becoming",
      author: "Michelle Obama",
      image: "https://i.ibb.co/NFvDB0Z/four.jpg",
      review:
        "An inspiring and candid memoir that offers a glimpse into the life of the former First Lady.",
      totalPages: 448,
      rating: 4.8,
      category: "Biography",
      tags: ["Memoir", "Politics"],
      publisher: "Crown Publishing Group",
      yearOfPublishing: 2018,
    },
    {
      bookId: 5,
      bookName: "The Testaments",
      author: "Margaret Atwood",
      image: "https://i.ibb.co/smCGYFW/five.png",
      review:
        "A worthy sequel to The Handmaid's Tale, offering new perspectives on the dystopian world.",
      totalPages: 432,
      rating: 4.4,
      category: "Fiction",
      tags: ["Dystopian", "Feminism"],
      publisher: "Nan A. Talese",
      yearOfPublishing: 2019,
    },
    {
      bookId: 6,
      bookName: "The Night Circus",
      author: "Erin Morgenstern",
      image: "https://i.ibb.co/brd6Lq2/six.jpg",
      review:
        "A mesmerizing tale of magic and romance set in an enchanting circus.",
      totalPages: 400,
      rating: 4.3,
      category: "Fantasy",
      tags: ["Magic", "Romance"],
      publisher: "Doubleday",
      yearOfPublishing: 2011,
    },
    {
      bookId: 7,
      bookName: "Circe",
      author: "Madeline Miller",
      image: "https://i.ibb.co/sFnhdzP/seven.jpg",
      review:
        "An enthralling retelling of the myth of Circe, weaving together themes of power, love, and identity.",
      totalPages: 400,
      rating: 4.5,
      category: "Fantasy",
      tags: ["Mythology", "Adventure"],
      publisher: "Little, Brown and Company",
      yearOfPublishing: 2018,
    },
    {
      bookId: 8,
      bookName: "The Goldfinch",
      author: "Donna Tartt",
      image: "https://i.ibb.co/9t3SSdC/eight.jpg",
      review:
        "A sprawling novel that combines art, friendship, and the complexities of life.",
      totalPages: 784,
      rating: 4.2,
      category: "Fiction",
      tags: ["Art", "Friendship"],
      publisher: "Little, Brown and Company",
      yearOfPublishing: 2013,
    },
    {
      bookId: 9,
      bookName: "The Dutch House",
      author: "Ann Patchett",
      image: "https://i.ibb.co/J2xnnWT/nine.jpg",
      review:
        "A poignant exploration of family, loss, and the enduring bonds that tie us together.",
      totalPages: 352,
      rating: 4.6,
      category: "Fiction",
      tags: ["Family", "Relationships"],
      publisher: "Harper",
      yearOfPublishing: 2019,
    },
  ];

  const handleRead = () => {
  const isDone = ReadLoacalStorage(singleBook);
  if(isDone){
    toast("Books Added To Read List !");
  }
  else{
    toast("Already Exists in Book List !");
  }
//    if(!existBook){
    
//  saveBook.push(data);
//      localStorage.setItem("BookRead", JSON.stringify(saveBook))
//     alert('Successfully Added')
//    }
//    else{
//     alert("Already Exits");
//    }
    
  };

  const handleWish = () => {
    const isDone  = WishLocalStorage(singleBook);
    if(isDone=='Book'){
      toast('Already Exists in Book List!!!');
    }
    else if(isDone == true){
      toast('Books Added to Wish List!!!');
    }
    else{
      toast('Already Exists in Wosh List!!!')
    }
  }

  const { bookId } = useParams();

  const singleBook = data[bookId - 1];
  const {
    bookName,
    author,
    image,
    tags,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 p-3">
      <div className=" p-6 bg-[#1313130D] rounded-xl">
        <img className="w-full lg:w-[500px] h-[400px] lg:min-h-screen/2" src={image} alt="" />
      </div>
      <div className="lg:w-[700px]">
        <h2 className=" text-2xl lg:text-[40px] font-bold">{bookName}</h2>
        <h2 className="text-xl mt-3 font-medium border-b-2 border-dotted pb-4">
          By : {author}
        </h2>
        <h2 className="text-xl font-medium my-4">{category}</h2>
        <h2>
          <span className="font-bold">Review : </span> {review}
        </h2>
        <div className="flex gap-8 items-center my-4 border-b-2 border-dotted pb-4">
          <h2 className="font-bold">Tag : </h2>
          <h2 className="py-2 px-4 font-medium rounded-full text-[#23BE0A] bg-[#23BE0A0D]">
            #{tags[0]}
          </h2>
          <h2 className="py-2 px-4 font-medium rounded-full text-[#23BE0A] bg-[#23BE0A0D]">
            #{tags[1]}
          </h2>
        </div>
        <div className="flex gap-10 my-4">
          <h2>Number of Pages:</h2>
          <h2 className="font-semibold">{totalPages}</h2>
        </div>
        <div className="flex gap-24">
          <h2>Publisher : </h2>
          <h2 className="font-semibold">{publisher}</h2>
        </div>
        <div className="flex gap-8 my-4">
          <h2>Year of Publishing: </h2>
          <h2 className="font-semibold">{yearOfPublishing}</h2>
        </div>
        <div className="flex gap-28">
          <h2>Rating : </h2>
          <h2 className="font-semibold">{rating}</h2>
        </div>
        <div className="flex gap-4 my-4">
          <button onClick={handleRead} className="btn">
            Read
          </button>
          <button onClick={handleWish} className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
