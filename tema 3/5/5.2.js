class BookList{
	constructor(nextBook,readingBook,lastBook){
		this.arrRead =[], 
		this.arrNoRead = [],
		this.netxtBook = Book,
		this.readingBook = Book,
		this.lastBook = Book
		this.allBooks[this.arrRead,this.arrNoRead]
	}
}
class Book{
	constructor(title,gender,author,dateRead){
		this.title = title,
		this.gender = gender,
		this.author = author,
		this.read = false,
		this.dateRead = Date
	}
	read(){
		this.read = true
		this.dateRead = new Date()
	}
}