console.log('App initialized');
const focusRange = document.getElementById('focusRange');
const focusValue = document.getElementById('focusValue');

focusRange.addEventListener('input', () => {
  focusValue.textContent = focusRange.value;
});

const STORAGE_KEY = 'moodEntries';
const historyList = document.getElementById('historyList');
let entries = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function addEntry() {
  const entry = {
    date: new Date().toLocaleDateString(),
    mood: document.getElementById('moodSelect').value,
    focus: focusRange.value
  };

  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  entries.forEach(e => {
    const li = document.createElement('li');
    li.textContent = `${e.date} — ${e.mood}, Focus: ${e.focus}`;
    historyList.appendChild(li);
  });
}

document.getElementById('addEntryBtn').addEventListener('click', addEntry);
renderHistory();

let chart;

function renderChart() {
  const ctx = document.getElementById('chart');

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: entries.map(e => e.date),
      datasets: [{
        data: entries.map(e => e.focus),
        borderColor: '#5b7cfa',
        tension: 0.4
      }]
    }
  });
}
