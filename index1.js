let arr = [1, 2, 3];
let res = [];

function approach1Fn(arr, start) {
    if (start === arr.length - 1) {
        res.push([...arr]);
        return;
    }
    for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        approach1Fn(arr, start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]];
    }
}
approach1Fn(arr, 0);
console.log(res);