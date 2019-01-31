const _ = {
    clamp : (number, lower, upper) => {
        return number<lower ? lower : number>upper ? upper : number;
    },
    inRange : (number, start=null, end=null) => {
        if (typeof end === "undefined"){
            end = start;
            start = 0;
        } 
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        return number<start ? false: number>=end ? false : true;
    },
    words : (string) => string.split(' '),
    pad: (string, length) => {
        const padding = length - string.length;
        const paddingStart = Math.floor(padding/2);
        const paddingEnd = padding - paddingStart;
        string = string.padStart(string.length+paddingStart);
        string = string.padEnd(string.length+paddingEnd);
        return string;
    },
    has : (obj,path) => {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        path.forEach(p => {
            obj = obj[p];
        })
        return typeof  obj !== "undefined";
    },
    invert : (obj)=>{
        let invert = {};
        for (let prop in obj ){
            invert[obj[prop]]=prop;
        }
        return invert;
    },
    findKey : (obj, func) => {
        for (let prop in obj){
            if(func(obj[prop])){
                return prop;
            }
        }
        return undefined;
    },
    drop : (array, n=1) => {
        return array.slice(n);
    },
    dropWhile : (array, predicate) => {
        let clone = array.slice(0);
        for (let i=0; i<array.length; i++){
            if(!predicate(array[i],i,array)){
                return clone;
            }
            clone.shift();
        }
      return clone;
    },
    chunk : (array, size=1) => {
        const chunks = [];
        do {
            let chunk = array.splice(0,size);
            chunks.push(chunk);
        } while (array.length)  
        return chunks;
    }
};

// Do not write or modify code below this line.
module.exports = _;
