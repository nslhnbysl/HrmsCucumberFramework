package com.hrms.steps;

import org.junit.Assert;

import com.hrms.pages.DashBoardPageElements;
import com.hrms.pages.ReportsPageElements;
import com.hrms.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ReportSteps extends CommonMethods{
ReportsPageElements report ;
	
	@Given("I navigated to the Reports Page")
	public void i_navigated_to_the_Reports_Page() throws InterruptedException {
	   DashBoardPageElements dash=new DashBoardPageElements();
	   dash.navigateToReport();
	}

	@When("I enter invalid report")
	public void i_enter_invalid_report() {
		report=new ReportsPageElements();
		sendText(report.searchBox, "abb");
	
	}

	@When("I click search button")
	public void i_click_search_button() {
		report=new ReportsPageElements();
		jsClick(report.searchBtn);
	}

	@Then("I see no record found message")
	public void i_see_no_record_found_message() {
		report=new ReportsPageElements();
	   boolean message=report.noRecordsFoundMessage.isDisplayed();
	   Assert.assertTrue("No Record Found Message is not displayed", message);
	}

	@When("I enter valid report")
	public void i_enter_valid_report() {
		report=new ReportsPageElements();
	   sendText(report.searchBox, "PIM Sample Report");
	   jsClick(report.searchBtn);
	}

	@Then("I see the search report is displayed")
	public void i_see_the_search_report_is_displayed() {
		report=new ReportsPageElements();
	   boolean message=report.PimSampleMessage.isDisplayed();
	   Assert.assertTrue("Search Report is not displayed", message);
	}

}
