const Page = require('./page');

class FormPage extends Page {
    get firstNameSelector () { return $(`~first-name-field-acc-id`); };
    get lastNameSelector () { return $(`~last-name-field-acc-id`); };
    get emailSelector () { return $(`~enter-email-field-acc-id`); };
    get submitButtonSelector () { return $(`~form-submit-btn-acc-id`); };
    get enteredNameLabelSelector () { return $(`~entered-name-label-acc-id`); };
    get enteredEmailLabelSelector () { return $(`~entered-email-label-acc-id`); };

    async completeForm(firstName, lastName, emailAddress)  {
        await this.firstNameSelector.waitForDisplayed({ timeout: 10000 });
        await this.firstNameSelector.setValue(firstName);

        await this.lastNameSelector.waitForDisplayed({ timeout: 10000 });
        await this.lastNameSelector.setValue(lastName);

        await this.emailSelector.waitForDisplayed({ timeout: 10000 });
        await this.emailSelector.setValue(emailAddress + "\n");

        await this.submitButtonSelector.waitForDisplayed({ timeout: 10000 });
        await this.submitButtonSelector.click();
    }
}

module.exports = new FormPage();