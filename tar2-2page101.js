const shopping = (arr1, arr2) => {
  return new Promise((resolve, reject) => {
    arr1.sort();
    arr2.sort();
    let i;
    for (i = 0; i < arr1.length && i < arr2.length; i++) {
      if (arr1[i] != arr2[i]) break;
    }
    if (i == arr1.length && i == arr2.length) resolve("good work");
    else reject("you forgot some products");
  });
};
//1
shopping([1, 2, 3, 7], [4, 3, 2, 1])
  .then((val) => console.log(val))
  .catch((e) => console.log(e));
//2
try {
  console.log(shopping([1, 2, 3, 4], [4, 3, 2, 1]));
} catch {
  console.log("you forgot some products");
}
