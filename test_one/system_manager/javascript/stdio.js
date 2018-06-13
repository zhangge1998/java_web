'use strict';
let array = {};
function find() {
    let table = document.getElementById('stdio');
    let length = table.rows[0].cells.length;
    let l = table.rows.length;
    for (let i = 0; i < l; i++) {
        if (i == 0) {
            let row = table.rows[i];
            row.setAttribute('class', 'active');
        }
        else {
            let row = table.rows[i];
            row.setAttribute('class', 'default');
        }
    }
    if (event.srcElement.tagName == 'TD') {
        let curRow = event.srcElement.parentElement;
        let num = curRow.rowIndex;
        if (curRow.rowIndex == 0) {
            curRow.setAttribute('class', 'warning');
            return 0;
        }
        else {
            curRow.setAttribute('class', 'info');

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

// function checkName(name) {
//     let check = /^[\u4e00-\u9fa5]{5,9}$/;
//     let nam = document.getElementById('name').value;
//     if (check.test(nam)) {
//         document.getElementById('1').innerText = '';
//         return true;
//     }
//     else {
//         document.getElementById('1').innerText = '请输入5～9个汉字！';
//         document.getElementById('name').value = '';
//         return false;
//     }
// }

function checkAll() {
    let add = document.getElementById('add');
    if (1) {
        add.setAttribute('data-dismiss', 'modal');
        return true;
    }
    else {
        return false;
    }
}


function model() {

    document.getElementById('nam').value = array.info[0];
    var type = document.getElementById('typ');
    for(var i = 0; i < type.options.length; i++){
        if(type.options[i].innerText == array.info[1]){
            type.selectedIndex = i;
        }
    }
    var rows = document.getElementById('rows');
    for(var j = 0; j < rows.options.length; j++){
        if(rows.options[j].innerText == array.info[2]){
            rows.selectedIndex = j;
        }
    }
    var cols = document.getElementById('cols');
    for(var k = 0; k < rows.options.length; k++){
        if(cols.options[k].innerText == array.info[3]){
            cols.selectedIndex = k;
        }
    }
    var obj = document.getElementsByName('status1');
    for(var m = 0; m < obj.length; m++){
        if(obj[m].value == array.info[4]){
            obj[m].checked = true;
        }
    }

}


function save(obj) {
    let info = [];
    info[0] = document.getElementById('nam').value;
    info[1] = document.getElementById('typ').value;
    info[2] = document.getElementById('rows').value;
    info[3] = document.getElementById('cols').value;
    var status = document.getElementsByName('status1');
    for(var i = 0; i < status.length; i++){
        if(status[i].checked){
            info[4] = status[i].value;
        }
    }
    for (let i = 0; i < array.n; i++) {
        array.table.rows[array.num].cells[i].innerHTML = info[i];
    }

}

function del(obj) {
    (array.table).deleteRow(array.num);
}

function add() {
    if (checkAll()) {
        let employeAdd = document.getElementById('stdio');
        let addInfo = [];
        addInfo[0] = document.getElementById('name').value;
        addInfo[1] = document.getElementById('type').value;
        addInfo[2] = document.getElementById('row').value;
        addInfo[3] = document.getElementById('col').value;
        // addInfo[4] = document.getElementById('status').value;
        var obj = document.getElementsByName('status');
        for(var i = 0; i < obj.length; i++){
            if(obj[i].checked){
                addInfo[4] = obj[i].value;
            }
        }
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

        document.getElementById('name').value = '';
    }
}

function manage() {
    var seat_manage = document.querySelectorAll('button')[1];
    console.log(seat_manage);
    seat_manage.onclick = function() {
        var id  = array.info[0];
        if(id){
            window.location.href = 'http://localhost:63342/system_manager/seat.html'
        }
    }

}
manage();

