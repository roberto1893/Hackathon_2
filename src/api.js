console.log("test");

const eventData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/7d93abe3/events');
    const data = await response.json();

    console.log(data);

}

eventData();
console.log(eventData);



const thisFrom = document.getElementById('myForm');
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

// createdEventData =[
//         {
//         id:1,
//           name: "End of January Party",
//           date: "2024-01-31",
//           description: "Let'\''s celebrate the end of January.",
//           image_url: "https://www.getgruvi.com/cdn/shop/articles/unnamed_784c4471-e475-4caf-9aca-61d662e06f39_1000x.jpg"
//         },
//         {
//           id: 2,
//           main: true,
//             name: "PRAGUE CARNIVAL (MASOPUST) - FESTIVAL & PARADE",
//             date: "2022-02-26",
//             description: "Prague Carnival (Masopust) traces its roots back to medieval times...",
//             image_url: "http://www.progetto.cz/wp-content/uploads/2015/10/33-Masopust.jpg"
//         },
//         {
//         id:3,
//           name: "May Day",
//           date: "2024-05-01",
//           description: "Let'\''s celebrate the first of May.",
//           image_url: "https://www.getgruvi.com/cdn/shop/articles/unnamed_784c4471-e475-4caf-9aca-61d662e06f39_1000x.jpg"
//         },
//         {
//         id: 4,
//             name: "Victory Day",
//             date: "2022-05-08",
//             description: "1945, the end of the European part of World War II.",
//             image_url: "https://www.getgruvi.com/cdn/shop/articles/unnamed_784c4471-e475-4caf-9aca-61d662e06f39_1000x.jpg"
//         },
//         {
//         id:5,
//           name: "Independent Czechoslovak State Day",
//           date: "2024-10-28",
//           description: "Independence Day and Creation of Czechoslovakia in 1918.",
//           image_url: "https://www.getgruvi.com/cdn/shop/articles/unnamed_784c4471-e475-4caf-9aca-61d662e06f39_1000x.jpg"
//         },
//         {
//         id:6,
//           name: "Christmas Eve",
//           date: "2024-12-24",
//           description: "Christmas Eve celebrations",
//           image_url: "https://www.getgruvi.com/cdn/shop/articles/unnamed_784c4471-e475-4caf-9aca-61d662e06f39_1000x.jpg"
//         }
//     ];

// const submitCreatedEvents = async () => {
//     const url = 'https://test-api.codingbootcamp.cz/api/7d93abe3/events'
//     const createdEvents = createdEventData;
// }
// const myResponse = await fetch(url, {
//     "method": "POST",
//     "body": JSON.stringify(createdEventData),
//     "headers": {
//         'Content-Type': 'application/json'
//     }
// })
    
// submitCreatedEvents()
// myResponse()

// console.log(myResponse);
// console.log(submitCreatedEvents)

