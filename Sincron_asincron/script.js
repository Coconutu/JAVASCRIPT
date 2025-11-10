// console.log('start')

// setTimeout(() => { //functie asincrona
//     console.log('in setTimeout');
// },2000);

// console.log('final');

console.log('start')

function login(email, password, callback) {
    setTimeout(() => {
        console.log('login...');
        callback({ email: email });
    }, 3000);
}
function getUserPosts(email,callback) {
    setTimeout(() => {
        console.log(`getUserPosts...${email}`);
        callback ([
            { title: 'Post 1' },
            { title: 'Post 2' },
            { title: 'Post 3' }
        ])
    }, 2000);
}
const user = login('test@yahoo.com', '123', (userObject) => {
    console.log(userObject);
    getUserPosts(userObject.email,(posts)=>{
        console.log(posts);

    });
    
});
console.log(user);
console.log('final');
//am ramas la minutul 17:28