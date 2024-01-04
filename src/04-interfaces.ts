
interface Book{
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number)=>void;
}

const book: Book = {
    id: 1,
    title: 'My title',
    author: 'dominicode'
};

const myName= (valor : string): string=>{
    return `hola como estas ${valor}`;
}

const books:Book[]=[];


function getBook(): Book {
    return{
    id: 1,
    title: 'My title',
    author: 'dominicode'
    };
};

function createBook(book: Book): Book{
    return book;
}

createBook(book);