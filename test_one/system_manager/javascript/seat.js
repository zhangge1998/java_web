/**
 * Created by ubuntu on 20/09/17.
 */

window.onload = function createSate() {
    for(let i = 1;i<=8;i++){
        let a=document.createElement('span');
        a.innerText=i;
        document.getElementById('seat').appendChild(a);
        for(let j = 1;j<=8;j++){
            let sateImage = document.createElement('img');
            let num = document.createElement('span');
            sateImage.src = '../system_manager/image/seats-yx.png';
            num.innerText = ' ';
            sateImage.setAttribute("class",'sate');
            document.getElementById('seat').appendChild(sateImage);
            document.getElementById('seat').appendChild(num);
        }
        let br = document.createElement('br');
        document.getElementById('seat').appendChild(br);
    }
    $(document).on('click','.sate',function (){
        alert('11');
        if(sateImage.url.match()){

        }
    });
};
