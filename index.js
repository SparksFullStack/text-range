function mainFunc() {
    const range = document.createRange();
    const textNode = document.getElementsByClassName('finding-text')[0]
    const findingText = textNode.innerHTML.split(' ');
    
    let start = 0;
    let end = 0;

    // NOTE: I can set the range for the start (although it stays at 0), but can't set the end.
    for (let i = 0; i < findingText.length; i++) {
        let currentWord = findingText[i];
        end = currentWord.length + start;
        range.setStart(textNode, start);
        //range.setEnd(textNode, end);
        console.log('range', range);
    }
}