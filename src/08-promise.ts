const myPromise =async(): Promise<string> =>{
    return await new Promise( (res, _rej)=>{
        setTimeout( ()=> {
            res('hola mundo');
        } , 2000)
    } )
}


myPromise().then( (r)=> console.log(r) );

