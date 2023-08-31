package com.example.Sumer.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.Sumer.Entity.Feedback;

@EnableJpaRepositories
@Repository
public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {

}
