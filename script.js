const courseInput = document.getElementById('courseInput');
const generateBtn = document.getElementById('generateBtn');
const timetableContainer = document.getElementById('timetable');
const chatOutput = document.getElementById('chatOutput');

generateBtn.addEventListener('click', generateTimetable);

function generateTimetable() {
    const courses = courseInput.value.split(',').map(course => course.trim());

    // You can implement your timetable generation logic here
    // For simplicity, let's assume a basic table structure

    let timetableHTML = '<table>';
    timetableHTML += '<tr><th>Time</th>';
    for (const course of courses) {
        timetableHTML += `<th>${course}</th>`;
    }
    timetableHTML += '</tr>';

    // Generate rows and cells here

    timetableHTML += '</table>';
    
    timetableContainer.innerHTML = timetableHTML;
    chatOutput.innerHTML = 'Timetable generated!';
}
