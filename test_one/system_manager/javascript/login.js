/**
 * Created by ubuntu on 09/09/17.
 */
function confirm() {
    var name = document.getElementById('name');
    var pass = document.getElementById('pass');
    var type = document.getElementById('type');
    if(type.value == 1){
        console.log('管理员');
    }
    else if(type.value == 2){
        console.log('经理');
    }
    else{
        console.log('售票员');
    }
}