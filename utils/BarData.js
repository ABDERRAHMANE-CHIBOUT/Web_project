const BData = [
    {
        labels: ['sun', 'mon', 'thu', 'wed', 'tue', 'fri', 'sat'],
        datasets: [
          {
            label: '',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#4E5359',
            hoverBackgroundColor: '#FE9D72',
            borderRadius: 10,
            barThickness: 15,
          },
        ],
    },
    {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Monthly Sales Data',
          },
        },
    }
]
export default BData;