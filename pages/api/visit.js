import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./visitorCount.db');

// SQLite 테이블 생성
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT UNIQUE,
      count INTEGER
    )
  `);
});

export default function handler(req, res) {
  if (req.method === 'GET') {
    const today = new Date().toISOString().slice(0, 10);

    db.serialize(() => {
      db.run(
        `
        INSERT INTO visitors (date, count)
        VALUES (?, 1)
        ON CONFLICT(date) DO UPDATE SET count = count + 1
      `,
        [today]
      );
  
      db.get(
        'SELECT SUM(count) as totalVisitors FROM visitors',
        (err, rowTotal) => {
          db.get(
            'SELECT count FROM visitors WHERE date = ?',
            [today],
            (err, rowToday) => {
              res.json({
                todayVisitors: rowToday ? rowToday.count : 0,
                totalVisitors: rowTotal ? rowTotal.totalVisitors : 0,
              });
            }
          );
        }
      );
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
