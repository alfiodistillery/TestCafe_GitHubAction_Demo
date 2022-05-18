fixture("Hooks Fixture")
    .page("https://devexpress.github.io/testcafe/example/")
    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0)
    });

test("First Test",async t =>{
    await t
        .typeText("#developer-name","First TAU")
        .click("#macos")
        .click("#submit-button");
});

test("Second Test",async t =>{
    await t
        .typeText("#developer-name","Second TAU")
        .click("#macos")
        .click("#submit-button");
});
