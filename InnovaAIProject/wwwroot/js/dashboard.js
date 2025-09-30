document.addEventListener("DOMContentLoaded", () => {
    // Circular Progress Chart (Score)
    const scoreCtx = document.getElementById("scoreChart");
    if (scoreCtx) {
        const scoreChart = new Chart(scoreCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        data: [87, 13], // 8.7 out of 10
                        backgroundColor: ["#E6E600", "#0033a0"],
                        borderWidth: 0,
                        cutout: "70%",
                    },
                ],
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
            },
        });
    }

    // Monthly Ideas Bar Chart
    const monthlyCtx = document.getElementById("monthlyChart");
    if (monthlyCtx) {
        // Definir altura fixa para o canvas
        monthlyCtx.height = 300;
        
        const monthlyChart = new Chart(monthlyCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [
                    {
                        label: "Ideias por mês",
                        data: [130, 110, 85, 140, 120, 60, 80, 40, 30, 70, 90, 100],
                        backgroundColor: "#E6E600",
            borderColor: "#E6E600",
                        borderWidth: 1,
                        borderRadius: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)",
                        },
                        max: 200, // Definir valor máximo para o eixo Y
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });
    }
});