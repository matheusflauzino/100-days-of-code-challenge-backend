var globalVar = 10;

{
    const localConst = 13;
    let localLet = 14;
    console.log(globalVar, localConst, localLet);
    
}


try {
    console.log('=>>>', localConst);
} catch (err) {
    console.error('=>>>', err.message);
}