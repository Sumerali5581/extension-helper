package com.example.Sumer.Service.impl;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Sumer.Entity.Feedback;
import com.example.Sumer.Entity.FeedbackDTO;
import com.example.Sumer.Entity.LoginDTO;
import com.example.Sumer.Entity.LoginResponse;
import com.example.Sumer.Entity.Student;
import com.example.Sumer.Entity.StudentDto;
import com.example.Sumer.Repo.FeedbackRepo;
import com.example.Sumer.Repo.StudentRepo;
import com.example.Sumer.Service.StudentService;


@Service
public class StudentIMPL implements StudentService {

	@Autowired
    private StudentRepo studentRepo;
	
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
	private ModelMapper modelMapper;
    
    @Autowired
    private FeedbackRepo feedbackRepo;
    
    @Override
    public String addStudent(StudentDto studentDTO) {
        Student student = new Student(
                studentDTO.getId(),
                studentDTO.getName(),
                studentDTO.getEmail(),
               this.passwordEncoder.encode(studentDTO.getPassword())
        );
        studentRepo.save(student);
        return student.getName();
    }
    
    @Override
    public String addFeedback(FeedbackDTO feedbackDTO)
    {
    	Feedback feedback=new Feedback(
    	feedbackDTO.getId(),
    	feedbackDTO.getName(),
    	feedbackDTO.getEmail(),
    	feedbackDTO.getMessage()
    	);
    	feedbackRepo.save(feedback);
    	return feedback.getName();
    }
    StudentDto studentDTO;
    
    @Override
    public LoginResponse  loginStudent(LoginDTO loginDTO) {
        String msg = "";
        Student student1 = studentRepo.findByEmail(loginDTO.getEmail());
        if (student1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = student1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Student> employee = studentRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }
    
    @Override
	public StudentDto createUser(StudentDto userDto) {
		Student user=this.dtoToUser(userDto);
		Student savedUser=this.studentRepo.save(user);
		return this.userToDto(savedUser);
	}
    
    public Student dtoToUser(StudentDto userDto)
	{
		Student user=this.modelMapper.map(userDto, Student.class);
		return user;
	}
    
    public StudentDto userToDto(Student user)
	{
		StudentDto userDto=this.modelMapper.map(user, StudentDto.class);
		return userDto;
	}
}
