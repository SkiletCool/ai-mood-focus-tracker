console.log('App initialized');

const focusRange = document.getElementById('focusRange');
const focusValue = document.getElementById('focusValue');
const historyList = document.getElementById('historyList');
const aiAdvice = document.getElementById('aiAdvice');

const STORAGE_KEY = 'moodEntries';
let entries = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let chart;

/* ===== UI ===== */

focusRange.addEventListener('input', () => {
  focusValue.textContent = focusRange.value;
});

/* ===== Core Logic ===== */

function addEntry() {
  const mood = document.getElementById('moodSelect').value;
  const focus = Number(focusRange.value);

  const entry = {
    date: new Date().toLocaleDateString(),
    mood,
    focus
  };

  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));

  renderHistory();
  renderChart();
  updateAIAdvice(mood);
}

/* ===== Rendering ===== */

function renderHistory() {
  historyList.innerHTML = '';
  entries.forEach(e => {
    const li = document.createElement('li');
    li.textContent = `${e.date} — ${e.mood}, Focus: ${e.focus}`;
    historyList.appendChild(li);
  });
}

function renderChart() {
  const ctx = document.getElementById('chart');

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: entries.map(e => e.date),
      datasets: [{
        label: 'Focus Level',
        data: entries.map(e => e.focus),
        borderColor: '#5b7cfa',
        backgroundColor: 'rgba(91,124,250,0.2)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

/* ===== AI Advice ===== */

function updateAIAdvice(mood) {
  const adviceMap = {
    happy: 'You have great energy today. Do deep work!',
    neutral: 'Stay consistent and focus on small wins.',
    sad: 'Take breaks and reduce cognitive load.'
  };

  aiAdvice.textContent = adviceMap[mood];
}

/* ===== Init ===== */

document.getElementById('addEntryBtn')
  .addEventListener('click', addEntry);

renderHistory();
renderChart();
