document.addEventListener('DOMContentLoaded', () => {
  // Toggle menu
  const menuToggle = document.querySelector('.nav-links');
  if (menuToggle) {
    document.querySelector('.menu-icon')?.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
    });
  }

  // Time and greeting update
  function updateTime() {
    const timeElement = document.querySelector('#currTime h1');
    const greetingsElement = document.querySelector('#greetings');

    if (timeElement && greetingsElement) {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = minutes < 10 ? '0' + minutes : minutes;

      timeElement.textContent = `${hours}:${minutes}`;

      if (hours < 12) {
        greetingsElement.textContent = "Good Morning!";
      } else if (hours < 16) {
        greetingsElement.textContent = "Good Afternoon!";
      } else if (hours <= 19) {
        greetingsElement.textContent = "Good Evening!";
      } else {
        greetingsElement.textContent = "Good Night!";
      }
    }
  }
  setInterval(updateTime, 1000);
  updateTime(); // Call once on load

  // Button click alert
  const button = document.querySelector('.my-button');
  if (button) {
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }

  // Form submit
  const submitButton = document.querySelector("input[type='submit']");
  if (submitButton) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Thank you for your message!");
    });
  }

  // Board members
  const boardMembers = [
    {
      name: "Maris Angela",
      role: "Deputy Director",
      desc: "Maris is the deputy director of Lois Academy.",
      img: "Images/images.jfif"
    },
    {
      name: "Mason Andrews",
      role: "Lead Engineer",
      desc: "Leads in both tech sectors ensuring instructors are designated to their various fields.",
      img: "Images/lead.jfif"
    },
    {
      name: "Mitchell Kimberly",
      role: "Dean",
      desc: "She is Dean of students and ensures all learners have smooth learning.",
      img: "Images/dean.jfif"
    },
    {
      name: "Jhon Doe",
      role: "Chief",
      desc: "All the instructors report to him.",
      img: "Images/chief.jfif"
    }
  ];

  const boardContainer = document.querySelector(".board-members");
  if (boardContainer) {
    boardContainer.innerHTML = "";
    boardMembers.forEach(member => {
      boardContainer.innerHTML += `
        <div class="board-card">
          <div class="board-details">
            <img src="${member.img}" alt="${member.name}">
            <h2>${member.name}</h2>
            <h3>${member.role}</h3>
            <p>${member.desc}</p>
          </div>
        </div>
      `;
    });
  }

  // Front-End Courses
  const frontEndCourses = [
    {
      title: "HTML5",
      image: "Images/html.png",
      description: "This is the skeleton of a web page",
      price: "Free"
    },
    {
      title: "CSS3",
      image: "Images/css.png",
      description: "The styling of a web page, colors, font-size and everything cool you see on a website.",
      price: "Free"
    },
    {
      title: "JavaScript",
      image: "Images/js.png",
      description: "Responsible for the functionality of a web page, like button clicks.",
      price: "$45"
    },
    {
      title: "React",
      image: "Images/react.jfif",
      description: "Modern Front-End library using JSX to write HTML in JS.",
      price: "$40"
    }
  ];

  const container = document.getElementById("front-end-container");
  if (container) {
    frontEndCourses.forEach(course => {
      const box = document.createElement('div');
      box.classList.add('box');
      box.innerHTML = `
         <div class="box-details">
          <img src="${course.image}" alt="${course.title}">
          <h4>${course.title}</h4>
          <p>${course.description}</p>
          <h4>${course.price}</h4>
         </div>
      `;
      container.appendChild(box);
    });
  }

  // Mobile Dev Courses
  const mobileDevCourses = [
    {
      title: "Java",
      image: "Images/java.png",
      description: "Java is widely used in application development across multiple domains...",
      price: "$45"
    },
    {
      title: "Kotlin",
      image: "Images/kotlin.png",
      description: "Kotlin is a modern language used for Android, backend, and web development.",
      price: "$46"
    },
    {
      title: "Flutter",
      image: "Images/flutter.png",
      description: "Build apps from a single codebase for mobile, web, and desktop.",
      price: "$45"
    },
    {
      title: "React Native",
      image: "Images/reactNative.png",
      description: "Used for building mobile applications using JavaScript and React",
      price: "$48"
    }
  ];

  const container2 = document.getElementById("mobile-container");
  if (container2) {
    mobileDevCourses.forEach(course => {
      const box = document.createElement("div");
      box.classList.add('box');
      box.innerHTML = `
         <div class="box-details">
          <img src="${course.image}" alt="${course.title}">
          <h4>${course.title}</h4>
          <p>${course.description}</p>
          <h4>${course.price}</h4>
         </div>
      `;
      container2.appendChild(box);
    });
  }

  // Back-End Courses
  const backEndCourses = [
    {
      title: "python",
      image: "Images/python.jfif",
      description: "Python is a high-level, interpreted programming language...",
      price: "$47"
    },
    {
      title: "Node.js",
      image: "Images/node.png",
      description: "Run JavaScript server-side with Node.js.",
      price: "$41"
    },
    {
      title: "Express.js",
      image: "Images/express.png",
      description: "Express.js is a minimal and flexible web application framework for Node.js.",
      price: "$42"
    },
    {
      title: "mongoDB",
      image: "Images/mongoDB.png",
      description: "MongoDB is a NoSQL database that stores data in flexible document format.",
      price: "$35"
    }
  ];

  const container3 = document.getElementById("back-end-container");
  if (container3) {
    backEndCourses.forEach(course => {
      const box = document.createElement("div");
      box.classList.add('box');
      box.innerHTML = `
        <div class="box-details">
          <img src="${course.image}" alt="${course.title}">
          <h4>${course.title}</h4>
          <p>${course.description}</p>
          <h4>${course.price}</h4>
        </div>
      `;
      container3.appendChild(box);
    });
  }

  // Testimonial Carousel
 const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove('active'));
  if (testimonials[index]) {
    testimonials[index].classList.add('active');
  }
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn && prevBtn && testimonials.length > 0) {
  nextBtn.addEventListener('click', () => {
    nextTestimonial();
    resetInterval();  
  });
  prevBtn.addEventListener('click', () => {
    prevTestimonial();
    resetInterval(); 
  });
  showTestimonial(current); 

  let intervalId = setInterval(nextTestimonial, 5000);

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextTestimonial, 5000);
  }
}

});
