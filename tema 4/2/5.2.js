class BookList{
	constructor(nextBook,readingBook,lastBook){
		this.arrRead =[], 
		this.arrNoRead = [],
		this.nextBook = Book,
		this.readingBook = Book,
		this.lastBook = Book
		this.allBooks[this.arrRead,this.arrNoRead]
	}
	add(book){
		this.arrNoRead.push(book)
	}
	finishCurrentBook(){
		this.readingBook.read()
		this.arrRead.push(this.readingBook)
		this.lastBook = this.readingBook
		this.readingBook = this.arrNoRead.splice(0,1)
		this.nextBook = this.arrNoRead[0]
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