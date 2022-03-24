// level {2}
function sum(n){
    let s = 0;
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;
    let a = [n2];
    while(s<n-1){
        n3 = n1+n2;
        a.push(n3);
        n1 = n2;
        n2 = n3;
        s++;
    }
    let sum = 0;
    a.forEach((num)=>{
        sum = sum + num;
    })
    console.log(a);
    return sum;
    
}