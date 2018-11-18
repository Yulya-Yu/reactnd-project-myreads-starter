import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {
  
  state = {
    query: '',
    books: []
  }

 clearSearch = () => {
    this.setState ({ query: '', books: []})
 }

 updateSearch = (query) => {
  this.setState({ query: query.trim()})
 }

  updateQuery = (query) => {
    if (!query) {
      this.clearSearch(query)
      return;
    } else {
      this.updateSearch(query)
      BooksAPI.search(query).then((books) => {
          if (books.error) {
          books = []
        }
        books.map(book =>  
          (this.props.bookShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
      })
    }
  }


  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by either author or title"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.sort(sortBy('title')).map(book => (
                    <Book book={book} key={book.id} shelf={ book.shelf } onChangeShelf={this.props.onChangeShelf} />
                  ))
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search