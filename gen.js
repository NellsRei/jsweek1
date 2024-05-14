// 2. Password Generation:
 
// This function helps users create secure passwords based on their names. 
// It takes the user's first and last names and combines the first 3 characters of the first name with the last 3 characters of the last name, then adds "@2024" to the end.
//  For example, if the user's name is "John Doe", the generated password would be "JohDoe@2024".

function generation(firstname, secondname){
    first = firstname.substring(0,3)
    sec = secondname.substring(0.3)

    password= console.log([first] + [sec] +"@2024")
}


let  firstname = "Moses"
let secondname = "Doe"

generation(firstname,secondname)
 