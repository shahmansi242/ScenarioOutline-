package WebTest2;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.WebTest2.HomePage;

public class MyStepdefs {
    HomePage homePage = new HomePage();

      // user is on orange hrm home page
    @Given("user is on home page")
    public void userIsOnHomePage() {
        homePage.verifyUserIsOnHomePage();

    }
      // user enter invalid user name and password
    @When("user enter invalid {string} and {string}")
    public void userEnterInvalidAnd(String username, String password)
    {
        homePage.userEnterDetails(username,password);
    }
      // user click on login button
    @And("user click on login")
    public void userClickOnLogin() {
        homePage.userClickOnLoginButton();
    }
      // user is not able to login and see error message
    @Then("user should not be able to login successfully and user should see {string}")
    public void userShouldNotBeAbleToLoginSuccessfullyAndUserShouldSee(String Error_message) {
        homePage.verifyUserShouldNotBeAbleToLoginSuccessfullyAndSeeErrorMessage(Error_message );
    }


}
