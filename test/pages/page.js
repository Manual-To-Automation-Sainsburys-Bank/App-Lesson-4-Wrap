module.exports = class Page {
    get goBackButtonSelector () { return $(`~go-back-btn-acc-id`); };

    async goBackToHomeScreen() {
        await this.goBackButtonSelector.waitForDisplayed({ timeout: 10000 });
        await this.goBackButtonSelector.click();
    }
};