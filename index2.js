function nolOxirida(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === 0) {
                let n = arr[j];
                arr[j] = arr[i];
                arr[i] = n;
            }
        }
    }
    return arr;
}

console.log(nolOxirida([0, 1, 0, 3, 12]));