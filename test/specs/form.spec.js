const HomePage = require('../pages/home.page');
const FormPage = require('../pages/form.page');

describe('Form Page Tests', async () => {

    it('The form screen should be visible', async () => {
        await HomePage.clickFormButton();
        await expect((await FormPage.firstNameSelector)).toBeDisplayed();
        await FormPage.goBackToHomeScreen();
    });

    it(`The Entered Text is displayed on the label`, async () => {
        let firstName = "Automation";
        let lastName = "Tester";
        let fullName = firstName + " " + lastName;
        let emailAddress = "automationtester@learner.com";
        await HomePage.clickFormButton();
        await FormPage.completeForm(firstName, lastName, emailAddress);
        await expect((await FormPage.enteredNameLabelSelector.getText())).toContain(fullName);
        await expect((await FormPage.enteredEmailLabelSelector.getText())).toContain(emailAddress);
        await FormPage.goBackToHomeScreen();
    });

})