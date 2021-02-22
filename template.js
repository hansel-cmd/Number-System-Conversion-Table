function resizeMe(e) {
    let up_to = document.querySelector("#up_to").value;
    let div = document.querySelector("#temp");
    let output = e ? main(up_to) : main(24);    
    div.innerHTML = output;   
}