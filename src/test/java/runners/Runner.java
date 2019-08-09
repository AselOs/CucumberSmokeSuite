package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = "html:target/cucumber",
        features = "src/test/resources",
        glue = "steps",
       //tags = "@CreatingEvent",
        tags = "@MonthButtonVerification, @CreatingEvent,"+
                " @EditingEvent, @DeletingEvent, @SearchingByFilters, " +
               "@SearchingByGroups, @AttendeesModification, @SendingSMS",
        dryRun = false
)

public class Runner {

}