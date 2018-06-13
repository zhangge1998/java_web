/**
 * Created by ubuntu on 6/10/18.
 */
'use strict';
let array = {};
function find() {
    let table = document.getElementById('play');
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
    let nam = document.getElementById('name').value;
    let intro = document.getElementById('intro').value;
    if (nam && intro) {
        add.setAttribute('data-dismiss', 'modal');
        return true;
    }
    else {
        return false;
    }
}
function check(){
    let save = document.getElementById('save');
    let nam = document.getElementById('nam').value;
    let intro = document.getElementById('intro1').value;
    if (nam && intro) {
        save.setAttribute('data-dismiss', 'modal');
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
    var lang = document.getElementById('typ');
    for(var n = 0; n < lang.options.length; n++){
        if(lang.options[n].innerText == array.info[2]){
            lang.selectedIndex = n;
        }
    }
    var time = document.getElementById('long1');
    for(var j = 0; j < time.options.length; j++){
        if(time.options[j].innerText == array.info[3]){
            time.selectedIndex = j;
        }
    }
    var intro = document.getElementById('intro1');
    // intro.querySelector('.info').innerText = array.info[4];
    intro.value = array.info[4];
    var obj = document.getElementsByName('status1');
    for(var m = 0; m < obj.length; m++){
        if(obj[m].value == array.info[5]){
            obj[m].checked = true;
        }
    }

}


function save() {
    if(check()){
        let info = [];
        info[0] = document.getElementById('nam').value;
        info[1] = document.getElementById('typ').value;
        info[2] = document.getElementById('lang').value;
        info[3] = document.getElementById('long1').value;
        info[4] = document.getElementById('intro1').value;
        info[4] = '<div class="info">' + info[4] + '</div>';
        var status = document.getElementsByName('status1');
        for(var i = 0; i < status.length; i++){
            if(status[i].checked){
                info[5] = status[i].value;
            }
        }
        for (let i = 0; i < array.n; i++) {
            array.table.rows[array.num].cells[i].innerHTML = info[i];
        }
    }
}

function del(obj) {
    (array.table).deleteRow(array.num);
}

function add() {
    if (checkAll()) {
        let playAdd = document.getElementById('play');
        let addInfo = [];
        addInfo[0] = document.getElementById('name').value;
        addInfo[1] = document.getElementById('type').value;
        addInfo[2] = document.getElementById('language').value;
        addInfo[3] = document.getElementById('long').value;
        addInfo[4] = document.getElementById('intro').value;
        var obj = document.getElementsByName('status');
        for(var i = 0; i < obj.length; i++){
            if(obj[i].checked){
                addInfo[5] = obj[i].value;
            }
        }
        let newRow = playAdd.insertRow();
        let playName = newRow.insertCell();
        let playType = newRow.insertCell();
        let playLang = newRow.insertCell();
        let playLong = newRow.insertCell();
        let playIntro = newRow.insertCell();
        let playStatus = newRow.insertCell();

        playName.innerText = addInfo[0];
        playType.innerText = addInfo[1];
        playLang.innerText = addInfo[2];
        playLong.innerText = addInfo[3];
        // var data = document.createElement('div');
        // data.setAttribute('class', 'info');
        // data.innerText = addInfo[4];
        // playIntro.appendChild(data);
        playIntro.innerText = addInfo[4];
        playStatus.innerText = addInfo[5];
        document.getElementById('name').value = '';
        document.getElementById('intro').value = '';
    }
}

