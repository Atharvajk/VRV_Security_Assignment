const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../logs'); // Logs directory
const logFilePath = path.join(logDir, 'access.log'); // Log file path

// Ensure the logs directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logToFile = (message) => {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`);
};

exports.logRequest = (req, res, next) => {
  const { method, url, user } = req;
  const userId = user ? user.id : 'Guest';
  logToFile(`${method} ${url} by User: ${userId}`);
  next();
};
