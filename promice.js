let person = new Promise({
        function(resolve,reject){
            if(5>4){
                resolve('True');
            }
            reject('false')
        }
})

    person.then(
        function(value) {
            console.log(value);
        }
    )

    person.catch(
        function(value) {
            console.log(value)
        }
    )