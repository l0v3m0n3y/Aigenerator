# Aigenerator
JavaScript ai text generator 
# main
```js
async function main(){
    const {aigenerator} = require('./aigenerator');
    const ai= new aigenerator();
    let req=await ai.generate_message("prompt")
    console.log(req)
}
main()
```
# example response (prompt: The saddest story in three words )
Lost love forever.
