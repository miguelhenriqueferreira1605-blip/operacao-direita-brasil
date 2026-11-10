/**
 * OPERAÇÃO DIREITA BRASIL — MÓDULO DE VISUALIZAÇÃO DE DADOS (CHART.JS)
 * Gráficos interativos com rigor metodológico e estética de think tank.
 */

let activeChartInstance = null;

function initCharts() {
  const ctx = document.getElementById("mainDashboardChart");
  if (!ctx) return;

  // Carrega o primeiro indicador por padrão (Liberdade Econômica)
  renderIndicatorChart("ind-liberdade");
}

function renderIndicatorChart(indicatorId) {
  const dataStore = window.ODB_DATA;
  if (!dataStore) return;

  const indicator = dataStore.indicators.find(i => i.id === indicatorId);
  if (!indicator) return;

  // Atualiza painel de metadados ao lado do gráfico
  const titleEl = document.getElementById("chartTitle");
  const valueEl = document.getElementById("chartValue");
  const statusEl = document.getElementById("chartStatus");
  const sourceEl = document.getElementById("chartSource");
  const contextEl = document.getElementById("chartContext");
  const methodEl = document.getElementById("chartMethodology");

  if (titleEl) titleEl.innerText = indicator.title;
  if (valueEl) valueEl.innerText = indicator.score;
  if (statusEl) statusEl.innerText = indicator.status;
  if (sourceEl) sourceEl.innerText = indicator.source;
  if (contextEl) contextEl.innerText = indicator.context;
  if (methodEl) methodEl.innerText = indicator.methodology;

  // Destrói gráfico anterior se existir
  if (activeChartInstance) {
    activeChartInstance.destroy();
  }

  const canvas = document.getElementById("mainDashboardChart");
  const ctx = canvas.getContext("2d");

  // Configuração de cores baseadas no tema institucional
  const labels = indicator.historical.map(h => h.label);
  const values = indicator.historical.map(h => h.val);

  // Gradient para o preenchimento da área
  const gradient = ctx.createLinearGradient(0, 0, 0, 320);
  gradient.addColorStop(0, "rgba(212, 175, 55, 0.35)");
  gradient.addColorStop(1, "rgba(212, 175, 55, 0.0)");

  const isBarChart = indicator.id === "ind-saneamento";

  activeChartInstance = new Chart(ctx, {
    type: isBarChart ? "bar" : "line",
    data: {
      labels: labels,
      datasets: [{
        label: indicator.title,
        data: values,
        backgroundColor: isBarChart ? "rgba(16, 185, 129, 0.75)" : gradient,
        borderColor: isBarChart ? "#10B981" : "#D4AF37",
        borderWidth: 2.5,
        fill: !isBarChart,
        tension: 0.35,
        pointBackgroundColor: "#F6D365",
        pointBorderColor: "#0B132B",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "rgba(11, 19, 43, 0.95)",
          titleColor: "#F6D365",
          bodyColor: "#F1F5F9",
          borderColor: "rgba(212, 175, 55, 0.4)",
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              const unit = indicator.id === "ind-liberdade" ? " pontos" :
                           indicator.id === "ind-inflacao" || indicator.id === "ind-desemprego" || indicator.id === "ind-divida" ? "%" :
                           indicator.id === "ind-saneamento" ? " bilhões R$" : " por 100k";
              return `Valor: ${context.parsed.y}${unit}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: "rgba(255, 255, 255, 0.06)",
            drawBorder: false
          },
          ticks: {
            color: "#94A3B8",
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11
            }
          }
        },
        y: {
          grid: {
            color: "rgba(255, 255, 255, 0.06)",
            drawBorder: false
          },
          ticks: {
            color: "#94A3B8",
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11
            }
          }
        }
      }
    }
  });

  // Atualiza botões ativos no seletor
  document.querySelectorAll(".indicator-btn").forEach(btn => {
    if (btn.dataset.id === indicatorId) {
      btn.classList.add("border-amber-400", "bg-amber-500/10", "text-amber-300");
      btn.classList.remove("border-slate-800", "text-slate-300");
    } else {
      btn.classList.remove("border-amber-400", "bg-amber-500/10", "text-amber-300");
      btn.classList.add("border-slate-800", "text-slate-300");
    }
  });
}

// Inicializa no evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Se o Chart.js já estiver carregado, inicializa
  if (typeof Chart !== "undefined") {
    initCharts();
  } else {
    window.addEventListener("load", initCharts);
  }
});
