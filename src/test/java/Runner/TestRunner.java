package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/Features/UserRegistration.feature"
		,glue= {"StepsDefinition"},
				 //plugin = { "pretty", "json:target/cucumber.json" },
				 plugin = { "pretty", "html:target/Destination" },				
				// tags = {"@Smoke,@sanity"},////or
				 //tags = {"@Smoke","@sanity"},////and
				 //tags = {"@Smoke","~@Sanity"},////And
				 //tags = {"~@Smoke","~@Sanity"},////And
				 monochrome = true)
public class TestRunner {

}
