package com.example.demo.model;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getBooks(){
        return bookRepository.findAll();
    }

    public void addNewBook(Book book) {
        Optional<Book> bookOptional = bookRepository.findBookByTitle(book.getTitle());
        if(bookOptional.isPresent()){
            throw new IllegalStateException("we have that book");
        }
        bookRepository.save(book);
    }
    public void deleteBook(Long bookId){
        boolean exists = bookRepository.existsById(bookId);
        if(!exists){
            throw new IllegalStateException("book with id" + bookId + " does not exists");
        }
        bookRepository.deleteById(bookId);
    }
    @Transactional
    public void updateBook(Long bookId,
                           String title,
                           String author){
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new IllegalStateException("book with id " + bookId + " does not exists"));
        if(title != null &&
                title.length() > 0 &&
                !Objects.equals(book.getTitle(), title)){
            book.setTitle(title);
        }
        if(author != null &&
                author.length() > 0 &&
                !Objects.equals(book.getAuthor(), author)){
            Optional<Book> bookOptional = bookRepository.findBookByTitle(title);
            if(bookOptional.isPresent()){
                throw new IllegalStateException("we have that book");
            }
            book.setAuthor(author);
        }
    }
}
