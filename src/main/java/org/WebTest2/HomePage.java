package org.WebTest2;

import org.openqa.selenium.By;

public class HomePage extends Utils {
    LoadProp loadProp = new LoadProp();

    private By _username = By.id("txtUsername");
    private By _password = By.id("txtPassword");
    private String username = "Admin12";
    private String password = "Admin123";
    private By _login = By.id("btnLogin");
    private By _actual = By.id("spanMessage");
    private String error_message;

     // verify User is on Home page
    public void verifyUserIsOnHomePage()
    {
        assertURL("demo.orangehrmlive");
    }
     // User enter login details
    public void userEnterDetails(String username, String password){
        sendText(_username,username);
        sendText(_password,password);

    }
     // User click on login button
    public void userClickOnLoginButton(){
        clickOnElement(_login);
    }
      // verify user should not able to login and see error message
    public void verifyUserShouldNotBeAbleToLoginSuccessfullyAndSeeErrorMessage(String ErrorMessage){


        String expected = ErrorMessage;
        assertTextMessage("",expected,_actual);

    }


}
