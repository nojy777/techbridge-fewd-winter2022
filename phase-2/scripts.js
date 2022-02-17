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
}

function findInList() {
   //find In List
   const textToFind = document.getElementById("tbTextToFind").value;
   console.log(textToFind);

   let indexFound;
   let spans = document.getElementsByTagName('span');
   for (let index = 0; index < spans.length; index++) {
        if(textToFind === spans[index].outerText){
            indexFound = index;
            break;
        }
    }
   
    spans[indexFound].classList.add("spanHighlighted");
}

function sortIt() {
    //
}