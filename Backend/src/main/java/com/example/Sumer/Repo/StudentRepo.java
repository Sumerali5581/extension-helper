package com.example.Sumer.Repo;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Sumer.Entity.*;

@EnableJpaRepositories
@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {

	 Optional<Student> findOneByEmailAndPassword(String email, String password);
	    Student findByEmail(String email);
}
