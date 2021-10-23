import "./styles/style.scss";
import isValidUrl from "./js/checkURL";
import postData from "./js/async";
import { updateUi } from "./js/ui";

import "./styles/form.scss"
import "./styles/main.scss"
import "./styles/header.scss"
import "./styles/footer.scss"

const input = document.getElementsByTagName("input")[0];
const submit = document.querySelector("button[type=submit]");
const section2 = document.getElementsByTagName("section")[1];
submit.addEventListener("click", e=>{
    e.preventDefault();
    const tempURL = input.value;
    if(!isValidUrl(tempURL)) alert("enter valid url");
    else postData("http://localhost:8081",{url:tempURL})
    .then(data=>updateUi(data, section2));
});

export {
    isValidUrl,
    updateUi,
    postData
}