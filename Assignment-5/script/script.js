const themeBtn = document.querySelector("#theme-btn");
let btnClicked = 0;
themeBtn.addEventListener("click", () => {
  const Colors = [
    "#EFF6FF",
    "#343a40",
    "#b8c0ff",
    "#31572c",
    "#ffc2d1",
    "#fb6f92",
    "#E3F2FD",
    "#E0F7FA",
    "#F0F4FF",
    "#E6F0FF",
    "#ECF5FF",
    "#E8F3FC",
    "#DDEFFD",
    "#F0FAFF",
    "#E9F7FF",
    "#240046",
  ];
  let bgColor = (document.body.style.backgroundColor = Colors[btnClicked]);
  if (btnClicked === Colors.length - 1) {
    btnClicked = 0;
  }

  btnClicked++;
});

// doning the month and date dynaminc

const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dateData = new Date();
const year = dateData.getFullYear();
const date = dateData.getDate();
const month = dateData.getMonth();
const day = dateData.getDay();

const presentDay = document.querySelector("#day");
presentDay.textContent = `${shortDays[day]} ,`;

const presentMonth = document.querySelector("#month");
presentMonth.textContent = `${monthName[month]} ${date} ${year}`;

const deathLine = document.querySelectorAll(".death-line");
deathLine.forEach((el) => {
  let randomDate = date + Math.floor(Math.random() * 10);
  let randomMonthIndex = (month + Math.floor(Math.random() * 3)) % 12;
  el.textContent = `${randomDate} ${monthName[randomMonthIndex]} ${year}`;
});

const blog = document.querySelector("#blog");
blog.addEventListener("click", () => {
  open("./blogs.html");
});
const mainContainer = document.querySelector("#main-container");
const availableJob = mainContainer.querySelectorAll(".contanined-item");
const taskHolder = availableJob.length;

const task = document.querySelector("#task");
const completedTask = document.querySelector("#complied-task");

if (task) {
  task.textContent = taskHolder;
}

if (task.textContent == taskHolder) {
  completedTask.textContent = 0;
}
const jobeDone = document.querySelectorAll(".job-done");

for (let job of jobeDone) {
  job.addEventListener("click", (event) => {
    event.target.disabled = true;
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    const container = event.target.closest(".contanined-item");
    const problem = container.querySelector(".problem");
    let title = problem.textContent;

    const peragraph = document.createElement("p");
    peragraph.textContent = `You have successfully done ${title} at ${hour}:${minute}:${seconds}`;
    peragraph.classList.add("log-info");

    const log = document.querySelector("#log");
    log.insertBefore(peragraph, log.firstChild);

    const clearHistory = document.querySelector("#clear-history");
    clearHistory.addEventListener("click", () => {
      peragraph.classList.add("hidden");
    });

    task.textContent--;
    completedTask.textContent++;
    if (task.textContent == 0) {
      alert("You have successfully done the job");
      alert("GOOD! All the job is done");
    } else {
      alert("You have successfully done the job");
    }
  });
}
