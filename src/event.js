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
      <a class="button" href="#openModal">Event Details</a>
    `;

    // Append the event element to the appropriate container
    // If this is the last event, append it to .event-main
    if (index === events.length - 1) {
      document.querySelector(".event-main").appendChild(eventElm);
    } else {
      document.querySelector(".event-list").appendChild(eventElm);
    }
  });
}

getData();
