const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// open database in memory
let db = new sqlite3.Database(path.join(__dirname, 'database/aperoom.db'), sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.serialize(() => {
    db.each('SELECT * FROM Cocktail', (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.label);
    });
  });

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});