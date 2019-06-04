function xuly() {
    let arr = [26,10,10,8,12,95];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    alert("Max là : " + max);
}
xuly();