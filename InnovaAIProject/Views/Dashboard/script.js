import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
    const scoreCtx = document.getElementById("scoreChart").getContext("2d")
    const scoreChart = new Chart(scoreCtx, {
        type: "doughnut",
        data: {
            datasets: [
                {
                    data: [87, 13],
                    backgroundColor: ["#0d6efd", "#E6E600"],
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
    })

    const monthlyCtx = document.getElementById("monthlyChart").getContext("2d")
    const monthlyChart = new Chart(monthlyCtx, {
        type: "bar",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    data: [140, 130, 135, 65, 105, 145, 85, 120, 45, 25, 120, 65, 55, 95],
                    backgroundColor: "#E6E600",
                borderColor: "#E6E600",
                    borderWidth: 1,
                    borderRadius: 4,
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
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 150,
                    ticks: {
                        stepSize: 30,
                        callback: (value) => value,
                    },
                    grid: {
                        color: "#e9ecef",
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    })
})
