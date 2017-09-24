/**
 * Created by ubuntu on 09/09/17.
 */
function confirm() {
    var name = document.getElementById('name');
    var pass = document.getElementById('pass');
    if (name.value === '' || pass.value === '') {
        document.getElementById("alert").innerHTML = ('用户名、密码不能为空');
        return false;
    }
    if (name.value != 'hah' || pass.value != '123123') {
        document.getElementById("alert").innerHTML = ('用户名或密码错误');
        return false;
    }
    else {
        return true;
    }
}

// <div id = 'newElem'></div>

// img
// let image = document.createElement('img')
// image.src = '';
//image.a.... = ('','')

//document.getElementById('neElem').parentElement(image)

//for(i;i-5;i++){
// for(j;j-5;j++){

//    }
// <br/>
// }