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
# example response (prompt: Generate a comedy story about a hamster)
Once upon a time, in a cozy little pet store, there lived a hamster named Mr. Fluffy. Mr. Fluffy was not your average hamster - he had a mischievous twinkle in his eye and a penchant for causing trouble.\n' +
        '\n' +
        "One day, Mr. Fluffy decided he was tired of his boring cage and wanted to explore the outside world. So, when the pet store owner wasn't looking, he made a daring escape. He scurried through the aisles, knocking over bags of food and sending gerbils running in all directions.\n" +
        '\n' +
        "As he made his way outside, Mr. Fluffy couldn't believe his luck - there was a whole world to explore! He ran through the grass, climbed trees, and even hitched a ride on a passing squirrel. But soon, he realized he was lost and didn't know how to get back to the pet store.\n" +
        '\n' +
        'Just when he thought all hope was lost, Mr. Fluffy stumbled upon a group of friendly mice who took him in and showed him the ways of the wild. They taught him how to forage for food, build a cozy nest, and even how to outsmart the neighborhood cat.\n' +
        '\n' +
        "But as much as Mr. Fluffy enjoyed his new life in the wild, he couldn't shake the feeling that he missed his cozy cage and the familiar faces of the pet store. So, with the help of his new mouse friends, he made his way back home, where he was greeted with cheers and applause from the other animals.\n" +
        '\n' +
        'From that day on, Mr. Fluffy was known as the adventurous hamster who had seen it all - and he never tried to escape again. But every now and then, when he was feeling restless, he would gaze out the window and dream of the wild adventures that awaited him. And the other animals would chuckle and shake their heads, knowing that Mr. Fluffy was truly one-of-a-kind.
