document.getElementById('insertForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('age').value;
    const color = document.getElementById('age').value;
    const car = document.getElementById('age').value;
    const state = document.getElementById('age').value;
    const country = document.getElementById('age').value;
    const civil = document.getElementById('age').value;


    const response = await fetch('/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, datas: {age, location, color, car, state, country, civil }})
    });

    const result = await response.json();
    console.log(result);
});