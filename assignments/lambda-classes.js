class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}.`);
    }
}

class TeamLead extends Instructor {
    constructor(teamLeadAttr) {
        super(teamLeadAttr);
        this.gradClassName = teamLeadAttr.gradClassName;
        this.favInstructor = teamLeadAttr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!.`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// Instructor 1
const wayne = new Instructor({
    name: 'Wayne',
    age: 29,
    location: 'Chicago',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Party On, Garth!'
});

// Instructor 2
const garth = new Instructor({
    name: 'Garth',
    age: 37,
    location: 'Chicago',
    specialty: 'Back-end',
    favLanguage: 'Java',
    catchPhrase: 'Party On, Wayne!'
})

// Student 1
const sean = new Student({
    name: 'Sean',
    age: 21,
    location: 'Maryland',
    previousBackground: 'High School',
    className: 'WebPT11',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

// Student 2
const chris = new Student({
    name: 'Chris',
    age: 25,
    location: 'New York',
    previousBackground: 'Sales',
    className: 'WebPT11',
    favSubjects: ['HTML', 'CSS']
});

// Team Lead 1 
const johnny = new TeamLead({
    name: 'Johnny',
    age: 30,
    location: 'Colorado',
    specialty: 'Redux',
    favLanguage: 'React',
    catchPhrase: `Here's Johnny!`,
    gradClassName: 'Web23',
    favInstructor: 'Wayne'
});

// Team Lead 2
const joker = new TeamLead({
    name: 'Joker',
    age: 28,
    location: 'Gotham City',
    specialty: 'clowning around',
    favLanguage: 'React',
    catchPhrase: `Why so serious?`,
    gradClassName: 'Web23',
    favInstructor: 'Garth'
});

// Instructor 1
console.log(wayne);
wayne.speak();
console.log(wayne.catchPhrase);
wayne.demo('JavaScript Classes');
wayne.grade(sean, 'JavaScript IV');

// Instructor 2
console.log(garth);
garth.speak();
console.log(garth.catchPhrase);
garth.demo('CSS Flexbox');
garth.grade(chris, 'User Interface III')

// Student 1
console.log(sean);
sean.speak();
sean.listsSubjects();
sean.PRAssignment('JavaScript IV');
sean.sprintChallenge('JavaScript');

// Student 2 
console.log(chris);
chris.speak();
chris.listsSubjects();
chris.PRAssignment('User Interface III');
chris.sprintChallenge('User Interface and Git');

// Team Lead 1
console.log(johnny);
johnny.speak();
console.log(johnny.catchPhrase);
johnny.standUp('WebPT11')
johnny.debugsCode(sean, 'JavaScript IV');


// Team Lead 2
console.log(joker)
joker.speak();
console.log(joker.catchPhrase);
joker.standUp('WebPT11');
joker.debugsCode(chris, 'JavaScript III');
