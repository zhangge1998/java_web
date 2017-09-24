/**
 * Created by ubuntu on 21/09/17.
 */
'use strict';
let array = {};
function find() {
    let table = document.getElementById('ss');
    let length = table.rows[0].cells.length;
    if (event.srcElement.tagName == 'TD') {
        let curRow = event.srcElement.parentElement;
        curRow.setAttribute('class','choose');
        let num = curRow.rowIndex;
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

    document.getElementById('nam').value = array.info[0];
    document.getElementById('sex').value = array.info[1];
    document.getElementById('ag').value = array.info[2];
    document.getElementById('work').value = array.info[3];
    document.getElementById('tele').value = array.info[4];
    document.getElementById('email').value = array.info[5];


}


function save(obj) {
    let info = [];
    info[0]=document.getElementById('nam').value;
    info[1]=document.getElementById('sex').value;
    info[2]=document.getElementById('ag').value;
    info[3]=document.getElementById('work').value;
    info[4]=document.getElementById('tele').value;
    info[5]=document.getElementById('email').value;
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
    addInfo[0] = document.getElementById('name').value;
    addInfo[1] = document.getElementById('s').value;
    addInfo[2] = document.getElementById('age').value;
    addInfo[3] = document.getElementById('job').value;
    addInfo[4] = document.getElementById('tel').value;
    addInfo[5] = document.getElementById('emil').value;
    let newRow = employeAdd.insertRow();
    let employeeName = newRow.insertCell();
    let employeeSex = newRow.insertCell();
    let employeeAge = newRow.insertCell();
    let employeeJob = newRow.insertCell();
    let employeeTel = newRow.insertCell();
    let employeeEmil = newRow.insertCell();

    employeeName.innerText = addInfo[0];
    employeeSex.innerText = addInfo[1];
    employeeAge.innerText = addInfo[2];
    employeeJob.innerText = addInfo[3];
    employeeTel.innerText = addInfo[4];
    employeeEmil.innerText = addInfo[5];

    document.getElementById('name').value='';
    document.getElementById('s').value='';
    document.getElementById('age').value='';
    document.getElementById('job').value='';
    document.getElementById('tel').value='';
    document.getElementById('emil').value='';

}

