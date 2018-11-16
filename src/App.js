import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    books: []
  }
  

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat(book)
        }))
      })
  }  



    render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
               <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
            <Shelf onChangeShelf={this.changeShelf} bookShelf={this.state.books}/>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={() => (
          <Search
            onChangeShelf={this.changeShelf} bookShelf={this.state.books}
          />
        )}/>
      </div>
    )
  }
}
  

export default BooksApp
