class Event {
  constructor(id, name, date, description, image_url) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.image_url = image_url;
  }
}

async function getData() {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/7d93abe3/events"
  );
  const data = await response.json();

  // Get the last 6 items from data
  // const lastSixItems = data.slice(-6);

  // Assuming each item in data is an object with properties that match the parameters of the Event constructor
  const events = data.map(
    (item) =>
      new Event(item.id, item.name, item.date, item.description, item.image_url)
  );

  // Now you can use the events array for your widget
  events.forEach((event, index) => {
    const eventElm = document.createElement("div");
    eventElm.innerHTML = `
    <div class="event__name">${event.name}</div>
    <div class="event__date">${event.date}</div>
    <img class="event__img" src="${event.image_url}" alt="${event.name}" />
    <div class="event__dsc">${event.description}</div>
    <a class="button" href="#openModal${event.id}">Event Details</button>
    <a class="button" href="#openRegisterModal${event.id}">Register</button>
  `;

    const modalElm = document.createElement("div");
    modalElm.innerHTML = `
    <div id="openModal${event.id}" class="modalbg">
      <div class="dialog">
        <a href="#" title="Close" class="close">X</a>
        <div class="event__name">${event.name}</div>
        <div class="event__date">${event.date}</div>
        <div class="event__dsc">${event.description}</div>
      </div>
    </div>
  `;

    const registerModalElm = document.createElement("div");
    registerModalElm.innerHTML = `
    <div id="openRegisterModal${event.id}" class="modalbg">
      <div class="dialog">
        <a href="#" title="Close" class="close">X</a>
        <h2>Registration Form</h2>
        <form>
<br>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required  placeholder="George"><br><br>

    <label for="surname">Surname:</label>
    <input type="text" id="surname" name="surname" required  placeholder="Smith"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required  placeholder="example@gmail.com"><br><br>

    <label for="phone">Phone Number:</label>
    <input type="text" id="phone" name="phone" required  placeholder="+420 123 456 789"><br><br>

    <label for="age">I'm old enough to participate:</label><br>
    <input type="radio" id="yes" name="age2" required checked>Yes<br>
    <input type="radio" id="no" name="age2" required>No<br><br>
    <button type="Sumbit ">Sumbit</button>
    </form>
          </div>
    </div>
  `;

    // Append the event element and the modal to the body
    //   document.body.appendChild(eventElm);
    //   document.body.appendChild(modalElm);
    // });
    // Append the event element to the appropriate container
    // If this is the last event, append it to .event-main
    if (index === events.length - 1) {
      document.querySelector(".event-main").appendChild(eventElm);
      document.body.appendChild(modalElm); // append the modal to the body
      document.body.appendChild(registerModalElm); // append the registration modal to the body
    } else {
      document.querySelector(".event-list").appendChild(eventElm);
      document.body.appendChild(modalElm); // append the modal to the body
      document.body.appendChild(registerModalElm); // append the registration modal to the body
    }
  });
}

getData();

// Open the modal when the event details button is clicked
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(button.getAttribute("href")).style.display = "block";
  });
});

// Open the registration modal when the register button is clicked
document.querySelectorAll(".register-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(button.getAttribute("href")).style.display = "block";
  });
});

// Close the modal when the close button is clicked
document.querySelectorAll(".close").forEach((closeButton) => {
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeButton.closest(".modalbg").style.display = "none";
  });
});
