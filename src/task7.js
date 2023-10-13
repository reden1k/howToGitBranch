const triangle = (a, b, c) => {
    const p = (a + b + c) / 2;
    const S = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
    console.log(S);
};

triangle(3,2,4);