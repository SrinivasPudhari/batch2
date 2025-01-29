// let mainEle = document.createElement("div");
// mainEle.setAttribute("id" , "mainBlock");

// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");

// let image = document.createElement('img');
// image.src="https://cdn.pixabay.com/photo/2024/11/11/17/39/dog-9190504_960_720.jpg";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "botttomBlock");
// // console.log(bottomEle);
// let h1 = document.createElement("h1");
// h1.innerText="WOLF";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomEle.append(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle)


















































let form =document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gender = document.getElementById("gender");
//console.log(gender);

// ! hiding and showing the password
check.addEventListener("click" , (event)=>){
    //console.log(event.target.checked);
    if(event.target.checked == true){
        password.setAttribute("type" , (event)=>{
            show.innerText = "hide password";
        })
    }
}