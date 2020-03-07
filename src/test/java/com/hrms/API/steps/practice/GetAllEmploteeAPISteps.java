package com.hrms.API.steps.practice;

import com.hrms.utils.APIConstants;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.*;

public class GetAllEmploteeAPISteps {
	
	private static Response response;
	private static RequestSpecification request;
	
	@Given("user calls getAllEmployee API")
	public void user_calls_getAllEmployee_API() {
	   request= given().header("Content-Type","application/json")
	   .header("Authorization",SyntaxAPIAuthenticationSteps.Token);
		
	}

	@When("User retrieves response for getAllEmployee API")
	public void user_retrieves_response_for_getAllEmployee_API() {
	    response=request.when().get(APIConstants.GET_ALL_EMPLOYEES_URI);
	}

	@Then("status code is {int} for getAllEmployee API")
	public void status_code_is_for_getAllEmployee_API(Integer int1) {
		response.then().assertThat().statusCode(int1);
	}

	


}
