import {ClientFunction } from 'testcafe'

const getPageURL = ClientFunction(() => window.location.href);

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");
    
test.only("First Test",async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});

test("Second Test",async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button")
        .expect(getPageURL()).contains('thank-you');
});
