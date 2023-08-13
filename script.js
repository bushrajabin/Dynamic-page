function showPage() {
    const element = document.querySelector("#showElement");
    let vallue = document.createElement("div");
    vallue.innerHTML="<p>Hello</p>"
    element.appendChild(vallue);

}