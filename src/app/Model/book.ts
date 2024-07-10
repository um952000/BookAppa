export interface Book {

    //id,title,author,price,genre,pages,description,coverpage

    id?: string; // this field is optional
    title: string;
    author: string;
    price: number;
    genre: string;
    pages: number;
    description: string;
    date: Date;
    coverpage: string; //it is string as the image link will be a string................
}