/* 
- Someone has written some HTML code but fogotten to close all their <divs>.
- They've written <div> but have left out the backslash (</div>)
- Write a js function which will take in a string of the HTML code and return 
    a string with every second div closed.

- note: for simplicity you can assume there are no dested divs e.g. 
    <div><div><p>I'm a paragraph</p></div></div>

"<div>This is my first container.<div>" 
=> 
"<div>This is my first container.</div>"

"<div><p>help</p><div><div>none of my divs are closed<div><footer></footer>" 
=> 
"<div><p>help</p></div><div>none of my divs are closed</div><footer></footer>"

*/

const closeSecondDivs = (string) => {
    const codeArray = Array.from(string);
    let divCounter = 0;
    let closedDivArray = [];
    const expectedCharacters = "div>";

    for (let i = 0; i < codeArray.length; i++){
        // check for openening '<' of tag
        if (codeArray[i] === '<'){
            // adding character to output array
            closedDivArray.push(codeArray[i]);
            // checking next 4 characters to see if it's a <div>
            let testNextCharacters = [codeArray[i+1], codeArray[i+2], codeArray[i+3], codeArray[i+4]].join('');
            if (testNextCharacters === expectedCharacters){
                divCounter += 1;
                if (divCounter % 2 === 0){
                    closedDivArray.push('/');
                }
            }
        } else {
            closedDivArray.push(codeArray[i]);
        }
    }


    return console.log(closedDivArray.join(''));

}

closeSecondDivs("<div>This is my first container.<div>");
closeSecondDivs("<div>This is my first container.<div");
closeSecondDivs("<div><p>help</p><div><div>none of my divs are closed<div><footer></footer>");
