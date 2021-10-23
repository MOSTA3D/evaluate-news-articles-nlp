import { updateUi } from "../src/client/js/ui";

describe("Testing updating ui function", ()=>{
    test("like i said above", ()=>{
        const data = {
            key: "some value"
        }
        const element = document.createElement("div");
        updateUi(data, element);
        expect(!element.children.length).toBe(false);
    })
})