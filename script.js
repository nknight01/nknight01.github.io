// Application Development II
// Homework 5 - JavaScript for the Browser

console.log("JavaScript file loaded successfully.");

// ----------------------------------------
// 1. Variables, Constants, and Data Types
// ----------------------------------------

const courseName = "Application Development II";
const studentName = "Nick";
let completedLessons = 4;

const assignmentCount = 5;
const isStudent = true;

// Convert a string into a number
const assignmentInput = "5";
const convertedAssignments = Number(assignmentInput);

// Use typeof to check a data type
console.log("Course:", courseName);
console.log("Student:", studentName);
console.log("Completed lessons:", completedLessons);
console.log("Is student:", isStudent);
console.log("Converted assignments:", convertedAssignments);
console.log("Type of converted assignments:", typeof convertedAssignments);

// Update a let variable
completedLessons = completedLessons + 1;

console.log("Updated completed lessons:", completedLessons);


// ----------------------------------------
// 2. Expressions and Conditionals
// ----------------------------------------

const completionPercentage = completedLessons / assignmentCount * 100;

console.log("Completion percentage:", completionPercentage);

if (completedLessons === assignmentCount) {
    console.log("All assignments are complete.");
} else if (completedLessons < assignmentCount) {
    console.log("There are still assignments to complete.");
} else {
    console.log("The assignment count has been exceeded.");
}


// ----------------------------------------
// 3. Function
// ----------------------------------------

function getGradeLabel(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 70) {
        return "Passing";
    } else {
        return "Needs review";
    }
}

// Call the function with different arguments
const firstGrade = getGradeLabel(95);
const secondGrade = getGradeLabel(80);

console.log("Grade for 95:", firstGrade);
console.log("Grade for 80:", secondGrade);


// ----------------------------------------
// 4. Arrays
// ----------------------------------------

const projects = [
    "HTML Site",
    "CSS Update",
    "JavaScript Practice"
];

// Access an array element
console.log("First project:", projects[0]);
console.log("Number of projects:", projects.length);

// Loop through the array
for (const project of projects) {
    console.log(`Project: ${project}`);
}


// ----------------------------------------
// 5. Object
// ----------------------------------------

const studentProject = {
    title: "Personal Website",
    author: studentName,
    deployed: true,
    pages: 3
};

// Access object properties
console.log("Project title:", studentProject.title);
console.log("Project author:", studentProject.author);
console.log("Project deployed:", studentProject.deployed);
console.log("Number of pages:", studentProject.pages);


// ----------------------------------------
// 6. Array of Objects
// ----------------------------------------

const assignments = [
    {
        name: "HTML Site",
        submitted: true
    },
    {
        name: "CSS Update",
        submitted: true
    },
    {
        name: "JavaScript Practice",
        submitted: false
    }
];

// Loop through the array of objects
for (const assignment of assignments) {
    console.log(
        `${assignment.name} submitted: ${assignment.submitted}`
    );
}


// ----------------------------------------
// 7. Debugging
// ----------------------------------------

console.log("Final project information:", studentProject);
console.log("Total assignments:", assignments.length);
console.log("JavaScript program completed successfully.");

// 8. DOM Interaction
const message = document.querySelector('#site-message');
const highlightButton = document.querySelector('#highlight-button');
const addButton = document.querySelector('#add-button');
const nameInput = document.querySelector('#name-input');
const namePreview = document.querySelector('#name-preview');
const dynamicList = document.querySelector('#dynamic-list');

highlightButton.addEventListener('click', () => {
    message.textContent = 'JavaScript is now controlling this page!';
    message.classList.toggle('highlighted');

    highlightButton.textContent = message.classList.contains('highlighted')
        ? 'Remove Highlight'
        : 'Highlight Message';
});

nameInput.addEventListener('input', (event) => {
    const name = event.target.value;

    if (name.trim() === '') {
        namePreview.textContent = 'Your name will appear here.';
    } else {
        namePreview.textContent = `Hello, ${name}!`;
    }
});

addButton.addEventListener('click', () => {
    const item = document.createElement('li');

    item.textContent = 'New item added with JavaScript!';
    item.classList.add('dynamic-item');

    dynamicList.append(item);
});

const buttonAction = highlightButton.getAttribute('data-action');
console.log(`Highlight button action: ${buttonAction}`);