$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AtendeesModification.feature");
formatter.feature({
  "name": "Attendees modification verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AttendeesModification"
    }
  ]
});
formatter.scenario({
  "name": "Attendees modification verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AttendeesModification"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on checkbox at attendee list",
  "keyword": "When "
});
formatter.match({
  "location": "AttendeesModification.user_clicks_on_checkbox_at_attendee_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on dropdown menu",
  "keyword": "Then "
});
formatter.match({
  "location": "AttendeesModification.user_clicks_on_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selects first element",
  "keyword": "And "
});
formatter.match({
  "location": "AttendeesModification.selects_first_element()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User deletes second element from Attendees",
  "keyword": "Then "
});
formatter.match({
  "location": "AttendeesModification.user_deletes_second_element_from_Attendees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "One attendee should disappear from the list",
  "keyword": "Then "
});
formatter.match({
  "location": "AttendeesModification.one_attendee_should_disappear_from_the_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/CreatingEvent.feature");
formatter.feature({
  "name": "Creating an event in the calendar",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreatingEvent"
    }
  ]
});
formatter.scenario({
  "name": "Event creation verification.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreatingEvent"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SendingSMS.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens list option",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingEvent.user_opens_list_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User creates event with all information in it",
  "keyword": "And "
});
formatter.match({
  "location": "CreatingEvent.user_creates_event_with_all_information_in_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Event is created",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingEvent.event_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/DeletingEvent.feature");
formatter.feature({
  "name": "Deleting an event in the calendar",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeletingEvent"
    }
  ]
});
formatter.scenario({
  "name": "Event deletion verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeletingEvent"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SendingSMS.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User creates an event for 31 st of July",
  "keyword": "When "
});
formatter.match({
  "location": "DeletingEvent.user_creates_an_event_for_st_of_July(Integer)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ctd class\u003d\"fc-widget-content\"\u003e\u003c/td\u003e is not clickable at point (617, 318). Other element would receive the click: \u003cdiv class\u003d\"fc-bg\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027asels-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14fb:a74:5bd6:9b7f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/d7/1lw8rkk50jn...}, goog:chromeOptions: {debuggerAddress: localhost:61203}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 77296e071dfb27b878c94f371c9aa32c\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat steps.DeletingEvent.user_creates_an_event_for_st_of_July(DeletingEvent.java:19)\n\tat ✽.User creates an event for 31 st of July(src/test/resources/features/DeletingEvent.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "DeletingEvent.user_clicks_on_delete_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Event is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingEvent.event_is_deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/EditingEvent.feature");
formatter.feature({
  "name": "Editing an event in the calendar",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EditingEvent"
    }
  ]
});
formatter.scenario({
  "name": "Event edition verification.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EditingEvent"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SendingSMS.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User creates an event for tomorrow",
  "keyword": "When "
});
formatter.match({
  "location": "EditingEvent.user_creates_an_event_for_tomorrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edits this event with Start date later than End date",
  "keyword": "And "
});
formatter.match({
  "location": "EditingEvent.user_edits_this_event_with_Start_date_later_than_End_date()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@data-day\u003d\u002708/9/2019\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027asels-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14fb:a74:5bd6:9b7f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/d7/1lw8rkk50jn...}, goog:chromeOptions: {debuggerAddress: localhost:61226}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fe2c9f9fcbfc5cf68752ce829bae20d1\n*** Element info: {Using\u003dxpath, value\u003d//td[@data-day\u003d\u002708/9/2019\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat steps.EditingEvent.user_edits_this_event_with_Start_date_later_than_End_date(EditingEvent.java:34)\n\tat ✽.User edits this event with Start date later than End date(src/test/resources/features/EditingEvent.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "System is displaying error message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditingEvent.system_is_displaying_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "We delete the event",
  "keyword": "And "
});
formatter.match({
  "location": "EditingEvent.we_delete_the_event()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/MonthButtonVerification.feature");
formatter.feature({
  "name": "Month button verification in the homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MonthButtonVerification"
    }
  ]
});
formatter.scenario({
  "name": "Month Button Verification.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MonthButtonVerification"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SendingSMS.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press on month button",
  "keyword": "When "
});
formatter.match({
  "location": "MonthButtonVerification.user_press_on_month_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see month events",
  "keyword": "Then "
});
formatter.match({
  "location": "MonthButtonVerification.user_should_be_able_to_see_month_events()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/SearchingByFilters.feature");
formatter.feature({
  "name": "Searching by Filters",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchingByFilters"
    }
  ]
});
formatter.scenario({
  "name": "Searching by Filters Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchingByFilters"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SendingSMS.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on selected date",
  "keyword": "When "
});
formatter.match({
  "location": "SearchingByFilters.user_is_on_selected_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filtering the events by My events",
  "keyword": "And "
});
formatter.match({
  "location": "SearchingByFilters.user_filtering_the_events_by_My_events()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see his username in field with attendees for this event",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchingByFilters.user_should_see_his_username_in_field_with_attendees_for_this_event()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[@class \u003d\u0027fc-time-grid-event fc-v-event fc-event fc-start fc-end fc-draggable fc-resizable o_calendar_color_6 fc-short\u0027])[1]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027asels-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14fb:a74:5bd6:9b7f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/d7/1lw8rkk50jn...}, goog:chromeOptions: {debuggerAddress: localhost:61288}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ba32d444b26c6cedc182e40bab104e6c\n*** Element info: {Using\u003dxpath, value\u003d(//a[@class \u003d\u0027fc-time-grid-event fc-v-event fc-event fc-start fc-end fc-draggable fc-resizable o_calendar_color_6 fc-short\u0027])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat steps.SearchingByFilters.user_should_see_his_username_in_field_with_attendees_for_this_event(SearchingByFilters.java:29)\n\tat ✽.User should see his username in field with attendees for this event(src/test/resources/features/SearchingByFilters.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/SearchingByGroups.feature");
formatter.feature({
  "name": "Searching by Groups",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchingByGroups"
    }
  ]
});
formatter.scenario({
  "name": "Searching by Groups Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchingByGroups"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SendingSMS.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Group By button",
  "keyword": "When "
});
formatter.match({
  "location": "SearchingByGroups.user_clicks_on_Group_By_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Responsible option",
  "keyword": "And "
});
formatter.match({
  "location": "SearchingByGroups.user_clicks_on_Responsible_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Add custom Group option",
  "keyword": "And "
});
formatter.match({
  "location": "SearchingByGroups.user_selects_Add_custom_Group_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees By Day in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchingByGroups.user_sees_By_Day_in_the_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/SendingSMS.feature");
formatter.feature({
  "name": "Sending SMS to Attendees about event",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SendingSMS"
    }
  ]
});
formatter.scenario({
  "name": "Sending SMS to attendees verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SendingSMS"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SendingSMS.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out Recipients and Message fields",
  "keyword": "When "
});
formatter.match({
  "location": "SendingSMS.user_fills_out_Recipients_and_Message_fields()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[text()\u003d\u0027Birthday party!!!\u0027]/../td[1]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027asels-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14fb:a74:5bd6:9b7f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/d7/1lw8rkk50jn...}, goog:chromeOptions: {debuggerAddress: localhost:61344}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b9f3cc50a1ff9891864826a628d85749\n*** Element info: {Using\u003dxpath, value\u003d//td[text()\u003d\u0027Birthday party!!!\u0027]/../td[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat steps.SendingSMS.user_fills_out_Recipients_and_Message_fields(SendingSMS.java:23)\n\tat ✽.User fills out Recipients and Message fields(src/test/resources/features/SendingSMS.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on send button",
  "keyword": "And "
});
formatter.match({
  "location": "SendingSMS.user_click_on_send_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see successful confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "SendingSMS.user_should_see_successful_confirmation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
});