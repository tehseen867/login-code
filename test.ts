import inquirer from "inquirer";

     async function idlogin()
{
    let validemail=false;
    while(!validemail)
    {
       let answer = await inquirer.prompt([{
      name:'email',
      type:'string',
      message:'please enter your email'
    
     }])
    

     if (answer.email ==='tehseenali@gmail.com')
     {  
     let validpassword=false;
     while (!validpassword)
        {
 
           let passwordAnswer = await inquirer.prompt([{
          name:'password',
         type:'password',
          message:'please enter your password'
         }]) 
        
     if (passwordAnswer.password==='tehseen123'){
        console.log("loging in....... this will take a while ")
        validemail=true;
        validpassword=true;
     }
     else {
        console.log("incorrect password")
        
     }}
    }
     else {
     console.log("invalid email adress. please enter a valid email adress")
     }}
    }
idlogin();