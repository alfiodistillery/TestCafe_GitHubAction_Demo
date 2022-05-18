fixture("Set page timeout Fixture")
    .page("http://devexpress.github.io/testcafe/");
test("Set page timeout Test", async t=>{
    await t
        .setPageLoadTimeout(0)
        .navigateTo('http://deveexpress.github.io/testcafe/');
});