var contacts = [
    {
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"]
    },
    {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"]
    },
    {
    "firstName": "Richard ",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"]
    },
    {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
    ];
    function lookUpProfile(name, prop){
    // Only change code below this line

    function printValues(){
        for(var a = 0; a< contacts.length; a++){
            contacts[a].firstName;
        }   
    }
    
    function isNameExist(name){
        for(var a = 0; a< contacts.length; a++){
            if (contacts[a].firstName == name)
                return true
        }
        return false;
    }
    
    function isPropertyExist(prop){
        for(var a = 0; a< contacts.length; a++){
            if (contacts[a].hasOwnProperty (prop))
                return true
        }
        return false;
    }

            if(!isNameExist(name)){
                return "No such contact";
            }else if(!isPropertyExist(prop)){
                return "No such property";
            }
    
             for(var a = 0; a< contacts.length; a++){
            if(contacts[a].firstName == name && contacts[a].hasOwnProperty(prop)){
                    return contacts[a][prop];
                }   
            }
    
    // Only change code above this line
    }
    console.log(lookUpProfile("John", "likes")); // Change this line
    console.log(lookUpProfile("Jane", "lastName"));
    console.log(lookUpProfile("Rob", "number"));
    console.log(lookUpProfile("Rob", "JavaScript"));
    console.log(lookUpProfile("John", "address"));
    module.exports = lookUpProfile;