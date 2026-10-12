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


const studyForm = document.querySelector('#study-form');

if (studyForm) {
    const studentName = document.querySelector('#student-name');
    const studentEmail = document.querySelector('#student-email');
    const studyDate = document.querySelector('#study-date');
    const studyHours = document.querySelector('#study-hours');
    const studySubject = document.querySelector('#study-subject');
    const studyGoals = document.querySelector('#study-goals');
    const studyReminder = document.querySelector('#study-reminder');
    const formMessage = document.querySelector('#form-message');

    const errorFields = {
        name: document.querySelector('#name-error'),
        email: document.querySelector('#email-error'),
        date: document.querySelector('#date-error'),
        hours: document.querySelector('#hours-error'),
        subject: document.querySelector('#subject-error'),
        goals: document.querySelector('#goals-error')
    };

    function clearErrors() {
        Object.values(errorFields).forEach((field) => {
            field.textContent = '';
        });

        formMessage.textContent = '';
        formMessage.classList.remove('error', 'success');
    }

    studyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrors();

        const name = studentName.value.trim();
        const email = studentEmail.value.trim();
        const date = studyDate.value;
        const hours = Number(studyHours.value);
        const subject = studySubject.value;
        const goals = studyGoals.value.trim();
        const reminder = studyReminder.checked;

        let isValid = true;

        // Rule 1: Name is required and must have at least 2 characters.
        if (name.length < 2) {
            errorFields.name.textContent =
                'Enter your name using at least 2 characters.';
            isValid = false;
        }

        // Rule 2: Email is required and must have a valid format.
        if (email === '') {
            errorFields.email.textContent = 'Email address is required.';
            isValid = false;
        } else if (!studentEmail.validity.valid) {
            errorFields.email.textContent =
                'Enter a valid email address, such as student@example.com.';
            isValid = false;
        }

        // Rule 3: Study date is required and cannot be in the past.
        const today = new Date();
        const localToday = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().split('T')[0];

        if (date === '') {
            errorFields.date.textContent = 'Choose a study date.';
            isValid = false;
        } else if (date < localToday) {
            errorFields.date.textContent =
                'Choose today or a future date for your study session.';
            isValid = false;
        }

        // Rule 4: Study duration must be a whole number from 1 to 4.
        if (
            studyHours.value.trim() === '' ||
            !Number.isInteger(hours) ||
            hours < 1 ||
            hours > 4
        ) {
            errorFields.hours.textContent =
                'Study duration must be a whole number from 1 to 4 hours.';
            isValid = false;
        }

        // Rule 5: A subject must be selected.
        if (subject === '') {
            errorFields.subject.textContent =
                'Please choose a subject for your study session.';
            isValid = false;
        }

        // Optional goals must not exceed 300 characters.
        if (goals.length > 300) {
            errorFields.goals.textContent =
                'Study goals must be 300 characters or fewer.';
            isValid = false;
        }

        if (!isValid) {
            formMessage.textContent =
                'Please correct the errors above and try again.';
            formMessage.classList.add('error');
            return;
        }

        // Create a clean object ready for a future API.
        const studyRequest = {
            studentName: name,
            email: email,
            studyDate: date,
            studyHours: hours,
            subject: subject,
            studyGoals: goals,
            reminder: reminder
        };

        console.log('Study session request:', studyRequest);

        formMessage.textContent =
            'Success! Your study session request is ready. No data has been sent to a server.';
        formMessage.classList.add('success');
    });

    // Clear or update field errors when users edit their answers.
    studentName.addEventListener('input', () => {
        errorFields.name.textContent =
            studentName.value.trim().length >= 2
                ? ''
                : 'Enter at least 2 characters.';
    });

    studentEmail.addEventListener('input', () => {
        errorFields.email.textContent =
            studentEmail.value.trim() !== '' &&
            studentEmail.validity.valid
                ? ''
                : 'Enter a valid email address.';
    });

    studyDate.addEventListener('change', () => {
        const today = new Date();
        const localToday = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().split('T')[0];

        errorFields.date.textContent =
            studyDate.value !== '' && studyDate.value >= localToday
                ? ''
                : 'Choose today or a future date.';
    });

    studyHours.addEventListener('input', () => {
        const hours = Number(studyHours.value);

        errorFields.hours.textContent =
            studyHours.value.trim() !== '' &&
            Number.isInteger(hours) &&
            hours >= 1 &&
            hours <= 4
                ? ''
                : 'Enter a whole number from 1 to 4.';
    });

    studySubject.addEventListener('change', () => {
        errorFields.subject.textContent =
            studySubject.value !== ''
                ? ''
                : 'Please choose a subject.';
    });

    studyGoals.addEventListener('input', () => {
        errorFields.goals.textContent =
            studyGoals.value.trim().length <= 300
                ? ''
                : 'Study goals must be 300 characters or fewer.';
    });

    studyForm.addEventListener('reset', () => {
        setTimeout(clearErrors, 0);
    });
}
