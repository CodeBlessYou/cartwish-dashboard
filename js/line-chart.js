const canvas = document.getElementById("line-chart");
const ctx = canvas.getContext("2d");

// Gradient below the line
const gradient = ctx.createLinearGradient(0, 0, 0, 350);

gradient.addColorStop(0, "rgba(59, 130, 246, 0.20)");
gradient.addColorStop(0.35, "rgba(59, 130, 246, 0.10)");
gradient.addColorStop(0.7, "rgba(59, 130, 246, 0.04)");
gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

// Create chart
new Chart(ctx, {
  type: "line",

  data: {
    labels: [
      "5k",
      "8k",
      "10k",
      "12k",
      "15k",
      "18k",
      "20k",
      "24k",
      "27k",
      "30k",
      "35k",
    ],

    datasets: [
      {
        data: [20, 30, 49, 36, 31, 52, 89, 50, 46, 54, 27],

        borderColor: "#3B82F6",
        borderWidth: 2,

        // Smooth line
        tension: 0.35,

        // Gradient under line
        backgroundColor: gradient,
        fill: true,

        // Hide points
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#3B82F6",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

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
            return context.parsed.y + "%";
          },
        },
      },
    },

    interaction: {
      mode: "index",
      intersect: false,
    },

    scales: {
      // X axis
      x: {
        grid: {
          display: false,
        },

        border: {
          display: false,
        },

        ticks: {
          color: "#9CA3AF",
          font: {
            size: 12,
            family: "Montserrat",
            weight: "500",
          },

          padding: 2,
        },
      },

      // Y axis
      y: {
        min: 0,
        max: 100,

        ticks: {
          stepSize: 20,

          color: "#9CA3AF",

          font: {
            size: 12,
            family: "Montserrat",
            weight: "500",
          },

          padding: 2,

          callback: function (value) {
            return value + "%";
          },
        },

        grid: {
          color: "#EEF0F3",
          lineWidth: 0.5,
        },

        border: {
          display: false,
        },
      },
    },
  },
});
