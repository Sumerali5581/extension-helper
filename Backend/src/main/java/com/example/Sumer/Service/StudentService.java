package com.example.Sumer.Service;

import org.springframework.core.log.LogMessage;
import org.springframework.data.domain.jaxb.SpringDataJaxb.SortDto;

import com.example.Sumer.Entity.FeedbackDTO;
import com.example.Sumer.Entity.LoginDTO;
import com.example.Sumer.Entity.LoginResponse;
import com.example.Sumer.Entity.StudentDto;


public interface StudentService {

	 String addStudent(StudentDto studentDto);
	    LoginResponse loginStudent(LoginDTO loginDTO);
	    StudentDto createUser(StudentDto user);
	    String addFeedback(FeedbackDTO feedbackDTO);
}
