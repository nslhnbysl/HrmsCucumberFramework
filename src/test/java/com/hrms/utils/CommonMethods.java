package com.hrms.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.NoSuchFrameException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.hrms.testbase.BaseClass;

//for to see which methods do we have inside this class =ctrl+o
public class CommonMethods extends BaseClass {

	/**
	 * This method will accept the alert
	 * 
	 * @throws will throw NoAlertPresentException if alert is not present
	 */

	public static void acceptAlert() {

		try {
			Alert alert = driver.switchTo().alert();
			alert.accept();
		} catch (NoAlertPresentException e) {
			System.out.println("Alert is not present");
		}
	}

	/**
	 * This method will dismiss the alert
	 * 
	 * @throws will throw NoAlertPresentException if alert is not present
	 */
	public static void dismissAlert() {
		try {
			Alert alert = driver.switchTo().alert();
			alert.dismiss();
		} catch (NoAlertPresentException e) {
			System.out.println("Alert is not present");
		}
	}

	/**
	 * This method will get a text from the alert
	 * 
	 * @return text of the alert
	 * @throws will throwNoAlertPresentException IF ALERT IS NOT present
	 */

	public static String getTextAlert() { // if we executing try we need 2 return line
		String text = null;
		try {
			Alert alert = driver.switchTo().alert();
			text = alert.getText();
			return text;
		} catch (NoAlertPresentException e) {
			System.out.println("Alert is not present");
		}
		return text;

	}

	/**
	 * This method will switch to the frame
	 * 
	 * @param nameOrId
	 */

	public static void switchToFrame(String nameOrId) {
		try {
			driver.switchTo().frame(nameOrId);
		} catch (NoSuchFrameException e) {
			System.out.println("Frame is not present");
		}
	}

	/**
	 * This method will switch to the frame
	 * 
	 * @param element
	 */
	public static void switchToFrame(WebElement element) {
		try {
			driver.switchTo().frame(element);
		} catch (NoSuchFrameException e) {
			System.out.println("Frame is not present");
		}
	}

	/**
	 * This method will switch to the frame
	 * 
	 * @param index
	 */

	public static void switchToFrame(int index) {
		try {
			driver.switchTo().frame(index);
		} catch (NoSuchFrameException e) {
			System.out.println("Frame is not present");
		}
	}

	/**
	 * This method will click on the element using JsExecutor
	 * 
	 * @param element
	 */

	public static void jsClick(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", element);
	}

	/**
	 * this method will scroll until specifies element
	 * 
	 * @param element
	 */
	public static void scrollIntoElement(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true);", element);
	}

	/**
	 * This method scroll page up
	 * 
	 * @param pixel
	 */
	public static void scrollDown(int pixel) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0," + pixel + ")");
	}

	/**
	 * This method scroll page down
	 * 
	 * @param pixel
	 */
	public static void scrollUp(int pixel) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,-" + pixel + ")");
	}

	/**
	 * This method will take a screenshot
	 * 
	 * @param fileName
	 */

	public static byte[] takeScreenshot(String fileName) {
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy_MMdd_HHmmss");
		String timeStamp = sdf.format(date.getTime());

		TakesScreenshot ts = (TakesScreenshot) driver;
		byte[] picture = ts.getScreenshotAs(OutputType.BYTES);

		File file = ts.getScreenshotAs(OutputType.FILE);
		String scrshotFile = Constants.SCREENSHOTS_FILEPATH + fileName + ".png";
		try {
			FileUtils.copyFile(file, new File(scrshotFile));
		} catch (IOException e) {
			System.out.println("Cannot take a screenshot");
		}
		return picture;
	}

	/**
	 * This method will enter text
	 * 
	 * @param element
	 * @param value
	 */

	public static void sendText(WebElement element, String value) {
		element.clear();
		element.sendKeys(value);
	}

	/**
	 * This method will return wait object
	 * 
	 * @return
	 */

	public static WebDriverWait getWaitObject() {
		WebDriverWait wait = new WebDriverWait(driver, Constants.EXPLICIT_LOAD_TIME);
		return wait;
	}

	/**
	 * This method will wait until element becomes clickable
	 * 
	 * @param element
	 */
	public static void waitForClickability(WebElement element) {
		getWaitObject().until(ExpectedConditions.elementToBeClickable(element));
	}

	/**
	 * This method will wait until element become visible
	 * 
	 * @param element
	 */
	public static void waitForVisibility(WebElement element) {
		getWaitObject().until(ExpectedConditions.visibilityOf(element));
	}

	/**
	 * This method will wait until element become invisible
	 * 
	 * @param element
	 */
	public static void waitForInvisibility(WebElement element) {
		getWaitObject().until(ExpectedConditions.invisibilityOf(element));
	}

	/**
	 * This method will click on the element
	 * 
	 * @param element
	 */
	public static void click(WebElement element) {
		waitForClickability(element);
		element.click();
	}

	/**
	 * This method will select value from DD
	 * 
	 * @param element
	 * @param visibleText
	 */
	public static void selectDdValue(WebElement element, String visibleText) {
		Select select = new Select(element);
		List<WebElement> options = select.getOptions();
		boolean isFound = false;
		for (WebElement option : options) {
			if (option.getText().equals(visibleText)) {
				select.selectByVisibleText(visibleText);
				isFound = true;
				break;
			}
		}
		if (!isFound) {
			System.out.println("Value " + visibleText + " was not found in the dropdown");
		}
	}

	/**
	 * This method select value from dd
	 *
	 * @param element
	 * @param index
	 */
	public static void selectDdValue(WebElement element, int index) {
		Select select = new Select(element);
		List<WebElement> options = select.getOptions();
		boolean isFound = false;
		if (options.size() > index) {
			select.selectByIndex(index);
			isFound = true;
		}
		if (!isFound) {
			System.out.println("Value with index " + index + " was not selected");
		}

	}

	/**
	 * 
	 * This method will click on the radio based on the text
	 * 
	 * 
	 * 
	 * @param elements
	 * 
	 * @param radioText
	 * 
	 */

	public static void clickRadio(List<WebElement> elements, String radioText) {

		for (WebElement el : elements) {

			if (el.getText().equals(radioText)) {

				el.click();

				break;

			}
		}
	}
	
	static String jsonFile;

    public static String readJson(String fileName) {

   	 try {
   		 jsonFile = new String(Files.readAllBytes(Paths.get(fileName)));

   	 } catch(IOException e) {
	 e.printStackTrace();

   	 }

   	 return jsonFile;

   	 

    }
}
