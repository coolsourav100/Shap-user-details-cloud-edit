let form = document.getElementById('addform')

    form.addEventListener('submit',addData=(e)=>{
        e.preventDefault();
        let name  = document.getElementById('name').value 
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value
        let obj = {
            name ,
            email,
            phone
        }
        axios.post('https://crudcrud.com/api/fbd1aa9830894b13b66a0d0c519cc44d/appointentData',{obj})
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    })

// Loading in the screen
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/fbd1aa9830894b13b66a0d0c519cc44d/appointentData')
    .then((res)=>{
        res.data.map((item)=>{
            showUserDetails(item.obj)
        })
    })
})

// 
    
    function showUserDetails(obj){
    let list = document.getElementById('list')
    let li = document.createElement('li');
    li.textContent = `Name : ${obj.name}  Email : ${obj.email}  Phone :${obj.phone}`
    // create Delete Button
    let deletebutton = document.createElement('button');
    deletebutton.textContent ='Delete'
    deletebutton.className ='btn btn-danger float-right'
    // Create Edit Button
    let editbtn = document.createElement('button')
    editbtn.textContent = 'Edit'
    editbtn.className ='btn btn-primary float-right'
    deletebutton.onclick=()=>{
        localStorage.removeItem(obj.email)
        list.removeChild(li)
    }
    editbtn.onclick=()=>{
        localStorage.removeItem(obj.email)
        list.removeChild(li)
        let name1  = document.getElementById('name')
        let email1 = document.getElementById('email')
        let phone1 = document.getElementById('phone')
        name1.value = obj.name
        email1.value = obj.email
        phone1.value = obj.phone
    }
    li.appendChild(editbtn)
    li.appendChild(deletebutton)
    list.appendChild(li)

}