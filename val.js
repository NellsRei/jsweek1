// 1. Password Validation:
 
// Imagine a program where users create accounts. You want to make sure their passwords are strong and not easily guessed. This function checks if a password follows these guidelines:
 
// It cannot be blank (empty).
// It cannot contain repeated characters in a row (like "1111" or "aaaaa" or "Jjjj").
// Optionally, you can add a list of common words that users shouldn't use as passwords (like "password" or "123456").

function strongPasswordcheck (password, commonwords){
    password=password.toString()
    if(password == " "){
        console.log(false)  //checks for an empty entry
    }
    else
        for(let i=0; i<= password.length-1; i++) {
            if(password.charAt(i) == password.charAt(i+1))  //checks the indexing of the xharacters 
                {
                    return console.log("Use different letters or numbers")
                }
                else
                {
                    for(let obv of commonwords){
                        if(password.toLowerCase() == obv.toLowerCase())
                            {
                             return console.log("Use a stronger password")
                            }
                            else
                            {     return console.log("Strong password")
                            }
                
                                                }
                }
                                                }
        
            
        }
let commonwords=["password", 123456]
let password = "password"
strongPasswordcheck(password, commonwords)
    