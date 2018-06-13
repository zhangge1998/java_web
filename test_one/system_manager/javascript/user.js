/**
 * Created by ubuntu on 6/10/18.
 */
/**
 * Created by ubuntu on 21/09/17.
 */
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
        else {
            let row = table.rows[i];
            row.setAttribute('class','default');
        }
    }
    if (event.srcElement.tagName == 'TD') {
        let curRow = event.srcElement.parentElement;
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

function checkNum(number){
    let check=/^[0-9]{6,20}$/;
    let num=document.getElementById('number').value;
    if(check.test(num)){
        document.getElementById('1').innerText='';
        return true;
    }
    else{
        document.getElementById('1').innerText='请输入6～20位数字！';
        document.getElementById('number').value='';
        return false;
    }
}

// function checkPass(pass){
//     let check=/[\u4e00-\u9fa5]{2,9}/;
//     let nam=document.getElementById('name').value;
//     if(check.test(nam)){
//         document.getElementById('2').innerText='';
//         return true;
//     }
//     else{
//         document.getElementById('2').innerText='请输入2～9个汉字！';
//         document.getElementById('name').value='';
//         return false;
//     }
// }

function checkAll(){
    let add=document.getElementById('add');
    if(checkNum()){
        add.setAttribute('data-dismiss','modal');
        return true;
    }
    else
    {
        return false;
    }
}

function model() {
    document.getElementById('num').value = array.info[0];
    document.getElementById('pas').value = array.info[1];
    var sel = document.getElementById('work');
    for(var j = 0; j < sel.options.length; j++){
        if(sel.options[j].innerText == array.info[2]){
            sel.selectedIndex = j;
        }
    }
    document.getElementById('img1').value = array.info[4];
}


function save(obj) {
    let info = [];
    info[0]=document.getElementById('num').value;
    info[1]=document.getElementById('nam').value;
    info[2]=document.getElementById('work').value;
    info[3]=document.getElementById('img1').value;
    for (let i = 0; i < array.n; i++) {
        array.table.rows[array.num].cells[i].innerHTML = info[i];
    }

}

function del(obj) {
    (array.table).deleteRow(array.num);
}

function add() {
    if(checkAll()) {

        let employeAdd = document.getElementById('ss');
        let addInfo = [];
        addInfo[0] = document.getElementById('number').value;
        addInfo[1] = document.getElementById('pass').value;
        addInfo[2] = document.getElementById('job').value;
        addInfo[3] = document.getElementById('img').value;
        let newRow = employeAdd.insertRow();
        let employeeNumber = newRow.insertCell();
        let employeeName = newRow.insertCell();
        let employeeJob = newRow.insertCell();
        let employeeImage = newRow.insertCell();


        employeeNumber.innerText = addInfo[0];
        employeeName.innerText = addInfo[1];
        employeeJob.innerText = addInfo[2];
        employeeImage.innerText = addInfo[3];


        document.getElementById('number').value = '';
        document.getElementById('name').value = '';
    }
}

