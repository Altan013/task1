function change(){
    var inpvalue = document.getElementById('inp').value;
    var body = document.getElementById('body')
    body.setAttribute('class', inpvalue)
}

function backspace(){
    var input = document.getElementById('inp1').value;
    var result = input.slice(0,-1);
    document.getElementById('inp1').value = result;
}

