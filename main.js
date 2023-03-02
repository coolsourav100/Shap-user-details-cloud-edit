let form = document.getElementById('addform')
// form.addEventListener('submit',add=(e)=>{
    //     e.preventDefault()
    //  console.log(name , email , phone)
    //  let user = {
        //     'name' : name ,
        //     'email' : email,
        //     'phone' : phone
        //  }
        // let userDetails = JSON.stringify(user)
        // window.localStorage.setItem(phone,userDetails)
        // // console.log(list)
        // let deletebtn = document.createElement('button')
        // deletebtn.className = 'btn btn-danger btn-sm float-right delete'
        // deletebtn.appendChild(document.createTextNode('Delete'))
        // let listitem = document.createElement('li')
        // listitem.append(document.createTextNode(`Name : ${name} Email:${email} Phone:${phone}`))
        // listitem.appendChild(deletebtn)
        // list.appendChild(listitem)
        // })
        
        //  list.addEventListener('click',remove=(e)=>{
            //     e.preventDefault()
            //     if(e.target.classList.contains('delete')){
                //         let li = e.target.parentElement
                //         let ph = li.innerHTML.toString().split('Phone')[1].slice(1,11)
    //         list.removeChild(li)
    //         window.localStorage.removeItem(ph)
    //         console.log(ph)
    
    //     }
    //     // console.log(e.target.)
    //  })
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
        axios.post('https://crudcrud.com/api/ebb773554e2446b39b7cc1cce18778a2/appointentData',{obj})
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        // localStorage.setItem(obj.email,JSON.stringify(obj))
        // showUserDetails(obj)
        showonScreen()
    })
    function showonScreen(){
        // let resdata
        let list = document.getElementById('list')
        axios.get('https://crudcrud.com/api/ebb773554e2446b39b7cc1cce18778a2/appointentData')
        .then((res)=>{
            res.data.map((item)=>{
                let li = document.createElement('li');
                // Delete Button 
                let deletebutton = document.createElement('button');
                deletebutton.textContent ='Delete'
                deletebutton.className ='btn btn-danger float-right'
                // Create Edit Button
                let editbtn = document.createElement('button')
                editbtn.textContent = 'Edit'
                editbtn.className ='btn btn-primary float-right'
            li.textContent = 'Name : '+ item.obj.name + ' Email : ' + item.obj.email + 'Phone :' + item.obj.phone
               list.appendChild(li)
               li.appendChild(deletebutton)
               li.appendChild(editbtn)
                console.log(item.obj.name)
            })
        })
        .catch((err)=>console.log(err))

       
    }
    // showonScreen()
    // function showUserDetails(obj){
    // let list = document.getElementById('list')
    // let li = document.createElement('li');
    // li.textContent = `Name : ${obj.name}  Email : ${obj.email}  Phone :${obj.phone}`
    // // create Delete Button
    // let deletebutton = document.createElement('button');
    // deletebutton.textContent ='Delete'
    // deletebutton.className ='btn btn-danger float-right'
    // // Create Edit Button
    // let editbtn = document.createElement('button')
    // editbtn.textContent = 'Edit'
    // editbtn.className ='btn btn-primary float-right'
    // deletebutton.onclick=()=>{
    //     localStorage.removeItem(obj.email)
    //     list.removeChild(li)
    // }
    // editbtn.onclick=()=>{
    //     localStorage.removeItem(obj.email)
    //     list.removeChild(li)
    //     let name1  = document.getElementById('name')
    //     let email1 = document.getElementById('email')
    //     let phone1 = document.getElementById('phone')
    //     name1.value = obj.name
    //     email1.value = obj.email
    //     phone1.value = obj.phone
    // }
    // li.appendChild(editbtn)
    // li.appendChild(deletebutton)
    // list.appendChild(li)

// }