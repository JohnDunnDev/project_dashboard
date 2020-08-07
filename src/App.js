import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
moment().format();

/* Variables and arrays */

let username = "JohnDunnDev";
let userPic =
  "https://pbs.twimg.com/profile_images/1258823083521126403/4FEC-SJ5_400x400.jpg";

let exampleProject = {
  id: "ddmmyyyy-001",
  title: "",
  description: "",
  status: "open",
  startDate: "dateObject",
  ongoing: false,
  endDate: "dateObject",
  timeNeeded: 10,
  priority: "medium",
  color: "blue"
};
let exampleTask = {
  id: "projectId-001",
  projectId: "projectId",
  title: "",
  description: "",
  status: "open",
  startDate: "dateObject",
  endDate: "dateObject",
  timeNeeded: 1,
  priority: "medium",
  color: "blue"
};
let exampleScheduleItem = {
  id: "ddmmyyyy-001",
  title: "",
  description: "",
  startDate: "dateObject",
  endDate: "dateObject",
  timeNeeded: 1
};

let todayObj = moment();

let projectArr = [
  {
    id: "20072020-001",
    title: "This is a project title",
    description:
      "This is a project description. Just a general overview of what this project is trying to accomplish.",
    status: "open",
    startDate: moment(1595458800000),
    ongoing: false,
    endDate: moment(1598828400000),
    timeNeeded: 10,
    priority: "high",
    color: "blue"
  },
  {
    id: "20072020-002",
    title: "Projects are color coded",
    description:
      "That means that wherever you see this color in the app, you know it's referring to this project.",
    status: "open",
    startDate: moment(1595458800000),
    ongoing: false,
    endDate: moment(1601420400000),
    timeNeeded: 15,
    priority: "medium",
    color: "purple"
  },
  {
    id: "20072020-003",
    title: "This is another project",
    description:
      "And this is another project description, who woulda thunk it.",
    status: "open",
    startDate: moment(1595458800000),
    ongoing: false,
    endDate: moment(1604102400000),
    timeNeeded: 20,
    priority: "medium",
    color: "pink"
  },
  {
    id: "20072020-004",
    title: "Complete the project dashboard",
    description: "I would like to create a project dashboard.",
    status: "open",
    startDate: moment(1595458800000),
    ongoing: false,
    endDate: moment(1604102400000),
    timeNeeded: 25,
    priority: "medium",
    color: "red"
  }
];

let taskArr = [
  {
    id: "20072020-001-001",
    projectId: "20072020-001",
    title: "This is a regular project task",
    description: "This is the description.",
    status: "open",
    startDate: moment(1595199600000),
    endDate: moment(1598828400000),
    timeNeeded: 5,
    priority: "medium",
    color: "blue"
  },
  {
    id: "20072020-001-002",
    projectId: "20072020-001",
    title: "This is an important project task",
    description: "This is the description for the important task.",
    status: "open",
    startDate: moment(1595458800000),
    endDate: moment(1596150000000),
    timeNeeded: 5,
    priority: "high",
    color: "blue"
  },
  {
    id: "20072020-002-001",
    projectId: "20072020-002",
    title: "This is the first project task",
    description: "This is the description.",
    status: "open",
    startDate: moment(1595458800000),
    endDate: moment(1597964399999),
    timeNeeded: 10,
    priority: "high",
    color: "purple"
  },
  {
    id: "20072020-002-002",
    projectId: "20072020-002",
    title: "This is the second project task",
    description: "This is the description.",
    status: "open",
    startDate: moment(1595545200000),
    endDate: moment(1601420400000),
    timeNeeded: 5,
    priority: "medium",
    color: "purple"
  },
  {
    id: "20072020-003-001",
    projectId: "20072020-003",
    title: "This is the first project task",
    description: "This is the description.",
    status: "open",
    startDate: moment(1595458800000),
    endDate: moment(1604102400000),
    timeNeeded: 10,
    priority: "medium",
    color: "pink"
  },
  {
    id: "20072020-003-002",
    projectId: "20072020-003",
    title: "This is the second project task",
    description: "This is the description.",
    status: "open",
    startDate: moment(1595458800000),
    endDate: moment(1604102400000),
    timeNeeded: 10,
    priority: "high",
    color: "pink"
  },
  {
    id: "20072020-004-001",
    projectId: "20072020-004",
    title: "This is the first project task",
    description: "This is the description.",
    status: "open",
    startDate: moment(1595458800000),
    endDate: moment(1606694400000),
    timeNeeded: 15,
    priority: "high",
    color: "red"
  },
  {
    id: "20072020-004-002",
    projectId: "20072020-004",
    title: "This is the second project task",
    description: "This is the description.",
    status: "open",
    startDate: moment(1595458800000),
    endDate: moment(1606694400000),
    timeNeeded: 10,
    priority: "low",
    color: "red"
  }
];

