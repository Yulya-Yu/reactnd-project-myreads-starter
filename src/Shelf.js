import React, {Component} from 'react'
import Book from './Book'
import sortBy from 'sort-by'


class Shelf extends Component {


render () {

   const shelveAll = ["read", "currentlyReading", "wantToRead" ] 
    const shelveTitle = ["Read", "Currently Reading", "Want To Read" ]
    return (
      <div>
        {shelveAll.map((shelf, i) => { 
           return( 
            <div className="list-books-content" key={i}>
              <div>
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelveTitle[i]}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.bookShelf.sort(sortBy('title')).filter(book => book.shelf === shelf).map(book => (
                            <li><Book book={book} key={book.id} onChangeShelf={this.props.onChangeShelf} /></li>
                          ))
                        }
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        )}
      </div> 
    )
  }
}



export default Shelf