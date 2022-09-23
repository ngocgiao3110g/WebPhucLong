document.addEventListener("DOMContentLoaded",function(){
    console.log("Helooooooo");

    //lấy danh sách các nút
    var cacnut = document.querySelectorAll(".cacnut .nut");
    console.log(cacnut);
    //lấy danh sách các slide
    var dsslide = document.querySelectorAll(".cacslide .slide");
    var nut_right = document.querySelector(".phai");
    console.log(nut_right);
    var nut_left = document.querySelector(".trai");
    console.log(nut_right);
    var vitrinut=0;
    //duyệt danh sách các nút
    for(var i=0;i<cacnut.length;i++){
        //gán các nút sự kiện nút
        cacnut[i].addEventListener('click',function(){
            //body...
            for(var j=0;j<cacnut.length;j++)
            {
                cacnut[j].classList.remove('kichhoat');
                this.classList.add('kichhoat');
            }
            var nutkichhoat = this;
            //var vitrinut = 0;
            for (vitrinut =0; nutkichhoat = nutkichhoat.previousElementSibling;vitrinut++){}

            console.log(vitrinut);
            //duyệt danh sách các slide để bỏ class kích hoạt
            for(var i=0;i<dsslide.length;i++){
            dsslide[i].classList.remove('hienra');
            dsslide[vitrinut].classList.add('hienra');
            }
        })
    }
    nut_right.addEventListener('click',function(){
        for(var i=0;i<cacnut.length;i++)
            cacnut[i].classList.remove('kichhoat');
        for(var j =0;j<dsslide.length;j++)
            dsslide[j].classList.remove('hienra');

        if(vitrinut<=7){
            cacnut[vitrinut+1].classList.add('kichhoat');
            dsslide[vitrinut+1].classList.add('hienra');
            vitrinut ++;
        }
        else{
            cacnut[0].classList.add('kichhoat');
            dsslide[0].classList.add('hienra');
            vitrinut = 0;
        }
    })
    nut_left.addEventListener('click',function(){
        for(var i=0;i<cacnut.length;i++)
            cacnut[i].classList.remove('kichhoat');
        for(var j =0;j<dsslide.length;j++)
            dsslide[j].classList.remove('hienra');

        }
    })
