package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class CheckoutPage {
	
	
	public CheckoutPage() {
		
		PageFactory.initElements(Base.driver,this);
	}
	
	@FindBy(id="button-payment-address")
	public static WebElement continueButtonofBillingDetailsSection;

	@FindBy(id="button-shipping-address")
	public static WebElement continueButtonofDeliveryDetailsSection;
	
	@FindBy(id="button-shipping-method")
	public static WebElement continueButtonofDeliverymethodSection;
	
	@FindBy(name="agree")
	public static WebElement termAndconditionCheckbox;
	
	@FindBy(id="button-payment-method")
	public static WebElement continueButtonofPaymentmethodSection;
	
	@FindBy(xpath="//*[@id='button-confirm']")
	public static WebElement confirmOrder;
	
	
	public static void placeAnOrder() {
		
		Elements.click(CheckoutPage.continueButtonofBillingDetailsSection);
		Elements.click(CheckoutPage.continueButtonofDeliveryDetailsSection);
		Elements.click(CheckoutPage.continueButtonofDeliverymethodSection);
	    Elements.click(CheckoutPage.termAndconditionCheckbox);
	    Elements.click(CheckoutPage.continueButtonofPaymentmethodSection);
	    Elements.click(CheckoutPage.confirmOrder);
	}
}
