document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const linkedin = document.getElementById('linkedin').value;
    const academicQualifications = document.getElementById('academicQualifications').value; // Changed ID
    const employmentExperience = document.getElementById('employmentExperience').value; // Changed ID
    const skills = document.getElementById('skills').value;
    const fieldExpertise = document.getElementById('fieldExpertise').value; // Changed ID

    const resume = `
        <h1>${name}</h1>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>Contact: ${contact}</p>
        <p>LinkedIn: ${linkedin}</p>
        <h2>Academic Qualifications</h2>
        <p>${academicQualifications}</p>
        <h2>Employment Experience</h2>
        <p>${employmentExperience}</p> <!-- Fixed typo here -->
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Field Expertise</h2>
        <p>${fieldExpertise}</p>
    `;
    document.getElementById('resume').innerHTML = resume;
});

function makeEditable(element) {
    const currentText = element.innerText;
    const input = document.createElement('input');
    input.value = currentText;
    input.addEventListener('blur', function() {
        element.innerText = input.value;
    });
    element.innerHTML = '';
    element.appendChild(input);
    input.focus();
}

document.getElementById('resume').addEventListener('click', function(event) {
    if (event.target.tagName === 'H2' || event.target.tagName === 'P') {
        makeEditable(event.target);
    }
});