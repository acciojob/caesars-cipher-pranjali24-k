// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(str) {
    var codeArr = [], seq, final = "";
    for (var i = 0; i < str.length; i++) {
        uCode = str.charCodeAt([i]);
        if ((uCode > 64 && uCode < 78) || (uCode > 96 && uCode < 110)) {
            uCode += 13;
            codeArr.push(uCode);
        } else if ((uCode > 77 && uCode < 91) || (uCode > 109 && uCode < 123)){
            uCode -= 13;
            codeArr.push(uCode);
        } else { codeArr.push(uCode); }
    }
    console.log(codeArr);
    for (var j = 0; j < codeArr.length; j++) {
        final += String.fromCharCode(codeArr[j]);
    }
    return final;
}
 

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
