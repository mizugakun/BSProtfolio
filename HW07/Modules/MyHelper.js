function $g(selector){
    if(selector.includes('#') && !selector.includes(' ')){
        return document.querySelector(selector);
    }else{
        return document.querySelectorAll(selector);
    }
}

function $c(element){
    if(typeof(element) != 'string'){
        throw new UserException(`error occurs when create ${element} element cuz perameter type is not string`);
    }
    return document.createElement(element);
}

// module.exports.$g = $g
// module.exports.$c = $c
// console.log(module);
// export {$c, $g};