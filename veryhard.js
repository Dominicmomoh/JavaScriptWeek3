let knows = []





class Person {
    // Properties
    constructor(name, age, job){
        this.name=name;
        this.age=age;
        this.job=job
    }
    // Method 
    exercise(){
        console.log("Whatever we want");
    }
    fetchJob(){
        console.log(`This is ${this.name} and their job is ${this.job}`)
    }
}

class programmer extends Person{
    constructor(name, job, age, language, busy=true){
        super(name, job, age)
        this.language = language;
        this.busy = busy;
    }
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask() {
        if(this.busy === true){
            console.log(`${this.name} can't accept any new tasks right now`)
        }
        else console.log(`${this.name} woukd love to take on a new responsibility`)
    }
    learnlanguage() {
        for(let i = 0; i < knows.length; i++){
        this.language.push(knows[i])
        }
    }
    listLanguage() {
        console.log(`${this.name} know the following languages: ${this.language.join(",")}`)
    }
    
}
const testProgrammer1 = new programmer("Edwin","Student", 35, ["html", "css", "krio"])
const testProgrammer2 = new programmer("John", "teacher", 75, ["Spanish", "French"], false)

testProgrammer1.offerNewTask()
testProgrammer2.offerNewTask()

testProgrammer1.completeTask()
testProgrammer2.completeTask()

testProgrammer1.offerNewTask()
testProgrammer2.offerNewTask()

testProgrammer1.listLanguage()
testProgrammer2.listLanguage()

testProgrammer1.learnlanguage("temne","loko", "javascript")
testProgrammer1.listLanguage()

testProgrammer2.learnlanguage("react", "css")
testProgrammer2.listLanguage()

