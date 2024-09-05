// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeModal = document.querySelector('.close');

const projectDetails = {
    project1: 'Built an E-comerce platform using HTML, CSS, JavaScrpit, OOP, Node.js and Express.js. This application allows users to select, purchase, and track products',
    project2: 'Created a task board for users to keep track of daily activities.',
    project3: 'Cretated a blog application that allows users tell us what they might have on their mind.'
};

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectId = project.getAttribute('id');
        modalText.textContent = projectDetails[projectId];
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Hamburger menu functionality
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}