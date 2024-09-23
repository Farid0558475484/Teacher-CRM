import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://localhost:8089/api/tutors", {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const generateStudentDistributionData = () => {
    const labels = teachers.map((teacher) => teacher.userId);
    const studentCounts = teachers.map((teacher) => teacher.students.length);

    return {
      labels,
      datasets: [
        {
          label: "Количество студентов",
          data: studentCounts,
          backgroundColor: "rgba(75, 192, 192, 0.7)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          borderRadius: 10,
          hoverBackgroundColor: "rgba(75, 192, 192, 0.9)",
          barThickness: 40,
        },
      ],
    };
  };

  const generateTimeSlotData = () => {
    const timeSlotCounts = {};
    teachers.forEach((teacher) => {
      teacher.availableTimeSlots.forEach((slot) => {
        if (timeSlotCounts[slot.dayOfWeek]) {
          timeSlotCounts[slot.dayOfWeek]++;
        } else {
          timeSlotCounts[slot.dayOfWeek] = 1;
        }
      });
    });

    return {
      labels: Object.keys(timeSlotCounts),
      datasets: [
        {
          label: "Количество временных интервалов",
          data: Object.values(timeSlotCounts),
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

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#444" }}>
        Статистика преподавателей
      </h1>
      <div style={{ height: "500px" }}>
        <h2>Распределение студентов среди преподавателей</h2>
        <Bar
          data={generateStudentDistributionData()}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  font: {
                    size: 14,
                    family:
                      "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                  },
                  color: "#333",
                },
              },
              title: {
                display: true,
                text: "Распределение студентов среди преподавателей",
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
                    family:
                      "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
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
                    family:
                      "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                  },
                  color: "#333",
                },
              },
            },
          }}
        />
      </div>

      <div style={{ height: "500px", marginTop: "50px" }}>
        <h2>Распределение временных интервалов по дням недели</h2>
        <Pie
          data={generateTimeSlotData()}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  font: {
                    size: 14,
                    family:
                      "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                  },
                  color: "#333",
                },
              },
              title: {
                display: true,
                text: "Распределение временных интервалов по дням недели",
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
            },
          }}
        />
      </div>
    </div>
  );
}

export default Teacher;
