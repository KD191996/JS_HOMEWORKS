(function () {
  function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);

    this.getAge = function () {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    };

    this.getAverageGrade = function () {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return Math.ceil(sum / this.grades.length);
    };

    this.present = function () {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      }
    };

    this.absent = function () {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      }
    };

    this.summary = function () {
      const averageGrade = this.getAverageGrade();
      const attendedClasses = this.attendance.filter(
        (status) => status === true,
      ).length;
      const totalClasses = this.attendance.filter(
        (status) => status !== null,
      ).length;
      const averageAttendance = attendedClasses / totalClasses;

      if (averageGrade > 90 && averageAttendance > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || averageAttendance > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    };
  }

  // Створення екземплярів
  const student1 = new Student("Іван", "Петренко", 2000);
  const student2 = new Student("Олена", "Коваленко", 1999);
  const student3 = new Student("Олексій", "Сидоренко", 2001);

  student1.grades.push(95, 88, 92);
  student2.grades.push(70, 80, 75);
  student3.grades.push(85, 87, 90);

  student1.present();
  student1.present();
  student1.absent();

  student2.present();
  student2.absent();
  student2.absent();

  student3.present();
  student3.present();
  student3.present();

  console.log(
    `${student1.firstName} ${student1.lastName}, Вік: ${student1.getAge()}`,
  );
  console.log(`Середній бал: ${student1.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student1.attendance.join(" ")}`);
  console.log(`Summary: ${student1.summary()}`);

  console.log(
    `${student2.firstName} ${student2.lastName}, Вік: ${student2.getAge()}`,
  );
  console.log(`Середній бал: ${student2.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student2.attendance.join(" ")}`);
  console.log(`Summary: ${student2.summary()}`);

  console.log(
    `${student3.firstName} ${student3.lastName}, Вік: ${student3.getAge()}`,
  );
  console.log(`Середній бал: ${student3.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student3.attendance.join(" ")}`);
  console.log(`Summary: ${student3.summary()}`);
})();
