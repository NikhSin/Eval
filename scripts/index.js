/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

document.querySelector("#myform").addEventListener("submit",myfun)

var arr=[];
function myfun(e){
    e.preventDefault()
 
    let form=document.getElementById("myform");
    let image=form.user_pic.value;
     let name=form.user_name.value;
    let mail=form.user_email.value;
    let country=form.user_country.value;

    var p1=new Newuser(image,name,mail,country)

    arr.push(p1)
   localStorage.setItem("user",JSON.stringify(arr))
}



function Newuser(i,n,e,c){
    this.image=i;
    this.name=n;
    this.email=e;
    this.country=c;
}

let data=async(val)=>{
    try{
        let down=await fetch(val);
        let up=await down.json();
        console.log(up);
    }catch (error){
        console.log(error);
    }
}
export {data};
