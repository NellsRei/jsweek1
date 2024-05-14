// 4. Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.

function words(a){
    b=[]
    a = a.split(" ")
    for (let word of a){
        word=word.split("")
        word[0]= word[0].toUpperCase()
        // console.log(word)
        word=word.join("")
        b.push(word)
    }
    b=b.join(" ")
    console.log(b)
}

a="this is a line of text"
words(a)



