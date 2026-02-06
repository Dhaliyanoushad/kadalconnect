const fs = require("fs");

function loadActivities() {
  return fs.readFileSync("activities.txt", "utf-8");
}

module.exports = loadActivities;
