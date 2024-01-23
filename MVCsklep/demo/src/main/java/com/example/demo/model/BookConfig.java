package com.example.demo.model;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class BookConfig {
    @Bean
    CommandLineRunner commandLineRunner(BookRepository repository) {
        return args -> {
            Book lotr = new Book(
                    "Lord Of The Rings",
                    "J.R.R Tolkien",
                    7.89
            );
            Book hobbit = new Book(
                    "Hobbit",
                    "J.R.R Tolkien",
                    6.69
            );
            Book harry = new Book(
                    "Harry Potter and the Philosopher's Stone",
                    "J. K. Rowling",
                    5.59
            );
            Book harry2 = new Book(
                    "Harry Potter and the Half-Blood Prince",
                    "J. K. Rowling",
                    5.59
            );
            Book alice = new Book(
                    "Alice's Adventures In Wonderland",
                    "Lewis Caroll",
                    7.19
            );
            repository.saveAll(
                    List.of(lotr, hobbit,harry,harry2,alice)
            );
        };
    }
}
