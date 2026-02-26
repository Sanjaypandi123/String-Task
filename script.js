let submit = ()=>{

    let name = document.getElementById("name_inp")
    let find = name.value
    let len_cont = document.getElementById("len_cont")

    len_cont.innerText= find.length
    
    let caps_cont = document.getElementById("caps_cont")
    let smll_cont = document.getElementById("smll_cont")
    let char_cont = document.getElementById("char_cont")
    let num_cont = document.getElementById("num_cont")
    let spa_cont = document.getElementById("spa_count")

    let c_cont = 0
    let s_cont = 0
    let sp_cont = 0
    let space_cont = 0
    let n_cont = 0


    for(let i = 0; i<find.length; i++){
        let total = find.charCodeAt(i)
        // console.log(total);

        if(total >=65 && total<=90){
            c_cont++
        }
        else if(total >=97 && total<=122){
            s_cont++
        }
        else if((total >=48 && total<=57)){
            n_cont++
        }
        else if((total==32)){
            space_cont++
        }
        else{
            sp_cont++
        } 
    }

    caps_cont.innerText=c_cont
    smll_cont.innerText=s_cont
    char_cont.innerText=sp_cont
    num_cont.innerText=n_cont
    spa_cont.innerText=space_cont

    // name.value=""
}