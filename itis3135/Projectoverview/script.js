document.addEventListener('DOMContentLoaded', function() {
    // Workout Plan details
    const workoutDetails = document.getElementById("workout-plan");

    document.getElementById("beginner").addEventListener("click", function() {
        workoutDetails.innerHTML = `
            <h4>Beginner Plan: Full Body Workout</h4>
            <ul>
                <li>Day 1: Push-ups (3 sets of 10), Squats (3 sets of 15)</li>
                <li>Day 2: Rest</li>
                <li>Day 3: Dumbbell Rows (3 sets of 10), Plank (3 sets of 30 seconds)</li>
                <li>Day 4: Rest</li>
                <li>Day 5: Cardio - Jogging for 20 minutes</li>
            </ul>
        `;
    });

    document.getElementById("intermediate").addEventListener("click", function() {
        workoutDetails.innerHTML = `
            <h4>Intermediate Plan: Strength Training & Cardio</h4>
            <ul>
                <li>Day 1: Squats (4 sets of 12), Bench Press (4 sets of 10), 30 minutes HIIT</li>
                <li>Day 2: Rest</li>
                <li>Day 3: Deadlifts (4 sets of 10), Pull-ups (3 sets of 5), 20-minute cardio</li>
                <li>Day 4: Active Rest: Yoga or Stretching</li>
                <li>Day 5: Cardio - Jogging for 30 minutes</li>
            </ul>
        `;
    });

    document.getElementById("advanced").addEventListener("click", function() {
        workoutDetails.innerHTML = `
            <h4>Advanced Plan: High Intensity Training</h4>
            <ul>
                <li>Day 1: Deadlifts (5 sets of 5), Squats (5 sets of 5), HIIT (40 minutes)</li>
                <li>Day 2: Active Recovery - Mobility and Stretching</li>
                <li>Day 3: Clean & Press (5 sets of 5), Pull-ups (4 sets of 10), Cardio 30 minutes</li>
                <li>Day 4: Rest</li>
                <li>Day 5: Full Body Workout with Compound Movements</li>
            </ul>
        `;
    });
});
