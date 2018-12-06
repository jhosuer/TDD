const  concatArrays = (arr1,arr2) => {
    //provide your solution
    let newArr = [];
    let totalLen = arr1.length + arr2.length;

    let i = 0;
    let j = 0;

    for (let index = 0; index < totalLen;){
        if (i < arr1.length ){
            newArr.push(arr1[i]);
            i++;
            index++;
        }

        if (j < arr2.length){
            newArr.push(arr2[j]);
            j++;
            index++;
        }
    }
    return newArr;
}

module.export = concatArrays;