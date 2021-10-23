import isValidUrl from "../src/client/js/checkURL";

describe("testing isvalidUrl function", ()=>{
    test("from test function", ()=>{
        expect(isValidUrl("https://jestjs.io/docs/asynchronous")).toBe(true);
    });
})