function playsound(note) {
    console.log(note);
    switch (note) {
        case 'C':
            document.getElementById('C').play();
            break;
        case 'Csharp':
            document.getElementById('Csharp').play();
            break;
        case "D":
            document.getElementById("D").play();
            break;
        case 'Eb':
            document.getElementById('Eb').play();
            break;
        case 'E':
            document.getElementById('E').play();
            break;
        case 'F':
            document.getElementById('F').play();
            break;
        case 'Fsharp':
            document.getElementById('Fsharp').play();
            break;
        case 'G':
            document.getElementById('G').play();
            break;
        case 'Gsharp':
            document.getElementById('Gsharp').play();
            break;
        case 'A':
            document.getElementById('A').play();
            break;
        case 'Bb':
            document.getElementById('Bb').play();
            break;
        case 'B':
            document.getElementById('B').play();
            break;
        case 'HighC':
            document.getElementById('HighC').play();
            break;
        case 'HighCsharp':
            document.getElementById('HighCsharp').play();
            break;
        case 'HighD':
            document.getElementById('HighD').play();
            break;
        case 'HighEb':
            document.getElementById('HighEb').play();
            break;
        case 'HighE':
            document.getElementById('HighE').play();
            break;
        case 'HighF':
            document.getElementById('HighF').play();
            break;
        case 'HighFsharp':
            document.getElementById('HighFsharp').play();
            break;
        case 'HighG':
            document.getElementById('HighG').play();
            break;
        case 'HighGsharp':
            document.getElementById('HighGsharp').play();
            break;
        case 'HighA':
            document.getElementById('HighA').play();
            break;
        case 'HighBb':
            document.getElementById('HighBb').play();
            break;
        case "HighB":
            document.getElementById("HighB").play();
            break;
        case 'DblHighC':
            document.getElementById('DblHighC').play();
            break;
        case 'DblHighCsharp':
            document.getElementById('DblHighCsharp').play();
            break;
        case 'DblHighD':
            document.getElementById('DblHighD').play();
            break;
        case 'DblHighEb':
            document.getElementById('DblHighEb').play();
            break;
        case 'DblHighE':
            document.getElementById('DblHighE').play();
            break;

    }
}

window.onkeydown = function (e) {
    e.preventDefault();
    var note = e.key;
    switch (note.toUpperCase()) {
        case 'A':
            document.getElementById('C').play();
            break;
        case 'W':
            document.getElementById('Csharp').play();
            break;
        case "S":
            document.getElementById("D").play();
            break;
        case 'E':
            document.getElementById('Eb').play();
            break;
        case 'D':
            document.getElementById('E').play();
            break;
        case 'F':
            document.getElementById('F').play();
            break;
        case 'T':
            document.getElementById('Fsharp').play();
            break;
        case 'G':
            document.getElementById('G').play();
            break;
        case 'Y':
            document.getElementById('Gsharp').play();
            break;
        case 'H':
            document.getElementById('A').play();
            break;
        case 'U':
            document.getElementById('Bb').play();
            break;
        case 'J':
            document.getElementById('B').play();
            break;
        case 'K':
            document.getElementById('HighC').play();
            break;
        case 'O':
            document.getElementById('HighCsharp').play();
            break;
        case 'L':
            document.getElementById('HighD').play();
            break;
        case 'P':
            document.getElementById('HighEb').play();
            break;
        case ';':
            document.getElementById('HighE').play();
            break;
        case "'":
            document.getElementById('HighF').play();
            break;
        default:
            break;

    }
};