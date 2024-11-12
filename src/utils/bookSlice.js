// src/utils/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        description: "A novel about the serious issues of rape and racial inequality, narrated by the young Scout Finch.",
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/817SDvX90JL._AC_UF1000,1000_QL80_.jpg",
        moreInfo: "Set in the 1930s Deep South, this novel explores themes of racial injustice, moral growth, and empathy through the young narrator, Scout Finch, and her father, lawyer Atticus Finch.",
        year: 1960
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        category: "Sci-Fi",
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/91qbEpMgxkL._AC_UF894,1000_QL80_.jpg",
        moreInfo: "The story follows Winston Smith, a man struggling under the oppressive rule of Big Brother and the Party, where independent thinking is a crime and surveillance is constant.",
        year: 1949
      },
      {
        id: 3,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "A young boy discovers he is a wizard and attends a magical school called Hogwarts.",
        rating: 4.9,
        image: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        moreInfo: "The first book in the Harry Potter series, it follows Harry's journey as he learns about his magical heritage and encounters the dark forces that threaten the wizarding world.",
        year: 1997
      },
      {
        id: 4,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "Harry returns to Hogwarts to face new dangers and uncover secrets hidden within the school.",
        rating: 4.8,
        image: "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        moreInfo: "The second book in the series, this story introduces the dark forces lurking in the Chamber of Secrets and follows Harry's attempts to stop them.",
        year: 1998
      },
      {
        id: 5,
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "Harry learns about his mysterious past and the truth behind his parents' death.",
        rating: 4.9,
        image: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
        moreInfo: "In this third installment, Harry discovers secrets about his family and encounters the enigmatic prisoner Sirius Black.",
        year: 1999
      },
      {
        id: 6,
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "Harry competes in the Triwizard Tournament, facing magical challenges and dark threats.",
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bW0fy4-6HPBawRZXaO_N6STcnqHtXYSxqw&s",
        moreInfo: "The fourth book in the series, where Harry's participation in the Triwizard Tournament leads him to encounter dangers and the return of Lord Voldemort.",
        year: 2000
      },
      {
        id: 7,
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "Harry and his friends fight against the dark forces threatening the wizarding world.",
        rating: 4.7,
        image: "https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_.jpg",
        moreInfo: "In this fifth book, Harry discovers the Order of the Phoenix, a secret society dedicated to fighting Voldemort and the Death Eaters.",
        year: 2003
      },
      {
        id: 8,
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "Harry learns more about Voldemort's past as he prepares to face his ultimate enemy.",
        rating: 4.8,
        image: "https://m.media-amazon.com/images/I/91mDaiCSybL._AC_UF1000,1000_QL80_.jpg",
        moreInfo: "The sixth book explores Voldemort's history and Harry's deepening understanding of the magic needed to defeat him.",
        year: 2005
      },
      {
        id: 9,
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "Harry embarks on a dangerous mission to destroy Voldemort's Horcruxes.",
        rating: 4.9,
        image: "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        moreInfo: "The final book in the series, where Harry faces Voldemort in a climactic battle for the fate of the wizarding world.",
        year: 2007
      },
      {
        id: 10,
        title: "India’s Struggle for Independence",
        author: "Bipan Chandra",
        category: "Historical",
        description: "An extensive history of the Indian independence movement.",
        rating: 4.5,
        image: "https://images.meesho.com/images/products/349223157/i8tmk_512.webp",
        moreInfo: "This book covers the political, social, and economic factors that shaped India's independence struggle against British rule, from the 1857 revolt to independence in 1947.",
        year: 1988
      },
      {
        id: 11,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Romance",
        description: "A classic romantic novel that also critiques the British landed gentry.",
        rating: 4.9,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=20&crop=false",
        moreInfo: "Through the character of Elizabeth Bennet, Austen offers a witty exploration of social dynamics, marriage, and morality in early 19th-century British society.",
        year: 1813
      },
      {
        id: 12,
        title: "The Shining",
        author: "Stephen King",
        category: "Horror",
        description: "A psychological horror about a family stranded in a haunted hotel.",
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/81nwnHTcV2L.jpg",
        moreInfo: "This horror novel follows Jack Torrance, an aspiring writer and recovering alcoholic, as he descends into madness in the haunted Overlook Hotel.",
        year: 1977
      }
      ,
      {
        id: 13,
        year:2017,
        title: "India That is Bharat",
        author: "J Sai Deepak",
        category: " Historical",
        description: "Explores the impact of colonialism on Indian society, culture, and identity.",
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/81qiBQl89PL._AC_UF1000,1000_QL80_.jpg",
        moreInfo: "This book examines India’s journey through the lens of history, law, and culture, arguing the importance of understanding colonial impact on India's past and present."
      }
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
           // Find the highest current ID, and add 1 to it for the new book's ID
           const maxId = state.reduce((max, book) => (book.id > max ? book.id : max), 0);
           const newBookId = maxId + 1; // Generate the new ID
     
           // Create a new book with the new ID
           const newBook = { ...action.payload, id: newBookId };
     
           // Append the new book to the existing list
           state.push(newBook);
     
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
