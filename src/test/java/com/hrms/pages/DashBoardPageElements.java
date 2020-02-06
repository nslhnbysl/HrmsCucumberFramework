
package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;

public class DashBoardPageElements extends CommonMethods{

	@FindBy(linkText="Leave")
	public WebElement leaveLnk;
	
	@FindBy(linkText="Leave List")
	public WebElement leaveList;
	
	@FindBy(id="menu_pim_viewPimModule")
	public WebElement pimLink;
	
	@FindBy(linkText="Add Employee")
	public WebElement addEmployeeLink;
	
	@FindBy(linkText="Reports")
	public WebElement reportsLink;
	
//	@FindBy(id="'menu_core_viewDefinedPredefinedReports']")
//	public WebElement reportsLink;
	
	public DashBoardPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
		
	}
	
	public void navigateToLeaveList() {
		click(leaveLnk);
		click(leaveList);
	}
	
	
	public void navigateToAddEmployee() {
		click(pimLink);
		click(addEmployeeLink);
	}
	
	public void navigateToReport() throws InterruptedException {
		jsClick(pimLink);
		
		jsClick(reportsLink);
		Thread.sleep(3000);
		
	}
	
}