let scheduleArr = [
  {
    id: "26072020-001",
    title: "Meeting with designer",
    description: "Meet with designer to discuss recent changes",
    startDate: moment(1595754000000),
    endDate: moment(1595757600000),
    timeNeeded: 1
  },
  {
    id: "26072020-002",
    title: "Give overview of projects",
    description:
      "Meet with manager to give overview or projects, any concerns, bottlenecks, etc.",
    startDate: moment(1595759400000),
    endDate: moment(1595761200000),
    timeNeeded: 0.5
  },
  {
    id: "26072020-003",
    title: "Call with developer",
    description:
      "Discuss yesterday's meeting with designer and advise of changes.",
    startDate: moment(1595836800000),
    endDate: moment(1595840400000),
    timeNeeded: 1
  },
  {
    id: "26072020-004",
    title: "Meeting with team",
    description: "Chill session to catch up with everyone",
    startDate: moment(1595851200000),
    endDate: moment(1595854800000),
    timeNeeded: 1
  },
  {
    id: "26072020-005",
    title: "One to one",
    description: "One to one with line manager",
    startDate: moment(1595923200000),
    endDate: moment(1595926800000),
    timeNeeded: 1
  },
  {
    id: "26072020-006",
    title: "Coaching session",
    description:
      "Sit down with junior dev to go through our stack and answer any questions.",
    startDate: moment(1595937600000),
    endDate: moment(1595941200000),
    timeNeeded: 1
  },
  {
    id: "26072020-007",
    title: "Meeting with designer",
    description:
      "Take a look at their requested changes to the product after being completed by dev.",
    startDate: moment(1596009600000),
    endDate: moment(1596013200000),
    timeNeeded: 1
  },
  {
    id: "26072020-008",
    title: "Give overview of projects",
    description:
      "Meet with manager to give overview or projects, any concerns, bottlenecks, etc.",
    startDate: moment(1596018600000),
    endDate: moment(1596020400000),
    timeNeeded: 0.5
  }
];

/* NAVIGATION */

