var form = document.querySelector("#my-form");
var users = document.getElementById('users');
async function getAllUsers(){
     try {
        const res = await axios.get("http://localhost:3000/get/users");
        res.data.forEach((user)=>{
            const parentNode = document.getElementById("users");
            const childNode = document.createElement('li');
            childNode.setAttribute("userEmail", user.userEmail);
            let del = document.createElement('button');
            let edit = document.createElement('button');
             del.className = 'delete';
             edit.className = 'edit';
             del.appendChild(document.createTextNode('X'));
             edit.appendChild(document.createTextNode('Y'));
             var textToBePut = `${user.userName} - ${user.userEmail} - ${user.userPhone}`;
             childNode.appendChild(document.createTextNode(textToBePut));
             childNode.appendChild(edit);
             childNode.appendChild(del);
             parentNode.appendChild(childNode);
        })
     } catch (err) {
        console.log(err);
     }
}

document.addEventListener("DOMContentLoaded", getAllUsers);

users.addEventListener("click", deleteUser);
async function deleteUser(e){
     try {
        if(e.target.classList.contains("delete")){
            let id;
            var parentNode = e.target.parentElement;
            let userEmail = parentNode.getAttribute('userEmail');
            console.log(userEmail);
            const res = await axios.get("http://localhost:3000/get/users");
            res.data.forEach((user)=>{
                if(user.userEmail===userEmail){
                    id = user.id;
                }
            });
            const deleteUser = await axios.get(`http://localhost:3000/get/deleteUser/${id}`);
            window.location.reload();
        }
     } catch (err) {
        console.log(err);
     }
}
