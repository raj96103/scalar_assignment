// assets/js/main.js

document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const email = document.getElementById('email').value;
    const cabType = document.getElementById('cabType').value;
    const { route, time } = calculateShortestRoute(source, destination);
    const estimatedCost = time * cabType; // Assuming cabType is the price per minute
    console.log(time,estimatedCost);
    // Display the route and estimated cost in the result div
    document.getElementById('result').innerHTML = `
        <p>Shortest Route: ${route.join(' -> ')}</p>
        <p>Estimated Time: ${time} minutes</p>
        <p>Estimated Cost: ₹${estimatedCost}</p>
    `;
});


// JavaScript function to calculate the shortest route
function calculateShortestRoute(source, destination) {
    // Define the distances between places
    const distances = {
        'A-B': 5,
        'B-D': 15,
        'D-F': 20,
        'F-E': 10,
        'B-E': 20,
        'C-E': 35,
        'A-C': 7,
        'C-D': 5,
    };

    const places = ['A', 'B', 'C', 'D', 'E', 'F'];
    const visited = {};
    const distance = {};
    const previous = {};

    places.forEach((place) => {
        distance[place] = Infinity;
        previous[place] = null;
    });

    distance[source] = 0;

    while (Object.keys(visited).length < places.length) {
        const unvisited = Object.entries(distance)
            .filter(([place, dist]) => !visited[place] && dist !== Infinity)
            .sort((a, b) => a[1] - b[1]);

        if (!unvisited.length) break;

        const [currentPlace, currentDist] = unvisited[0];

        Object.entries(distances).forEach(([places, dist]) => {
            if (places.startsWith(currentPlace) && currentDist + dist < distance[places.charAt(2)]) {
                distance[places.charAt(2)] = currentDist + dist;
                previous[places.charAt(2)] = currentPlace;
            }
        });

        visited[currentPlace] = true;
    }

    let current = destination;
    const shortestRoute = [];

    while (current !== source) {
        shortestRoute.unshift(current);
        current = previous[current];
    }

    shortestRoute.unshift(source);
    const shortestTime = distance[destination];

    return { route: shortestRoute, time: shortestTime };
}