function AccountNav(props) {
  return (
    <div className="account-nav">
      <div className="username">
        <a href="_blank">{props.username}</a>
      </div>
      <div className="account-nav-links">
        <img src={props.userPic} alt="Profile pic" className="profile-pic" />
        <button className="nav-icon" id="notificationsButton">
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bell-icon"
          >
            <path
              d="M20 0C8.95432 2 5 12.9543 5 24L0 32H40L35 24C35 12.9543 30.5 2 20 0Z"
              fill="#959BCD"
            />
            <path
              d="M20 40C13.5 40 15 35 15 35H25C25 35 27.5 40 20 40Z"
              fill="#959BCD"
            />
          </svg>
        </button>
        <button className="nav-icon" id="settingsButton">
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="setting-icon"
          >
            <path
              d="M26.5787 0C26.5787 0 26.5787 3.93102 20.2213 3.93102C13.8639 3.93102 13.8639 0 13.8639 0C12.6345 0.381893 11.4534 0.871605 10.332 1.45793C10.332 1.45793 11.7447 4.62968 8.21282 8.12293C4.68091 11.6162 1.47406 10.2189 1.47406 10.2189C0.88125 11.3281 0.386118 12.4962 0 13.7121C0 13.7121 4.68091 14.4108 4.68091 20C4.68091 25.5892 0 26.2879 0 26.2879C0.552152 28.0266 0.509197 28.2704 1.47406 29.7811C1.47406 29.7811 4.6809 29.0825 8.21282 32.5757C11.7447 36.069 10.332 38.5421 10.332 38.5421C11.4534 39.1284 12.6345 39.6181 13.8639 40C13.8639 40 13.8639 35.3703 20.2213 35.3703C26.5787 35.3703 26.5787 40 26.5787 40C27.8081 39.6181 28.9892 39.1284 30.1107 38.5421C30.1107 38.5421 29.4043 36.069 32.2298 32.5757C35.0553 29.0825 38.9686 29.7811 38.9686 29.7811C39.9334 28.2704 39.4478 28.0266 40 26.2879C40 26.2879 35.7617 26.2879 35.7617 20C35.7617 13.7121 40 14.4108 40 14.4108C39.6139 13.1949 39.5614 11.3281 38.9686 10.2189C38.9686 10.2189 35.0553 10.9175 32.2298 8.12293C29.4043 5.32833 30.1107 1.45793 30.1107 1.45793C28.9892 0.871604 27.8081 0.381892 26.5787 0Z"
              fill="#959BCD"
            />
            <ellipse
              cx="20.2213"
              cy="20"
              rx="7.06382"
              ry="6.98651"
              fill="#25294A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.changeActiveNav = this.changeActiveNav.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
    this.navigateProjects = this.navigateProjects.bind(this);
    this.navigateTasks = this.navigateTasks.bind(this);
    this.navigateSchedule = this.navigateSchedule.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(text) {
    this.props.changePage(text);
  }

  changeActiveNav(newNav) {
    const currentActive = document.querySelector(".active-nav");
    currentActive.classList.remove("active-nav");
    newNav.classList.add("active-nav");
  }

  navigateHome(e) {
    const homeNav = document.querySelector(".home-nav");
    const activeBar = document.querySelector(".active-bar");
    this.changeActiveNav(homeNav);
    activeBar.style.transform = "translateY(1.4375rem)";
    this.changePage("home");
  }

  navigateProjects(e) {
    const projectsNav = document.querySelector(".projects-nav");
    const activeBar = document.querySelector(".active-bar");
    this.changeActiveNav(projectsNav);
    activeBar.style.transform = "translateY(4.5rem)";
    this.changePage("projects");
  }

  navigateTasks(e) {
    const tasksNav = document.querySelector(".tasks-nav");
    const activeBar = document.querySelector(".active-bar");
    this.changeActiveNav(tasksNav);
    activeBar.style.transform = "translateY(7.5625rem)";
    this.changePage("tasks");
  }

  navigateSchedule(e) {
    const scheduleNav = document.querySelector(".schedule-nav");
    const activeBar = document.querySelector(".active-bar");
    this.changeActiveNav(scheduleNav);
    activeBar.style.transform = "translateY(10.625rem)";
    this.changePage("schedule");
  }

  render() {
    return (
      <nav className="navigation">
        <span className="active-bar"></span>
        <ul>
          <li
            className="nav-items home-nav active-nav"
            onClick={this.navigateHome}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M0.5 22V9.47144C0.5 8.98293 0.737886 8.52502 1.13758 8.24415L11.1376 1.21713C11.655 0.85351 12.345 0.85351 12.8624 1.21713L22.8624 8.24415C23.2621 8.52502 23.5 8.98293 23.5 9.47144V16.2162V22C23.5 22.8284 22.8284 23.5 22 23.5H2C1.17157 23.5 0.5 22.8284 0.5 22Z"
                stroke="currentColor"
              />
              <path
                d="M9.80005 13.7H14.2C15.0285 13.7 15.7 14.3716 15.7 15.2V23.5H8.30005V15.2C8.30005 14.3716 8.97162 13.7 9.80005 13.7Z"
                stroke="currentColor"
              />
            </svg>
            <p className="nav-text">HOME</p>
          </li>
          <li
            className="nav-items projects-nav"
            onClick={this.navigateProjects}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0.5H7.81818C8.64661 0.5 9.31818 1.17157 9.31818 2V7.81818C9.31818 8.64661 8.64661 9.31818 7.81818 9.31818H2C1.17157 9.31818 0.5 8.64661 0.5 7.81818V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
                stroke="currentColor"
              />
              <path
                d="M16.1819 0.5H22.0001C22.8285 0.5 23.5001 1.17157 23.5001 2V7.81818C23.5001 8.64661 22.8285 9.31818 22.0001 9.31818H16.1819C15.3535 9.31818 14.6819 8.64661 14.6819 7.81818V2C14.6819 1.17157 15.3535 0.5 16.1819 0.5Z"
                stroke="currentColor"
              />
              <path
                d="M2 14.6818H7.81818C8.64661 14.6818 9.31818 15.3534 9.31818 16.1818V22C9.31818 22.8284 8.64661 23.5 7.81818 23.5H2C1.17157 23.5 0.5 22.8284 0.5 22V16.1818C0.5 15.3534 1.17157 14.6818 2 14.6818Z"
                stroke="currentColor"
              />
              <path
                d="M16.1819 14.6818H22.0001C22.8285 14.6818 23.5001 15.3534 23.5001 16.1818V22C23.5001 22.8284 22.8285 23.5 22.0001 23.5H16.1819C15.3535 23.5 14.6819 22.8284 14.6819 22V16.1818C14.6819 15.3534 15.3535 14.6818 16.1819 14.6818Z"
                stroke="currentColor"
              />
            </svg>
            <p className="nav-text">PROJECTS</p>
          </li>
          <li className="nav-items tasks-nav" onClick={this.navigateTasks}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
              <rect
                x="4"
                y="12"
                width="3"
                height="6"
                rx="1.5"
                transform="rotate(-30 4 12)"
                fill="currentColor"
              />
              <rect
                x="6"
                y="15.4641"
                width="14"
                height="3"
                rx="1.5"
                transform="rotate(-30 6 15.4641)"
                fill="currentColor"
              />
            </svg>
            <p className="nav-text">TASKS</p>
          </li>
          <li
            className="nav-items schedule-nav"
            onClick={this.navigateSchedule}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="2.5"
                width="23"
                height="21"
                rx="1.5"
                stroke="currentColor"
              />
              <line x1="7.30005" x2="7.30005" y2="4.2" stroke="currentColor" />
              <line x1="16.4998" x2="16.4998" y2="4.2" stroke="currentColor" />
              <rect
                x="5.5"
                y="7.5"
                width="5"
                height="5"
                rx="1.5"
                stroke="currentColor"
              />
              <rect
                x="13.5"
                y="7.5"
                width="5"
                height="5"
                rx="1.5"
                stroke="currentColor"
              />
              <rect
                x="5.5"
                y="15.5"
                width="5"
                height="5"
                rx="1.5"
                stroke="currentColor"
              />
              <rect
                x="13.5"
                y="15.5"
                width="5"
                height="5"
                rx="1.5"
                stroke="currentColor"
              />
            </svg>
            <p className="nav-text">SCHEDULE</p>
          </li>
        </ul>
      </nav>
    );
  }
}

/*  H O M E  P A G E  */

/* PROJECTS */

function Project(props) {
  const tasks = props.tasks
    .filter((task) => task.projectId === props.id)
    .map((task) => (
      <p
        key={task.id}
        className={
          task.priority === "high"
            ? "high-priority-task-description"
            : "task-description"
        }
      >
        {task.title}
      </p>
    ));
  return (
    <div className={"project " + props.color}>
      <h2>{props.title}</h2>
      <p className="project-date">
        Due {moment(props.endDate).format("DD/MM")}
      </p>
      <p className="project-description">{props.description}</p>
      {tasks}
    </div>
  );
}

function ProjectSnapshot(props) {
  const projects = props.projects;
  const projectTiles = projects
    .filter((project, ind) => {
      if (ind < 2) {
        return project;
      }
    })
    .map((project) => (
      <Project
        key={project.id}
        id={project.id}
        color={project.color}
        title={project.title}
        description={project.description}
        endDate={project.endDate}
        tasks={props.tasks}
      />
    ));
  return <div className="project-snapshot">{projectTiles}</div>;
}

/* TASKS */

function Task(props) {
  return (
    <div className={"task " + props.color}>
      <p
        className={
          props.priority === "high"
            ? "high-priority-task-description"
            : "task-description"
        }
      >
        {props.title}
      </p>
      <span />
      <p className="task-date">Due {moment(props.endDate).format("DD/MM")}</p>
    </div>
  );
}

function ImportantTasks(props) {
  const tasks = props.tasks;
  const importantTasks = tasks
    .filter((task) => task.priority === "high")
    .map((task) => (
      <Task
        key={task.id}
        priority={task.priority}
        color={task.color}
        title={task.title}
        endDate={task.endDate}
      />
    ));

  return (
    <div className="function-bar">
      <div className="function-bar-header">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
            fill="#F3EB1F"
          />
        </svg>
        <p>IMPORTANT</p>
      </div>
      {importantTasks}
    </div>
  );
}

function UpcomingTasks(props) {
  const tasks = props.tasks
    .filter((task, ind) => {
      if (task.priority !== "high" && ind < 8) {
        /* Only shows the first 8 tasks that aren't high priority */
        return task;
      }
    })
    .map((task) => (
      <Task
        key={task.id}
        priority={task.priority}
        color={task.color}
        title={task.title}
        endDate={task.endDate}
      />
    ));

  return (
    <div className="upcoming-tasks">
      <div className="heading-container">
        <h2>Upcoming Tasks</h2>
      </div>
      {tasks}
    </div>
  );
}

/* SCHEDULE */

function ScheduleItem(props) {
  const titles = props.titles.map((title, index) => <p key={index}>{title}</p>);

  return (
    <div className="schedule-item">
      <div className="schedule-item-date">
        {moment(props.date).format("DD/MM")}
      </div>
      <div className="schedule-item-details">{titles}</div>
    </div>
  );
}

function ScheduleSnapshot(props) {
  /* Remove arguments for today when not using test data */
  let today = moment([2020, 6, 26]);
  let daysArr = [];
  /* Populate the array */
  for (let i = 0; i < 6; i++) {
    let items = [];
    let obj = {
      index: i
    };
    let date = moment(today).add(i, "d");
    obj.date = date;
    /* Loop through items and get the title of any that match the above date, push them to the items array */
    props.items.forEach((item) => {
      if (moment(obj.date).isSame(item.startDate, "day")) {
        items.push(item.title);
      }
    });
    obj.items = items;
    daysArr.push(obj);
  }

  const scheduleItems = daysArr.map((obj) => (
    <ScheduleItem key={obj.index} date={obj.date} titles={obj.items} />
  ));

  return (
    <div className="schedule-snapshot">
      <div className="heading-container">
        <h2>Schedule Snapshot</h2>
      </div>
      {scheduleItems}
    </div>
  );
}

function SideBar(props) {
  return (
    <div>
      <AccountNav username={props.username} userPic={props.userPic} />
      <Navigation changePage={props.changePage} />
      <ImportantTasks tasks={props.tasks} />
    </div>
  )
}

function HomePage(props) {
  return (
    <div className="home-page">
      <ProjectSnapshot projects={props.projects} tasks={props.tasks} />
      <UpcomingTasks tasks={props.tasks} />
      <ScheduleSnapshot items={props.items} />
    </div>
  )
}

function ProjectsPage(props) {
  return (
    <div className="projects-page">Projects page is under construction</div>
  )
}

function TasksPage(props) {
  return (
    <div className="tasks-page">Tasks page is under construction</div>
  )
}

function SchedulePage(props) {
  return (
    <div className="schedule-page">Schedule page is under construction</div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const currentPage = this.state.currentPage;
    let page;
    if (currentPage === "home") {
      page = <HomePage projects={projectArr} tasks={taskArr} items={scheduleArr} />
    } else if (currentPage === "projects") {
      page = <ProjectsPage />
    } else if (currentPage === "tasks") {
      page = <TasksPage />
    } else if (currentPage === "schedule") {
      page = <SchedulePage />
    }
    return (
      <div>
        <SideBar username={username} userPic={userPic} changePage={this.setCurrentPage} tasks={taskArr} />
        {page}
      </div>
    );
  }
}


export default App;
