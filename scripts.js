// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('booking-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const teacher = document.getElementById('teacher').value;

    // Save appointment
    saveAppointment(name, email, date, time, teacher);

    // Show confirmation
    document.getElementById('confirmation').innerText = "Appointment booked successfully!";
    document.getElementById('booking-form').reset();
}

// Save appointment to Firestore
function saveAppointment(name, email, date, time, teacher) {
    db.collection('appointments').add({
        name: name,
        email: email,
        date: date,
        time: time,
        teacher: teacher
    }).then(() => {
        console.log('Appointment saved!');
    }).catch(error => {
        console.error('Error saving appointment: ', error);
    });
}
