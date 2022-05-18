import {Selector} from 'testcafe'

const developerName = Selector("#developer-name")
fixture("Assertions Fixture")
    .page("https://devexpress.github.io/testcafe/example/");
    
test("First Test",async t =>{
    
    const developerNameElement = 
    await developerName.with({visibilityCheck:true})();
    await t
        .expect(developerNameElement.value).eql('','input is empyu')
        .typeText(developerName,"TAU")
        .expect(developerName.value).eql("TAU",'input contains value')
        .click("#macos")
        .click("#submit-button");
});
