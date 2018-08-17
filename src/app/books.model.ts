export class Book {
    public id: number;
    public author: string;
    public title: string;
    public cover: string;
    public read: boolean;

    constructor( id: number, author: string, title: string, cover: string, read: boolean ) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.cover = cover;
        this.read = read;
    }
}