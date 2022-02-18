//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
 //find in grid
 let indexFound = -1;
    let numberToFind = document.getElementById("tbNumberToFind").value;
    let spans = document.getElementsByTagName('span');
    for (let index = 0; index < spans.length; index++) {
        if(numberToFind === spans[index].outerText){
            indexFound = index;
            break;
        }
    }
    if(indexFound >= 0) {
        spans[indexFound].classList.add('spanHighlighted');
    } else {
        alert(numberToFind + " is not in the Grid");
    }

}

function findInList() {
   //find In List
   const textToFind = document.getElementById("tbTextToFind").value;
   console.log(textToFind);

   let indexFound = -1;
   let spans = document.getElementsByTagName('span');
   for (let index = 0; index < spans.length; index++) {
        if(textToFind === spans[index].outerText){
            indexFound = index;
            break;
        }
    }
    if(indexFound >=0){
        spans[indexFound].classList.add("spanHighlighted");

    }else{
        alert(textToFind + " is not in the list");
    }
    
}

function sortIt() {
    let spans = document.getElementsByTagName('span');
    for (let index = 0; index < spans.length; index++) {
        spans[index].outerText = '';
    }
    let temp;
    for (let index = 0; index < spans.length; index++) {
        for (let x = index + 1; x < spans.length-1; x++) {
            if(spans[index].outerText < spans[x].outerText) {
                console.log(spans[index].outerText)
                temp = spans[index].outerText;
                spans[index].outerText = spans[x].outerText;
                spans[x].outerText = temp;
                break;
            }
        }
    }
}