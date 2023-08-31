package com.example.Sumer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Sumer.Entity.FeedbackDTO;
import com.example.Sumer.Entity.LoginDTO;
import com.example.Sumer.Entity.LoginResponse;
import com.example.Sumer.Entity.StudentDto;
import com.example.Sumer.Service.StudentService;

@RestController
@CrossOrigin
@RequestMapping("users")
public class StudentController {

	@Autowired
    private StudentService studentService;
	
    @PostMapping("/save")
    public String saveStudent(@RequestBody StudentDto studentDTO)
    {
        String id = studentService.addStudent(studentDTO);
        return id;
    }
    
    @PostMapping("/feedback")
    public String saveFeedback(@RequestBody FeedbackDTO feedbackDTO)
    {
    	String id=studentService.addFeedback(feedbackDTO);
    	return id;
    }
    
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = studentService.loginStudent(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    
    @PostMapping("/register")
	public ResponseEntity<StudentDto> registerUser(@RequestBody StudentDto userDto)
	{
		StudentDto createUserDto=this.studentService.createUser(userDto);
		return new ResponseEntity<>(createUserDto,HttpStatus.CREATED);
	}
}
