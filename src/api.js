console.log("test");

const eventData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/7d93abe3/events');
    const data = await response.json();

    console.log(data);

}
eventData();
console.log(eventData);

const thisFrom = document.getElementById('popupForm');
thisFrom.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('https://test-api.codingbootcamp.cz/api/7d93abe3/events/{event_id}/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
})

console.log(thisForm);


