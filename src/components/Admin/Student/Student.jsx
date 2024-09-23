import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:8089/api/students", {
          headers: {
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const generateChartData = () => {
    const labels = students.map((student) => student.userId);
    const lessonCounts = students.map((student) => student.purchasedLessons.length);
    const courseCounts = students.map((student) => student.purchasedCourses.length);

    return {
      labels,
      datasets: [
        {
          label: "Купленные уроки",
          data: lessonCounts,
          backgroundColor: "rgba(75, 192, 192, 0.7)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          borderRadius: 10,
          hoverBackgroundColor: "rgba(75, 192, 192, 0.9)",
          barThickness: 40,
        },
        {
          label: "Купленные курсы",
          data: courseCounts,
          backgroundColor: "rgba(255, 159, 64, 0.7)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 2,
          borderRadius: 10,
          hoverBackgroundColor: "rgba(255, 159, 64, 0.9)",
          barThickness: 40,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: "Распределение студентов по количеству купленных курсов и уроков",
        font: {
          size: 20,
          weight: "bold",
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        color: "#333",
        padding: {
          top: 20,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: {
          size: 16,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        padding: 10,
        cornerRadius: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          color: "#333",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
        ticks: {
          font: {
            size: 12,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          color: "#333",
        },
      },
    },
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#444" }}>
        Статистика студентов
      </h1>
      <div style={{ height: "500px" }}>
        <Bar data={generateChartData()} options={chartOptions} />
      </div>
    </div>
  );
}

export default Student;