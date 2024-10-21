const setuser = "Lyder"
const setpass = "abc123"


function login(){
    let userN = document.getElementById("user-n").value
    let passW = document.getElementById("pass-w").value



    if (setuser == userN && setpass == passW){
        document.getElementById("container").classList.add("verified");
        document.getElementById("container").classList.remove("refused");
        console.log("yes")
    }
    else {
        console.log("no")
        document.getElementById("container").classList.add("refused");
    }
    }