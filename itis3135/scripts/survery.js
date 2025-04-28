document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('intro-form');
    const formContainer = document.getElementById('form-container');
    const resultContainer = document.getElementById('result-container');
    const addCourseButton = document.getElementById('add-course');
    const resetFormButton = document.getElementById('reset-form');
    
    // Add course functionality
    addCourseButton.addEventListener('click', function() {
        addCourseField();
    });
    
    // Initial delete button functionality
    document.querySelectorAll('.delete-course').forEach(button => {
        button.addEventListener('click', function() {
            deleteCourseField(this);
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            displayResults();
        }
    });
    
    // Reset form button
    resetFormButton.addEventListener('click', function() {
        resetForm();
    });
    
    // Reset form functionality
    form.addEventListener('reset', function() {
        setTimeout(() => {
            // Clear all course fields except the first one
            const courseEntries = document.querySelectorAll('.course-entry');
            for (let i = 1; i < courseEntries.length; i++) {
                courseEntries[i].remove();
            }
            
            // Reset the first course field
            if (courseEntries.length > 0) {
                courseEntries[0].querySelector('.course').value = 'ITIS 3135 - Web App Design and Development';
            }
        }, 10);
    });
    
    // Function to add a new course field
    function addCourseField() {
        const coursesContainer = document.getElementById('courses-container');
        const courseEntry = document.createElement('div');
        courseEntry.className = 'course-entry';
        
        courseEntry.innerHTML = `
            <input type="text" class="course" name="course" required>
            <button type="button" class="delete-course">Delete</button>
        `;
        
        coursesContainer.appendChild(courseEntry);
        
        // Add event listener to the new delete button
        courseEntry.querySelector('.delete-course').addEventListener('click', function() {
            deleteCourseField(this);
        });
    }
    
    // Function to delete a course field
    function deleteCourseField(button) {
        const courseEntries = document.querySelectorAll('.course-entry');
        
        // Only delete if there's more than one course field
        if (courseEntries.length > 1) {
            button.closest('.course-entry').remove();
        } else {
            alert('You need at least one course!');
        }
    }
    
    // Function to validate the form
    function validateForm() {
        // Check required fields
        const requiredFields = form.querySelectorAll('[required]');
        let valid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                valid = false;
            } else {
                field.classList.remove('error');
            }
        });
        
        // Check image file type
        const imageInput = document.getElementById('image');
        if (imageInput.files.length > 0) {
            const fileName = imageInput.files[0].name.toLowerCase();
            if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {
                alert('Please select a JPG or PNG image file.');
                valid = false;
            }
        } else if (imageInput.required) {
            alert('Please select an image file.');
            valid = false;
        }
        
        // Check agreement checkbox
        const agreement = document.getElementById('agreement');
        if (!agreement.checked) {
            alert('Please agree to the terms before submitting.');
            valid = false;
        }
        
        return valid;
    }
    
    // Function to display results
    function displayResults() {
        // Get form values
        const name = document.getElementById('name').value;
        const mascot = document.getElementById('mascot').value;
        const imageCaption = document.getElementById('image-caption').value;
        const personalBackground = document.getElementById('personal-background').value;
        const professionalBackground = document.getElementById('professional-background').value;
        const academicBackground = document.getElementById('academic-background').value;
        const webBackground = document.getElementById('web-background').value;
        const computerPlatform = document.getElementById('computer-platform').value;
        
        // Get courses
        const courseInputs = document.querySelectorAll('.course');
        const courses = Array.from(courseInputs).map(input => input.value);
        
        const funnyThing = document.getElementById('funny-thing').value;
        const anythingElse = document.getElementById('anything-else').value;
        
        // Create image preview if file is selected
        let imageHTML = '';
        const imageInput = document.getElementById('image');
        if (imageInput.files.length > 0) {
            const imageFile = imageInput.files[0];
            const imageURL = URL.createObjectURL(imageFile);
            imageHTML = `
                <figure>
                    <img src="${imageURL}" alt="${imageCaption}" style="max-width: 300px;">
                    <figcaption>${imageCaption}</figcaption>
                </figure>
            `;
        }
        
        // Create courses HTML
        let coursesHTML = '<ul>';
        courses.forEach(course => {
            coursesHTML += `<li>${course}</li>`;
        });
        coursesHTML += '</ul>';
        
        // Build the result HTML
        const resultHTML = `
            <h2>${name}'s Introduction</h2>
            <h3>The ${mascot}</h3>
            
            ${imageHTML}
            
            <section>
                <h3>Personal Background</h3>
                <p>${personalBackground}</p>
            </section>
            
            <section>
                <h3>Professional Background</h3>
                <p>${professionalBackground}</p>
            </section>
            
            <section>
                <h3>Academic Background</h3>
                <p>${academicBackground}</p>
            </section>
            
            <section>
                <h3>Background in Web Development</h3>
                <p>${webBackground}</p>
            </section>
            
            <section>
                <h3>Primary Computer Platform</h3>
                <p>${computerPlatform}</p>
            </section>
            
            <section>
                <h3>Courses Currently Taking</h3>
                ${coursesHTML}
            </section>
            
            <section>
                <h3>Funny Thing About Me</h3>
                <p>${funnyThing}</p>
            </section>
            
            <section>
                <h3>Anything Else</h3>
                <p>${anythingElse}</p>
            </section>
        `;
        
        // Display the result
        resultContainer.innerHTML = resultHTML + '<button id="reset-form">Reset Form</button>';
        formContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Add event listener to the new reset button
        document.getElementById('reset-form').addEventListener('click', resetForm);
    }
    
    // Function to reset the form and show it again
    function resetForm() {
        form.reset();
        
        // Clear all course fields except the first one
        const courseEntries = document.querySelectorAll('.course-entry');
        for (let i = 1; i < courseEntries.length; i++) {
            courseEntries[i].remove();
        }
        
        // Reset the first course field
        if (courseEntries.length > 0) {
            courseEntries[0].querySelector('.course').value = 'ITIS 3135 - Web App Design and Development';
        }
        
        // Show form, hide results
        formContainer.style.display = 'block';
        resultContainer.style.display = 'none';
    }
});
