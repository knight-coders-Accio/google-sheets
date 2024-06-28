
let container = document.getElementById('container');

let selctedCellsCollection = new Set();



// rows => 20 rows(1 - 20)
// 26 columns(A - Z)

// header row: 0th then A-Z
for(let i = 0; i<=26; i++){
  let cell = document.createElement('div');
  cell.className = 'cell header-cell';
//   cell.innerText = i;
cell.innerText =  i==0 ? " " : String.fromCharCode(64+i); // i = 1+64, 26
  container.append(cell);
}

// rows and columns, && header column

for(let row=1; row<=20; row++){
    let rowHeader = document.createElement('div');
    rowHeader.className = 'cell header-cell';
    rowHeader.innerText = row;
    container.append(rowHeader);

    for(let col = 1; col<=26; col++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute("contenteditable", "true");
        // cell.innerHTML = row + " " + col
        cell.addEventListener('click', handleCellClick)
        container.append(cell);
    }
}


// multi-select

function handleCellClick(event){
    console.log(event);
     let targetCell = event.target; 

    // if ctrl is pressed in windows or command(meta key) is pressed in mac

    // selctedCells.className = "cell selected-cell"
    // selctedCells.classList.add('selected-cell');

    if(!event.ctrlKey && !event.metaKey){
        selctedCellsCollection.forEach((value)=>{
             value.classList.remove('selected-cell');
        })
        selctedCellsCollection.clear();
    }

  else if(selctedCellsCollection.has(targetCell)){
    selctedCellsCollection.delete(targetCell);
         targetCell.classList.remove('selected-cell');
   }
   else{
    targetCell.classList.add('selected-cell');
    selctedCellsCollection.add(targetCell);
    // console.log(selctedCells);
   }

}


// lets makle thinngs bold: 

let boldbtn = document.querySelector('#boldbtn');

boldbtn.addEventListener('click', ()=>{
    for(let t of selctedCellsCollection){
        t.style.fontWeight  =  t.style.fontWeight == 'bold' ? 'normal' : 'bold';
    }
})

let textColor = document.querySelector('#text-color');

textColor.addEventListener('change', (event)=>{
    let selectedColor = event.target.value;
    console.log(selectedColor);
    for(let t of selctedCellsCollection){
        t.style.color = selectedColor;
    }
})

