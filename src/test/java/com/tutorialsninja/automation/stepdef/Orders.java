package com.tutorialsninja.automation.stepdef;


import org.junit.Assert;

import com.tutorialsninja.automation.framework.Browser;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.framework.Waits;
import com.tutorialsninja.automation.pages.CheckoutPage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.LoginPage;
import com.tutorialsninja.automation.pages.OrderSuccessPage;
import com.tutorialsninja.automation.pages.SearchResultsPage;
import com.tutorialsninja.automation.pages.ShopingCartPage;

import cucumber.api.java.en.*;


public class Orders {
	
	HeadersSection headersSection = new HeadersSection();
	LoginPage loginPage = new LoginPage();
	ShopingCartPage shopingCartPage = new ShopingCartPage();
	SearchResultsPage searchResultsPage = new SearchResultsPage();
	CheckoutPage checkoutPage = new CheckoutPage();
	OrderSuccessPage orderSuccessPage = new OrderSuccessPage();
	
	@Given("^I login to the application$")
	public void i_login_to_the_application() {
		
		Browser.openApplicationURL();
		HeadersSection.navigateToLoginPage();
		LoginPage.doLogin();
	    
	}

	@When("^I add a product to the bag and checkout$")
	public void i_add_a_product_to_the_bag_and_checkout() {
	    
		HeadersSection.searchProduct();
		SearchResultsPage.addFirstProductInTheSearchResultToCart();
		Elements.click(SearchResultsPage.addCart);
		Elements.click(HeadersSection.viewShopingCartOption);
	    Elements.click(ShopingCartPage.checkoutButton);
	}

	@When("^I place an order$")
	public void i_place_an_order(){
		
		CheckoutPage.placeAnOrder();
	    
	}
	
	@Then("^I should see that the order is placed successfuly$")
	public void i_should_see_that_the_order_is_placed_successfuly(){
		//Assert.assertTrue(Elements.VerifyTextEquals(OrderSuccessPage.successBreadcrumb,"Your order has been placed!"));
		//Waits.waitUntilElementLocated(10,OrderSuccessPage.successBreadcrumb);
		Assert.assertTrue(Elements.isDisplayed(OrderSuccessPage.successBreadcrumb));
	}

	
}
