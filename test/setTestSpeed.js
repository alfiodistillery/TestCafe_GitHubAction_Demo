fixture("Speed Test Fixture")
    .page("https://devexpress.github.io/testcafe/example/");
    
test("Set Test Speed Test",async t =>{
    await t
        .setTestSpeed(0.01)
        .typeText("#developer-name","Peter")
        .typeText("#developer-name"," Parker")
});
