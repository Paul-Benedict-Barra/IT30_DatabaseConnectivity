# IT30_DatabaseConnectivity
# Quick Clicker Challenge - Database Connectivity Prototype

## Project Information
* **Group Number:** IT30
* **Course:** Capstone / Systems Fundamentals
* **Members:**
  * Member 1 Name - Alomia, Kurt Andrei
  * Member 2 Name - Barra, Paul Benedict
  * Member 3 Name - Geronimo, Justine Lance
 

---

## Project Overview
This project is a browser-based prototype created for the Database Connectivity Laboratory Activity. It demonstrates how a front-end game interface interacts with browser data storage (`localStorage`) to save, retrieve, and render persistent player performance records in real time.

---

## Game Features
* **Interactive Gameplay:** Simple clicker mechanism to generate a player score.
* **Player Input:** Text input to record player names/nicknames.
* **Persistent Data Storage:** Saves player scores directly into browser `localStorage`.
* **Dynamic Display:** Retrieves and populates historical scores inside an in-game leaderboard table.

---

## Data Structure
The application stores records in JSON format under the key `player_scores`.

| Field Name | Data Type | Description |
| :--- | :--- | :--- |
| `player_id` | Number | Unique timestamp identifier (`Date.now()`) |
| `player_name` | String | Player name/nickname |
| `score` | Number | Points earned during the session |
| `created_at` | String | Local date and time of record creation |

---

## Tools and Technologies Used
* **Front-End:** HTML5, CSS3, JavaScript (ES6)
* **Storage Engine:** Browser Web Storage API (`localStorage`)
* **Development Tools:** Visual Studio Code, Google Chrome DevTools
* **Version Control:** Git & GitHub

---

## How to Run the Prototype
1. Clone or download this repository.
2. Open the project folder.
3. Double-click `index.html` to open and run the game directly in any modern web browser.
4. Enter a player name, click the **CLICK ME!** button to build points, and click **Save Score**.

---

## Known Limitations
* Data is stored locally in the specific browser and client machine used.
* Scores do not sync across different physical devices or separate browsers (no remote cloud server attached).

---

## References
* [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [MDN Working with JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

```
