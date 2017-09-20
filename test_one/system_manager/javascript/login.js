/**
 * Created by ubuntu on 09/09/17.
 */
function confirm() {
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    if (name === '' || pass === '') {
        document.getElementById("alert").innerHTML = ('用户名、密码不能为空');
        return false;
    }
    if (name != 'hah' || pass != '123123') {
        document.getElementById("alert").innerHTML = ('用户名或密码错误');
        return false;
    }
    else {
        return true;
    }
}