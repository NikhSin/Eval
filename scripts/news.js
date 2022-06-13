let sideo=document.querySelector("#sidebar");
let array=JSON.parse(localStorage.getItem("user"));


let funs=(data)=>{
    let first=document.createElement("img");
    first.setAttribute("id","user_image")
    first.setAttribute("src",data.image);

    let second=document.createElement("h3");
    second.setAttribute("id","user_name")
    second.innerText=data.name;


    let third=document.createElement("h3");
    third.setAttribute("id","user_email")
    third.innerText=data.email;

    let fourth=document.createElement("h3");
    fourth.setAttribute("id","user_country")
    fourth.innerText=data.country;


    sideo.append(first,second,third,fourth);
}

funs(array)
