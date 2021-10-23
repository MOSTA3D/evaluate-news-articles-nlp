export function updateUi(data, element){
    console.log(data);
    const df = document.createDocumentFragment();
    for(const [key, value] of Object.entries(data)){
        const el = document.createElement("div");
        el.id = key;
        el.innerText = `${key}: ${value}`;
        df.appendChild(el);
    }
    element.innerHTML = "<strong>Results</strong>";
    element.appendChild(df);
}
