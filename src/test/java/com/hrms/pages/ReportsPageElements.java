package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;

public class ReportsPageElements {

	@FindBy(id="search_search")
	public WebElement searchBox;
	
	@FindBy(className="searchBtn")
	public WebElement searchBtn;
	
	//@FindBy(id="btnAdd")
	//public WebElement btnAdd;
	
	@FindBy(xpath="//td[text()='PIM Sample Report']")
	public WebElement PimSampleMessage;
	
	@FindBy(xpath="//td[text()='No Records Found']")
	public WebElement noRecordsFoundMessage;
	
	public ReportsPageElements(){
		PageFactory.initElements(BaseClass.driver, this);
	}
	
}
