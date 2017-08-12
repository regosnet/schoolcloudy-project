package com.schoolcloudy.web.mvc.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.schoolcloudy.model.entities.Administrator;


@Controller
@RequestMapping("/school/administrators")
public class AdministratorRestController {

	 @CrossOrigin(origins = "http://localhost:4200")
		@RequestMapping(value="/administrator", method = RequestMethod.GET, produces = "application/json")
		public ResponseEntity<List<Administrator>> student(Model model){
			List<Administrator> st = new ArrayList<>();
			if(st.isEmpty()){
				return new ResponseEntity<List<Administrator>>(HttpStatus.NO_CONTENT);
			} 
			return new ResponseEntity<List<Administrator>>(st, HttpStatus.OK);
		}
		 

	 

	// Add Administrator
			@CrossOrigin(origins = "http://localhost:4200")
			@RequestMapping(value="/roll-on/new/administrator", method = RequestMethod.POST)
			public ResponseEntity<List<Administrator>> addAdministrator(@RequestBody Administrator st, UriComponentsBuilder builder) {
				System.out.println(st);
				HttpHeaders headers = new HttpHeaders();
				headers.setLocation(builder.path("/st/{internalId}").buildAndExpand(st.getInternalId()).toUri());
				return new ResponseEntity<List<Administrator>>(headers, HttpStatus.CREATED);
			}
			
}
