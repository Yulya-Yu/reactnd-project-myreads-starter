import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Book extends Component {


  updateShelf(shelf) {
    this.props.onChangeShelf(this.props.book, shelf)
  }



  render () {
    const {book} = this.props
    return (
      <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ height: 192, width: 128, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`  }}></div>
          <div className="book-shelf-changer">
             <select value={book.shelf} onChange={(event) => this.updateShelf(event.target.value, this.props.onUpdateShelf)}>  
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
       </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ') }</div>
      </div>
    )
  }
}

export default Book