package com.example.userdemo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.userdemo.model.User;
import com.example.userdemo.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
  
  @Autowired
  private UserRepository userRepository;

  @GetMapping("/users")
  public List<User> getUsers() {
    return (List<User>) userRepository.findAllByOrderByIdAsc();
  }

  @GetMapping("/users/{id}")
  public Optional<User> getUsers(@PathVariable String id) {
    Long userId = Long.parseLong(id);
    return userRepository.findById(userId);
  }

  @PostMapping("/users")
  public void addUser(@RequestBody User user) {
    userRepository.save(user);
  }

  @PutMapping("/users")
  public void updateUser(@RequestBody User user) {
    userRepository.findById(user.getId()).ifPresent(user1 -> {
      user1.setName(user.getName());
      user1.setEmail(user.getEmail());
      userRepository.save(user1);
    });
  }

  @DeleteMapping("/users")
  public void deleteUser(@RequestBody User user) {
    userRepository.deleteById(user.getId());
  }
}
