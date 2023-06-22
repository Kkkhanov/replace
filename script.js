let but = document.getElementById('but-1');
let out = document.getElementById('out')
function replace(){
    let rWord = document.getElementById('in-1').value;
    let str = document.getElementById('str').value;
    const newStr = str.split(' ');
    let s = 0
    
    for (let i = 0; i < newStr.length; i++){
        newStr[i] = rWord;
        s++
    }
    let newStr1 = newStr.toString()
    let newStr2 = newStr1.replaceAll(',', ' ')
    out.textContent = newStr2 + ',' + 'число замен: ' + s;
    
}
but.onclick = replace;