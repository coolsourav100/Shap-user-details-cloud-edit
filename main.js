let form = document.getElementById('addform')
function windowrefresh(){
    let list = document.getElementById('list')
    while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
    axios.get('https://crudcrud.com/api/c6c918cbd3c44ae8961597ae3dc553b6/appointentData')
    .then((res)=>{
        res.data.map((item)=>{
            showUserDetails(item)
            // console.log(item)
        })
    })
}

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
        axios.post('https://crudcrud.com/api/c6c918cbd3c44ae8961597ae3dc553b6/appointentData',{obj})
        .then((res)=>{
            setTimeout(()=>{
                windowrefresh()
            },500)
            console.log(res)})
        .catch((err)=>console.log(err))
        
    })

// Loading in the screen
window.addEventListener('DOMContentLoaded',()=>{
    windowrefresh()
})
// 
    
    function showUserDetails(item){
    let list = document.getElementById('list')
    // while (list.hasChildNodes()) {
    //     list.removeChild(list.firstChild);
    //   }
    let li = document.createElement('li');
    // li.textContent =''
    li.textContent = `Name : ${item.obj.name}  Email : ${item.obj.email}  Phone :${item.obj.phone}`
    // create Delete Button
    let deletebutton = document.createElement('button');
    deletebutton.textContent ='Delete'
    deletebutton.className ='btn btn-danger float-right'
    // Create Edit Button
    let editbtn = document.createElement('button')
    editbtn.textContent = 'Edit'
    editbtn.className ='btn btn-primary float-right'
    // delete
    deletebutton.onclick=()=>{
        
        axios.delete(`https://crudcrud.com/api/c6c918cbd3c44ae8961597ae3dc553b6/appointentData/${item._id}`)
        .then((res)=>{
            console.log(`Deletion Status: ${res.statusText}`)
            setTimeout(()=>{
                    windowrefresh()
            },500)
        })
    }
    editbtn.onclick=()=>{
        list.removeChild(li)
        let name1  = document.getElementById('name')
        let email1 = document.getElementById('email')
        let phone1 = document.getElementById('phone')
        name1.value = item.obj.name
        email1.value = item.obj.email
        phone1.value = item.obj.phone

        obj ={
            name1,
            email1,
            phone1
        }

        axios.delete(`https://crudcrud.com/api/c6c918cbd3c44ae8961597ae3dc553b6/appointentData/${item._id}`,)
        .then((res)=>{
            setTimeout(()=>{
                windowrefresh()
            },500)
            console.log(res)})
        .catch((err)=>console.log(err))
    }
    li.appendChild(editbtn)
    li.appendChild(deletebutton)
    list.appendChild(li)
    

}