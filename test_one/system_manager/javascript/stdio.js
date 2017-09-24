/**
 * Created by ubuntu on 24/09/17.
 */
/**
 * Created by ubuntu on 21/09/17.
 */
'use strict';
let array = {};
function find() {
    let table = document.getElementById('stdio');
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
    document.getElementById('typ').value = array.info[1];
    document.getElementById('rows').value = array.info[2];
    document.getElementById('cols').value = array.info[3];
    document.getElementById('statu').value = array.info[4];


}


function save(obj) {
    let info = [];
    info[0]=document.getElementById('nam').value;
    info[1]=document.getElementById('typ').value;
    info[2]=document.getElementById('rows').value;
    info[3]=document.getElementById('cols').value;
    info[4]=document.getElementById('statu').value;
    for (let i = 0; i < array.n; i++) {
        array.table.rows[array.num].cells[i].innerHTML = info[i];
    }

}

function del(obj) {
    (array.table).deleteRow(array.num);
}

function add() {
    let employeAdd = document.getElementById('stdio');
    let addInfo = [];
    addInfo[0] = document.getElementById('name').value;
    addInfo[1] = document.getElementById('type').value;
    addInfo[2] = document.getElementById('row').value;
    addInfo[3] = document.getElementById('col').value;
    addInfo[4] = document.getElementById('status').value;
    let newRow = employeAdd.insertRow();
    let employeeName = newRow.insertCell();
    let employeeType = newRow.insertCell();
    let employeeRow = newRow.insertCell();
    let employeeCol = newRow.insertCell();
    let employeeStatus = newRow.insertCell();

    employeeName.innerText = addInfo[0];
    employeeType.innerText = addInfo[1];
    employeeRow.innerText = addInfo[2];
    employeeCol.innerText = addInfo[3];
    employeeStatus.innerText = addInfo[4];

    document.getElementById('name').value='';
    document.getElementById('type').value='';
    document.getElementById('row').value='';
    document.getElementById('col').value='';
    document.getElementById('status').value='';

}

