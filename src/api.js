
const eventData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/7d93abe3/events')
    const data = await response.json();

    console.log.apply(data)

}

eventData();