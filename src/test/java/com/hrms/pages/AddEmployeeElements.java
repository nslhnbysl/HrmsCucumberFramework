
package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;

public class AddEmployeeElements extends CommonMethods {

	@FindBy(id = "firstName")

	public WebElement firstName;

	@FindBy(id = "middleName")

	public WebElement middleName;

	@FindBy(id = "lastName")

	public WebElement lastName;

	@FindBy(id = "chkLogin")

	public WebElement createLoginDetails;

	@FindBy(id = "user_name")

	public WebElement username;

	@FindBy(id = "user_password")

	public WebElement userPassword;

	@FindBy(id = "re_password")

	public WebElement confirmUserPassword;

	@FindBy(id = "btnSave")

	public WebElement saveBtn;

	@FindBy(id = "employeeId")

	public WebElement empId;

	@FindBy(xpath = "//span[@for='firstName']")

	public WebElement nameRequiredMessage;

	@FindBy(xpath = "//span[@for='lastName']")

	public WebElement lastNameRequiredMessage;

	public AddEmployeeElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}

	public void addNameLastName(String firstName, String lastName) {
		sendText(this.firstName, firstName);
		sendText(this.lastName, lastName);
		jsClick(saveBtn);
	}

}
