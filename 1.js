 var notesArray =[];
 const notesInput = document.getElementById("notesImput");
 const itemCount = document.getElementById("itemCount");
 const listDiv = document.getElementById("listDiv");
function add() {
    const newNote  = notesInput.value;
    if (newNote == "") {
        alert ("أكتب ملاحظاتك");
        
    } else {
        notesArray.push(newNote);
        itemCount.innerText = notesArray.length;
         notesInput.value =""; 
        console.log(notesArray);
    }


    
}
function showList() {
    listDiv.innerHTML ="";
   for (let index = 0; index < notesArray.length; index++) {
    const element = notesArray[index];
    const newli = document.createElement("li");
    newli.innerText = element;
    listDiv.appendChild(newli);
   } 
}
function hideList() {
    listDiv.innerHTML = ""
}
function deleteList() {
    notesArray = [];
    hideList();
    itemCount.innerText =notesArray.length;
}

