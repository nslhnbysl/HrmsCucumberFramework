package com.hrms.practice;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.junit.Test;

public class JdbcDemo {
	
	String dbUsername="syntax_hrm";
	String dbPassword="syntaxhrm123";
	//jdbc:type driver://host:port/name of database
	
	String dburl="jdbc:mysql://18.232.148.34:3306/syntaxhrm_mysql";

	@Test
	
	public void getDataFromDataBase() throws SQLException {
		
	Connection connection=	DriverManager.getConnection(dburl, dbUsername, dbPassword);  //-->1
	System.out.println("connection is created");
	
	Statement st=connection.createStatement();                                           //-->2
	
	ResultSet rset=st.executeQuery("select * from ohrm_nationality");                    //-->3
	
	rset.next();
	
	String firstRowData=rset.getString("name");
	System.out.println(firstRowData);
	
	rset.next();
	String secondRowData=rset.getObject("name").toString();
	System.out.println(secondRowData);
	
	String data;
	
	while(rset.next()) {
		data=rset.getObject("name").toString();
		System.out.println(data);
	}
	 
	rset.close();
	st.close();
	connection.close();
	
	
	}
}
