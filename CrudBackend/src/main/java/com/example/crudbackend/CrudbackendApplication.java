package com.example.crudbackend;

import com.example.crudbackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.crudbackend.repository.UserRepository;

@SpringBootApplication
public class CrudbackendApplication  implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;


    public static void main(String[] args) {

        SpringApplication.run(CrudbackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        userRepository.save(new User("salman", "salman@ymail.com", "123456", "dhaka"));
        userRepository.save(new User("salman2", "salman2@ymail.com", "123456", "ctg"));
        userRepository.save(new User("salman3", "salman3@ymail.com", "123456", "comilla"));
        userRepository.save(new User("Moyeenul", "moyeenul@ymail.com", "111111", "zigatola"));
    }
}
