// level {2}
// 1.
function removerEvenNumbers(a){
    return a.filter(n=> n%2!=0);
};
// 2.
function upperCaseVowels(a){
    const v = ["a","e","i","o","u"]
    let p = "";
    let s = a.split("");
    s.forEach((i)=>{
        if(v.includes(i)){
            p = p+i.toUpperCase();
        }
        else{
            p = p+i;
        }
    });
    return p;
};
// 3.
function biggestElement(a){
    return a.sort((a,b)=>b-a)[0]
};