export function getNewWord() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "slowa.dic", false);
    xhttp.send();
    // console.log(xhttp.responseText);
    var strs = xhttp.responseText.split(/[ ,\n]+/);
    console.log(strs);

    var w = "";
    var tries = 0;
    while (w.length < 5 || w.length > 25) {
        var idx = Math.floor(Math.random() * strs.length);
        w = strs[idx];
        tries += 1;
        if (tries > 10)
            break;
    }
    
    if (w.length > 25 || w.length < 5)
        return "problem";

    return w.trim().toLowerCase();
}
