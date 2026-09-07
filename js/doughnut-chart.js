const doughnutCanvas = document.getElementById("doughnut-chart");

// Shadow Plugin
const doughnutShadow = {
  id: "doughnutShadow",

  beforeDatasetDraw(chart, args) {
    if (args.index !== 0) return;

    const { ctx } = chart;

    ctx.save();

    ctx.shadowColor = "rgba(50, 70, 100, 0.16)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 3;
  },

  afterDatasetDraw(chart, args) {
    if (args.index !== 0) return;

    chart.ctx.restore();
  },
};

const root = document.documentElement;
function getCSSVariable(name) {
  return getComputedStyle(root).getPropertyValue(name).trim();
}

// Center Text Plugin
const centerText = {
  id: "centerText",

  afterDraw(chart) {
    const { ctx, chartArea } = chart;

    const centerX = (chartArea.left + chartArea.right) / 2;

    const centerY = (chartArea.top + chartArea.bottom) / 2;

    ctx.save();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = "700 30px Montserrat";
    ctx.fillStyle = getCSSVariable("--color-body");
    ctx.fillText("80%", centerX, centerY - 12);
    // Transactions
    ctx.font = "500 16px Montserrat";
    ctx.fillStyle = getCSSVariable("--color-card-body");
    ctx.fillText("Transactions", centerX, centerY + 28);

    ctx.restore();
  },
};

// Chart
const doughnutChart = new Chart(doughnutCanvas, {
  type: "doughnut",

  data: {
    labels: ["Sale", "Distribute", "Return", "Remaining"],

    datasets: [
      {
        data: [
          40, // Blue
          20, // Yellow
          20, // Orange
          20, // Grey
        ],

        backgroundColor: ["#5B8DEF", "#FFD66B", "#FF8969", "#F4F7FC"],
        borderWidth: 0,
        cutout: "75%",
        spacing: 0,
        borderRadius: 20,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    rotation: 0,
    circumference: 360,

    plugins: {
      // Legend
      legend: {
        display: true,

        position: "bottom",

        labels: {
          filter: function (item) {
            return item.index !== 3;
          },

          usePointStyle: true,
          pointStyle: "rectRounded",
          boxWidth: 14,
          boxHeight: 14,
          padding: 25,
          color: getCSSVariable("--color-card-body"),
          font: {
            family: "Montserrat",
            size: 14,
            weight: "600",
          },
        },
      },

      // Tooltip
      tooltip: {
        enabled: true,
        backgroundColor: "#111827",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 10,
        cornerRadius: 8,
        displayColors: false,

        callbacks: {
          label: function (context) {
            if (context.dataIndex === 3) {
              return "";
            }

            return context.label + ": " + context.parsed + "%";
          },
        },
      },
    },
  },

  plugins: [doughnutShadow, centerText],
});
