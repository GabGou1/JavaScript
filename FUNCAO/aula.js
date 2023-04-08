
function sayMyName(name){
    console.log('\nYour name is ' + name);
}

function quadrado(valor){
    return Math.pow(valor,2);
}

(function main(){
    sayMyName('Gabriel');
    console.log(quadrado(10));
})();
