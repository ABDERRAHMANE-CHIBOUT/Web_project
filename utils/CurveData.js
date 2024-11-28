const CData = {
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Labels for the x-axis
      datasets: [
        {
          label: 'Weekly Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#666990',
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Curved Line Chart',
        },
      },
      scales: {
        x: {
          grid: {
            display: false, // Remove gridlines from the x-axis
          },
        },
        y: {
          beginAtZero: true, // Start the y-axis from 0
        },
      },
    },
  };
  
  export default CData;
  