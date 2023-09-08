package com.example.userdemo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.userdemo.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{

  public List<User> findAllByOrderByIdAsc();
}
