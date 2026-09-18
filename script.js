let currentScore = 0;

// Step 7: Game logic
function clickTarget() {
    currentScore++;
    document.getElementById('score').innerText = currentScore;
}

// Step 8: Save data to browser localStorage
function saveData() {
    const nameInput = document.getElementById('playerName').value.trim();
    if (!nameInput) {
        alert("Please enter a player name first!");
        return;
    }

    const newRecord = {
        player_id: Date.now(),
        player_name: nameInput,
        score: currentScore,
        created_at: new Date().toLocaleString()
    };

    // Retrieve existing array or create empty one
    let existingRecords = JSON.parse(localStorage.getItem('player_scores')) || [];
    existingRecords.push(newRecord);

    // Save back to storage
    localStorage.setItem('player_scores', JSON.stringify(existingRecords));

    alert("Data saved successfully!");
    displayData();
}

// Step 8: Retrieve & Display data
function displayData() {
    const records = JSON.parse(localStorage.getItem('player_scores')) || [];
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    records.forEach(record => {
        const row = `<tr>
            <td>${record.player_name}</td>
            <td>${record.score}</td>
            <td>${record.created_at}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Automatically load existing records on startup
window.onload = displayData;