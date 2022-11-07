
function f1<T>(a: T & undefined) {
    return { ...a };  // Error
}

function f2<T>(a: T | T & undefined) {
    return { ...a };
}