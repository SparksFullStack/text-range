function mainFunc() {
    const range = document.createRange();
    const textNode = $('.finding-text');
    const findingText = textNode[0].innerText.split(' ');
    
    // const findingText = textNode.innerHTML.split(' ');
    // document.getElementsByClassName('finding-text')[0]
    
    const testing = $(findingText[0]).wrapInner("<span class='testing'></span>")
    console.log(testing);
    // // NOTE: I can set the range for the start (although it stays at 0), but can't set the end.
    // for (let i = 0; i < findingText.length; i++) {
        
    // }
}