import React, { Component } from 'react';

class BookList extends Component{
    
    renderList(){
        this.props.books.map((book) => {
            return (
                <li key={bok.title}
                    className="list-group-item">{book.title}</li>
            );
        });
    }
    
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}