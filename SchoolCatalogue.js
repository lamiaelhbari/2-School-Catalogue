/* The project aims to create a digital catalog of schools in New York City with 
classes for primary and secondary schools, sharing properties through inheritance, 
and a SchoolCatalog class to store and manage the collection of schools. */

// 1- Create ParentSchool Class :
class School {
  constructor(
    name,
    level,
    numberOfStudents,
    averageTestScores,
    schoolOverview
  ) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }

  // 2- Create Getters :
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  get averageTestScores() {
    return this._averageTestScores;
  }
  get schoolOverview() {
    return this._schoolOverview;
  }

  // 3- Check the type of the input value :
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      return (this._numberOfStudents = newNumberOfStudents);
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  // 4- Substitute teacher at that randomly generated index :
  quickFacts() {
    console.log(` ${this.name} educates ${this.numberOfStudents} at the ${this.level} school 
  level.`);
  }
  static pickSubstituteTeacher(substituteTeachers = [""]) {
    const randomTeacherIndex = Math.floor(
      Math.random() * substituteTeachers.length
    );
    return substituteTeachers[randomTeacherIndex];
  }
}

// 5- PrimarySchool class :
class PrimarySchool extends School {
  constructor(
    name,
    numberOfStudents,
    pickupPolicy,
    averageTestScores,
    schoolOverview
  ) {
    super(name, "primary", numberOfStudents, averageTestScores, schoolOverview);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
// 6- MiddleSchool class :
class MiddleSchool extends School {
  constructor(name, numberOfStudents, averageTestScores, schoolOverview) {
    super(name, "middle", numberOfStudents, averageTestScores, schoolOverview);
  }
}

// 7- HighSchool class :
class HighSchool extends School {
  constructor(
    name,
    numberOfStudents,
    sportsTeams,
    averageTestScores,
    schoolOverview
  ) {
    super(name, "high", numberOfStudents, averageTestScores, schoolOverview);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// 8- PrimarySchool instance :
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13.",
  {
    math: 85,
    science: 90,
    history: 88,
  },
  "Lorraine Hansbury Primary School provides quality education to young learners."
);

lorraineHansbury.quickFacts();
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J.R.Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

// 9- HighSchool instance :
const alSmith = new HighSchool(
  "Al E. Smith",
  415,
  ["Baseball", "Basketball", "Volleyball", "Track and Field"],
  {
    math: 78,
    science: 82,
    history: 75,
  },
  "Al E. Smith High School is committed to academic excellence and athletic achievement."
);
alSmith.quickFacts();
console.log(alSmith.sportsTeams);

// 10- Creating SchoolCatalog :
class SchoolCatalog {
  constructor() {
    this._schools = [];
  }

  addSchool(school) {
    this._schools.push(school);
  }

  get schools() {
    return this._schools;
  }
}

const schoolCatalog = new SchoolCatalog();
schoolCatalog.addSchool(lorraineHansbury);
schoolCatalog.addSchool(alSmith);

console.log(schoolCatalog.schools);
