const jsonFile = require('jsonfile');

exports.readAll = async ()=> {
    const fileData = await jsonFile.readFile('./posts.json');
    return fileData
}

exports.addPost = async (newPost)=>{
    const posts = await jsonFile.readFile('./posts.json');
    posts.push(newPost)
    const updated = await jsonFile.writeFile('./posts.json',posts);
    return updated
}
exports.updatePost = async (id,prop,value) => {
    console.log(id,value)
    let currentFile =await jsonFile.readFile('./posts.json');
    console.log(currentFile[id][prop]=value)
    let updated = await jsonFile.writeFile('./posts.json',currentFile);
    return updated
}
exports.deletePost = async (id) => {
    console.log(id.id)
    let currentFile =await jsonFile.readFile('./posts.json');
    let temp = [];
    currentFile.forEach(Element => {
        if(Element != currentFile[id.id]){
            temp.push(Element)
        }
    })
    let updated = await jsonFile.writeFile('./posts.json',temp);
    return updated
}