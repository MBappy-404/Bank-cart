document.getElementById('submit').addEventListener('click', function(){
     
     const emailField = document.getElementById('email');
     const email = emailField.value;
     const passField = document.getElementById('password');
     const password = passField.value;

     if( email === 'sadikulsad0810@gmail.com' && password === '115573'){
          
          window.location.href = 'cash.html';
     }
     else{
          alert(' """Login Faild""" Please Enter Valid Email & Password !!!')
     }
})



