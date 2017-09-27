/**
 * Created by ubuntu on 21/09/17.
 */
'use strict';

'use strict';
let array = {};
function find() {
    let table = document.getElementById('ss');
    let length = table.rows[0].cells.length;
    let l=table.rows.length;
    for(let i = 0;i<l;i++){
        if(i == 0){
            let row = table.rows[i];
            row.setAttribute('class','active');
        }
        else if(i%2 != 0 && i != 0){
            let row = table.rows[i];
            row.setAttribute('class','default');
        }
        else if(i%2==0 && i!=0){
            let row = table.rows[i];
            row.setAttribute('class','default');
        }
    }
    if (event.srcElement.tagName == 'TD') {
        let curRow = event.srcElement.parentElement;
        // curRow.setAttribute('class','choose');
        let num = curRow.rowIndex;
        if(curRow.rowIndex == 0){
            curRow.setAttribute('class','warning');
            return 0;
        }
        else{
            curRow.setAttribute('class','info');

        }
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr[i] = table.rows[num].cells[i].innerHTML;
        }
        array.num = num;
        array.table = table;
        array.n = length;
        array.info = arr;
        return array;
    }

}

function model() {
    // let a = find();
    // console.log(array);

    document.getElementById('num').value = array.info[0];
    document.getElementById('nam').value = array.info[1];
    document.getElementById('sex').value = array.info[2];
    document.getElementById('ag').value = array.info[3];
    document.getElementById('work').value = array.info[4];
    document.getElementById('tele').value = array.info[5];
    document.getElementById('email').value = array.info[6];


}


function save(obj) {
    let info = [];
    info[0]=document.getElementById('num').value;
    info[1]=document.getElementById('nam').value;
    info[2]=document.getElementById('sex').value;
    info[3]=document.getElementById('ag').value;
    info[4]=document.getElementById('work').value;
    info[5]=document.getElementById('tele').value;
    info[6]=document.getElementById('email').value;
    for (let i = 0; i < array.n; i++) {
        array.table.rows[array.num].cells[i].innerHTML = info[i];
    }

}

function del(obj) {
    (array.table).deleteRow(array.num);
}

function add() {
    let employeAdd = document.getElementById('ss');
    let addInfo = [];
    addInfo[0] = document.getElementById('number').value;
    addInfo[1] = document.getElementById('name').value;
    addInfo[2] = document.getElementById('s').value;
    addInfo[3] = document.getElementById('age').value;
    addInfo[4] = document.getElementById('job').value;
    addInfo[5] = document.getElementById('tel').value;
    addInfo[6] = document.getElementById('emil').value;
    let newRow = employeAdd.insertRow();
    let employeeNumber = newRow.insertCell();
    let employeeName = newRow.insertCell();
    let employeeSex = newRow.insertCell();
    let employeeAge = newRow.insertCell();
    let employeeJob = newRow.insertCell();
    let employeeTel = newRow.insertCell();
    let employeeEmil = newRow.insertCell();

    employeeNumber.innerText = addInfo[0];
    employeeName.innerText = addInfo[1];
    employeeSex.innerText = addInfo[2];
    employeeAge.innerText = addInfo[3];
    employeeJob.innerText = addInfo[4];
    employeeTel.innerText = addInfo[5];
    employeeEmil.innerText = addInfo[6];

    document.getElementById('number').value='';
    document.getElementById('name').value='';
    document.getElementById('s').value='';
    document.getElementById('age').value='';
    document.getElementById('job').value='';
    document.getElementById('tel').value='';
    document.getElementById('emil').value='';

}

