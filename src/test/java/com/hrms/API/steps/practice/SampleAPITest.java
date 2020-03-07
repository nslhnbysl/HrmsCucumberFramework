package com.hrms.API.steps.practice;

import org.junit.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;


public class SampleAPITest {
	
	@Test
	public void getAllJobTitles() {
		Response response =RestAssured.given().contentType("application/json")
				.header("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODI0NzQxODcsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTU4MjU4OTM4NywidXNlcklkIjoiMjcxIn0.GLtXAWYHK6rqLgMZq7t4-v7tGIT0pRwG5x9rF_LRgfc")
				.when().get("http://18.232.148.34/syntaxapi/api/jobTitle.php");
		
			response.prettyPrint();
			int acutalResponse=response.getStatusCode();
			System.out.println(acutalResponse);
	}
	@Test
	public void getOneEmployee() {
	Response response=	RestAssured.given().param("employee_id", "3394").contentType("application/json").header("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODI0NzQxODcsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTU4MjU4OTM4NywidXNlcklkIjoiMjcxIn0.GLtXAWYHK6rqLgMZq7t4-v7tGIT0pRwG5x9rF_LRgfc")
	.when().get("http://18.232.148.34/syntaxapi/api/getOneEmployee.php");
	response.prettyPrint();

	}
	
	@Test
	
	public void getAllEmployees() {
		Response response=RestAssured.given().contentType("application/json")
		.header("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODI5NTA1ODYsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTU4MzA2NTc4NiwidXNlcklkIjoiMjcxIn0.VG0hc1rvKSzcZiBwbTlLmFLn8TdOBBARvKdOfDab00w") 
		.when().get("18.232.148.34/syntaxapi/api/getAllEmployees.php");
	}

}
