# Mission 1

* Developed the entire mock up design of email archive system with two views - Desktop and mobile. 
* The entire project is built using React Framework.
* There is 1 open source libraries used. 
    * date-range-picker - Capability to select range of dates.
* There are a total of 11 components built and 1 utility file.

**To view the application in mobile view use the responsive tab in web inspector or resize the window**

# HomePage
* This is the first component (Functional) which acts as a container for rest of the components. 
* This is where we determine whether the device is Desktop or mobile using window.innerWidth. This information is passed as a boolean value as props to other components along with the width of the screen.

# ScreenView
* Second component (class) in the project which performs functions as storing date range, retreive data based on the stored date range and sorting emails based on either date or sender email id depending upon the type of device. 
* All the information generated/retreived at this component is sent to subsequent components to render them. 

# SearchSection
* This is one of the child components (functional) of Screenview. 
* This is here that user can select date and trigger search for the selected date range. 
* Library date-range-picker is used. 
* The onChange function of the library returns the selected dates. Then a call back function is called to send these updated dates back to ScreenView component where these dates are set. 
* After which if search button is clicked then another call back is made to Screenview where getData utility function is called with new parameters.

# MailSection
* This component (class) is responsible of displaying the list of emails. 
* If data dosen't exist in the data props then and empty block with the logo is diplayed.
* if data exists then we check for props isMobile which determines whether it is a mobile or desktop device and based on that information respective compoents are rendered.
* Data for header line item is setup in the util file and can be generated using getHeaderlineitem function. The purpose of generating it as a cofiguration is so that it can be easily modified if required. 

# Desktop/Mobile

* Desktop and mobile components perform similar function 

# DesktopLineitemBlock / MobileLineItemBlock
* These components except the list of line items, type of line item, a call back function to set new order and current order.
* Depending on the type of line item it renders either header component or the row component.
* showMailBody (boolean) is a state variable that determies whether the body of the line is to be displayed or not.

# DesktopHeader / MobileHeader
* Accepts props such as line item, call back for setting new order and current order.
* Renders header level line item using designated css.
* Call back for setting new order.

# DesktopBody / MobileBody

* Accepts props as line item, call back for opening mail body and screen width.
* Renders row level line item using designated css.
* Call back for displaying mail body.

# Utility file 
* The purpose of this file is to provide utility functions to the components. Functions used to generate data, sort data, structure data in correct format and is this is also where we have stored our dummy data. These functions can be imported and used from anywhere in the application.

# Mission 2

# MailBody
* This is the component responsible for displaying the content of any mail. Upon clicking any line item a state variable openMail is set true through a call back which enables rendering of the content block. While the content is visible if the same line item is clicked again the property is set to false and the content block disappears.
* Every line item has independent content blocks so that multiple emails can be viewed at the same time.