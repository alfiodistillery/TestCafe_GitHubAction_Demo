import { Selector } from "testcafe";

const fileUpload = Selector('input#file-upload');
const uploadfileButton = Selector('input#file-submit.button');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

test("File Upload test", async t =>{
    await t
        .setTestSpeed(0.01)
        .setFilesToUpload(fileUpload,'../upload/image1.jpg')
        .takeElementScreenshot(fileUpload)
        .debug()
        .click(uploadfileButton);
});