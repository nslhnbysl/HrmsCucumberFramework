package com.hrms.testbase;

import com.hrms.pages.AddEmployeeElements;
import com.hrms.pages.DashBoardPageElements;
import com.hrms.pages.LoginPageElements;
import com.hrms.pages.PersonalDetailsElements;

public class PageInitiliazer extends BaseClass {



	protected static LoginPageElements login;

	protected static DashBoardPageElements dashboard;

	protected static AddEmployeeElements addEmp;

	protected static PersonalDetailsElements pdetails;



	public static void initializeAllPage() {



		login = new LoginPageElements();

		dashboard = new DashBoardPageElements();

		addEmp = new AddEmployeeElements();

		pdetails = new PersonalDetailsElements();

	}

}