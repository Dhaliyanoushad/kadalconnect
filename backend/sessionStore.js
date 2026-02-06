const sessions = {};

function getSession(id) {
  if (!sessions[id]) sessions[id] = [];
  return sessions[id];
}

function addMessage(id, role, content) {
  sessions[id].push({ role, content });

  if (sessions[id].length > 6) sessions[id].shift();
}

module.exports = { getSession, addMessage };
