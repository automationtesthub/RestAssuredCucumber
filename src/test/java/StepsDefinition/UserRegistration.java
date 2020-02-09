package StepsDefinition;

import org.json.simple.JSONObject;

import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class UserRegistration {
	public RequestSpecification request;
	public Response response;
	
	@Given("^uri \"([^\"]*)\" and firstname \"([^\"]*)\",LastName \"([^\"]*)\",UserName \"([^\"]*)\", Password \"([^\"]*)\", Email \"([^\"]*)\"$")
	public void uri_and_firstname_LastName_UserName_Password_Email_SatausCode_Node_NodeValue(String uri, String fname, String lname, String userid, String pwd, String email) throws Throwable {
		RestAssured.baseURI ="http://restapi.demoqa.com/customer";
		request = RestAssured.given();		
		JSONObject requestParams = new JSONObject();
		requestParams.put("FirstName", fname); // Cast
		requestParams.put("LastName", lname);
		requestParams.put("UserName", userid);
		requestParams.put("Password", pwd);
		requestParams.put("Email",  email);
		request.body(requestParams.toJSONString());
		System.out.println(requestParams.toJSONString());
	}

	@When("^method post$")
	public void method_post() throws Throwable {
		response = request.post("/register");
        System.out.println(response.getBody().asString());
	}

	@Then("^reponse status code should be \"([^\"]*)\"$")
	public void reponse_status_code_should_be(String code) throws Throwable {
		int statusCode = response.getStatusCode();
		int expCode = Integer.parseInt(code);
		if(statusCode==expCode)
		{
			System.out.println("Passed and code was"+statusCode);
		}
		else
		{
			System.out.println("Failed and code was"+statusCode);
		}
	   
	}

	@And("^Node \"([^\"]*)\" is equal to \"([^\"]*)\"$")
	public void node_is_equal_to(String node, String nodevalue) throws Throwable {
		
		String successCode = response.jsonPath().get(node);
		if(successCode.equals(nodevalue))
		{
			System.out.println("Passed and Node value was"+nodevalue);
		}
		else
		{
			System.out.println("Failed and node value was"+nodevalue);
		}
	}


}
