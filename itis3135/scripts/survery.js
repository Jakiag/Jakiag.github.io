document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("intro-form");
    const formContainer = document.getElementById("form-container");
    const resultContainer = document.getElementById("result-container");
    const coursesContainer = document.getElementById("courses-container");

    // ADD COURSE
    document.getElementById("add-course").addEventListener("click", function () {
        const newEntry = document.createElement("div");
        newEntry.classList.add("course-entry");
        newEntry.innerHTML = `
            <input type="text" class="course" name="course" required>
            <button type="button" class="delete-course">Delete</button>
        `;
        coursesContainer.appendChild(newEntry);
    });

    // DELETE COURSE
    coursesContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-course")) {
            e.target.parentElement.remove();
        }
    });

    // SUBMIT FORM
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        formContainer.style.display = "none";
        resultContainer.style.display = "block";
        // You could add code here to show a summary of the data
    });

    // CUSTOM RESET FORM
    document.querySelector("input[type='reset']").addEventListener("click", function (e) {
        e.preventDefault();
        form.reset();
        resetCourses();
    });

    // RESET FORM FROM RESULT PAGE
    document.getElementById("reset-form").addEventListener("click", function () {
        form.reset();
        resetCourses();
        formContainer.style.display = "block";
        resultContainer.style.display = "none";
    });

    // Helper to reset course list to single blank field
    function resetCourses() {
        coursesContainer.innerHTML = `
            <div class="course-entry">
                <input type="text" class="course" name="course" required>
                <button type="button" class="delete-course">Delete</button>
            </div>
        `;
    }
});

