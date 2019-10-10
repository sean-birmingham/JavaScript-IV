class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject} `);
    }
}

class TeamLead extends Instructor {
    constructor(teamLeadAttr) {
        super(teamLeadAttr);
        this.gradeClassName = teamLeadAttr.gradeClassName;
        this.favInstructor = teamLeadAttr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
