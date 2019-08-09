package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.CalendarPage;
import pages.ListPage;
import pages.MeetingsNewPage;
import utilities.Driver;

public class CreatingEvent {

    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
    CalendarPage cp = new CalendarPage();
    ListPage lp = new ListPage();
    MeetingsNewPage mnp = new MeetingsNewPage();

    @When("User opens list option")
    public void user_opens_list_option() {

        wait.until(ExpectedConditions.elementToBeClickable(cp.listLink));
        cp.listLink.click();
    }

    @When("User creates event with all information in it")
    public void user_creates_event_with_all_information_in_it() throws InterruptedException {
        lp.createButton.click();
        mnp.meetingName.sendKeys("Unix Demo");
        mnp.startDate.click();
       // wait.until(ExpectedConditions.elementToBeClickable(mnp.startDate1));
        Thread.sleep(3000);
        mnp.startDate1.click();
        mnp.startDate1.sendKeys("11/30/2019 10:00:00");
        mnp.duration.clear();
        mnp.duration.sendKeys("01:00");
        mnp.typeOfMeeting.click();
        mnp.meetingType.click();
       // wait.until(ExpectedConditions.elementToBeClickable(mnp.waitingChoice));
        Thread.sleep(3000);
        mnp.waitingChoice.click();
        mnp.minOption.click();
        mnp.location.click();
        mnp.location.sendKeys("Cybertek");
        mnp.saveButton.click();
    }

    @Then("Event is created")
    public void event_is_created() {
        String expectedText = mnp.text.getText();
        Assert.assertTrue(expectedText.contains("Event created"));
    }

}
