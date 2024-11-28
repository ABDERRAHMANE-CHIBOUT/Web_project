const CrData =
    {
      data: {
        labels: ['tshirts', 'shoes', 'pants'],
        datasets: [
          {
            label: 'DA',
            data: [12000, 19000, 30000],
            backgroundColor: [
              'white',
              '#FE9D72',
              '#A6ABFF',
            ],
            borderRadius: 10,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '88%', 
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    };

  export default CrData;