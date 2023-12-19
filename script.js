const navCourse = document.querySelector('.nav-item--course');
const courseList = document.querySelector('.course-list');

function navDropdown() {
  navCourse.classList.toggle('visible');
}

navCourse.addEventListener('click', navDropdown);
