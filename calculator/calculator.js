function getModulo(){


    let a = document.getElementById("of").value;
    let m = document.getElementById("wrt").value;
    let res;

    for(let x = 1; x < m; x++){
        if (((a % m) * (x % m)) % m == 1){
            
            res = x;
        }
    }

    document.getElementById("Result").innerHTML = "Modular multiplicative inverse is " + res;
}