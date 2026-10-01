let selectedMovie = null;

let movies = {
    1: {
        name: "Avengers: Welcome to The Jungle",
        price: 350,
        seats: 10
    },

    2: {
        name: "Jungle Cruise",
        price: 300,
        seats: 8
    },

    3: {
        name: "Spider-Man: No Way Home",
        price: 400,
        seats: 12
    },

    4: {
        name: "Toy Story 4",
        price: 250,
        seats: 6
    }
};

let bookings = [];

function selectMovie(id, name, price, seats) {

    selectedMovie = id;

    document.getElementById("selectedMovie").innerText =
        "Selected Movie: " + name +
        " | Price: ₹" + price;
}

function bookTicket() {

    if (selectedMovie === null) {
        alert("Please select a movie first.");
        return;
    }

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let quantity = parseInt(document.getElementById("quantity").value);

    if (name === "" || phone === "") {
        alert("Please enter your name and phone number.");
        return;
    }

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid ticket quantity.");
        return;
    }

    let movie = movies[selectedMovie];

    if (quantity > movie.seats) {
        alert("Not enough seats available.");
        return;
    }

    let total = quantity * movie.price;

    movie.seats -= quantity;

    bookings.push({
        name: name,
        phone: phone,
        movie: movie.name,
        tickets: quantity,
        total: total
    });

    document.getElementById("seats" + selectedMovie).innerText =
        movie.seats;

    document.getElementById("message").innerHTML =
        "✅ Booking Successful! Total Bill: ₹" + total;

    displayBookings();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("quantity").value = 1;
}

function displayBookings() {

    let history = document.getElementById("bookingHistory");

    history.innerHTML = "";

    bookings.forEach(function(booking, index) {

        history.innerHTML += `
            <div class="booking-item">
                <strong>Booking #${index + 1}</strong><br>
                Name: ${booking.name}<br>
                Movie: ${booking.movie}<br>
                Tickets: ${booking.tickets}<br>
                Total: ₹${booking.total}
            </div>
        `;
    });
}