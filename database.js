const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connecté à la base de données SQLite.');
        db.run(`CREATE TABLE IF NOT EXISTS personnes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            adresse TEXT
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                // Insertion de données initiales
                const personnes = ['Bob', 'Alice', 'Charlie'];
                personnes.forEach((nom, index) => {
                    const adresse = ['yassine', 'bacem', 'akkari'][index]; // Getting corresponding address
                    db.run(`INSERT INTO personnes (nom, adresse) VALUES (?, ?)`, [nom, adresse], (err) => {
                        if (err) {
                            console.error(err.message);
                        }
                    });
                });
            }
        });
    }
});

module.exports = db;
