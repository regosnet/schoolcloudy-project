package com.schoolcloudy.web.mvc.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.schoolcloudy.model.entities.Administrator;
import com.schoolcloudy.model.entities.Student;
import com.schoolcloudy.model.shared.entities.Contact;
import com.schoolcloudy.model.shared.entities.Gender;
import com.schoolcloudy.model.shared.entities.User;
import com.schoolcloudy.service.administrative.AdministrativeService;



@Controller
public class HomeController {

	@Autowired
	private AdministrativeService administrativeService;
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home(Model model) {
		//User user = this.administrativeService.addNewAdministrator(this.addNewAdministrator());
		//this.administrativeService.addNewstudent(this.addNewStudent());
		//User user = administrativeService.getUser("Davis.Ropols", "");
		//System.out.println(user);
		return "home";
	}
	
	/*
	 * School school = new School();
		school.setExternalId("A10293");
		school.setSchoolName("Ahuru University");
		school.setSchoolFaculties(new HashSet<>());
		
		Faculty faculty = new Faculty();
		faculty.setExternalId("AEE29308");
		faculty.setSchool(school);
		faculty.setFacultyName("Faculty Of Electrical Engineering");
		school.getSchoolFaculties().add(faculty);
		
		Faculty faculty2 = new Faculty();
		faculty2.setExternalId("AME80392");
		faculty2.setSchool(school);
		faculty2.setFacultyName("Faculty Of Mechanical Engineering");
		school.getSchoolFaculties().add(faculty2);
		
		Faculty faculty3 = new Faculty();
		faculty3.setExternalId("ACS80392");
		faculty3.setSchool(school);
		faculty3.setFacultyName("Faculty Of Software Engineering");
		school.getSchoolFaculties().add(faculty3);
		
		facultyRepository.save(faculty);
		
		
		School school = new School();
		school.setExternalId("A10293");
		school.setSchoolName("MAdonna University");
		school.setSchoolFaculties(new HashSet<>());
		
		Faculty faculty = new Faculty();
		faculty.setExternalId("AEE29308");
		faculty.setSchool(school);
		faculty.setFacultyName("Faculty Of Electrical Engineering");
		school.getSchoolFaculties().add(faculty);
		
		schoolRepository.save(school);
		
		
		schoolRepository.getSchool().forEach(x -> System.out.println(x.getInternalId() + " " + " " + x.getExternalId() + " " +x.getSchoolName()));
		schoolRepository.getFaculties().forEach(x -> System.out.println(x.getInternalId() + " " + " " + x.getExternalId() + " " +x.getFacultyName()));
	 */
	
	public Administrator addNewAdministrator() {
		User administrator = new Administrator();
		administrator.setFirstName("Chima");
		administrator.setLastName("Okonkon");
		administrator.setContact(new Contact()); // set by the ContactRepository. Takes in the current object as argument and return a contact object
		administrator.setGender(Gender.Male);
		administrator.setStartDate(new Date()); // use a function that takes in a date in string format and return a date object
		administrator.setEndDate(new Date());
		administrator.setDateOfBirth(new Date());
		return (Administrator) administrator;
	}
	
	public Student addNewStudent() {
		User student = new Student();
		student.setFirstName("Raphel");
		student.setLastName("Igwenna");
		student.setMiddleName("Green");
		student.setGender(Gender.Male);
		student.setContact(new Contact());
		student.getContact().setCity("Sweden");
		student.setDateOfBirth(new Date());
		student.setStartDate(new Date());
		student.setEndDate(new Date());
		return (Student) student;
	}
}
