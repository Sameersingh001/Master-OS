
const notepadBtn = document.querySelector('.btn-notepad')
const notepadBtn2 = document.querySelector('.btn-notepad2')
const noteWindow = document.querySelector('.note-win')
const noteCancel = document.querySelector('.cancel')
const clockBtn = document.querySelector('.btn-clock')
const clockWin = document.querySelector('.clock-win')
const clockCancel = document.querySelector('.cancel-clock')
const taskbar = document.querySelector('.taskbar')
const changebtn = document.querySelector('.btn')
const browserwindow = document.querySelector('.browser-window')
const calcBtn = document.querySelector('.calc-btn')
const calcWindow = document.querySelector('.calc-win')
const cancelCalc = document.querySelector('.cancel-calc')
const browserID = document.querySelector('#browserFrame')


let zindex =0 





// background Change ...............................

    const wallpapers = [
      "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      "url('https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      "url('https://plus.unsplash.com/premium_photo-1680883742267-7a1eec2ea140?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      "url('https://plus.unsplash.com/premium_photo-1672346462295-afd87d7f4a59?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      "url('https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      "url('https://images.unsplash.com/photo-1489914099268-1dad649f76bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      "url('https://plus.unsplash.com/premium_photo-1721487064031-a394c7267785?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    ];

 const color = [
  "#cc6666", // Muted Red
  "#66cc99", // Muted Green
  "#6699cc", // Muted Blue
  "#cccc66", // Muted Yellow
  "#9966cc", // Muted Purple
  "#cc9966", // Muted Orange/Brown
  "#66cccc"  // Muted Teal
];
  let index = 0;


let wallpaperIndex = 0;
let colorIndex = 0;










// Load saved background and color on page load
window.addEventListener("load", () => {
  const savedBackground = localStorage.getItem("background");
  const savedColor = localStorage.getItem("taskcolors");
  const savedbtnColor = localStorage.getItem("changebtncolor");

  if (savedBackground) {
    document.body.style.backgroundImage = savedBackground;
    wallpaperIndex = wallpapers.indexOf(savedBackground);
    if (wallpaperIndex === -1) wallpaperIndex = 0;
  }

  if (savedColor) {
    taskbar.style.backgroundColor = savedColor;
    colorIndex = color.indexOf(savedColor);
    if (colorIndex === -1) colorIndex = 0;
  }
  if (savedbtnColor) {
    changebtn.style.backgroundColor = savedbtnColor;
    colorIndex = color.indexOf(savedbtnColor);
    if (colorIndex === -1) colorIndex = 0;
  } 
});

// Change background image and taskbar color
function changeWallpaper() {
  // Update wallpaper
  document.body.style.backgroundImage = wallpapers[wallpaperIndex];
  localStorage.setItem('background', wallpapers[wallpaperIndex]);
  wallpaperIndex = (wallpaperIndex +1 ) % wallpapers.length;

  // Update taskbar color
  taskbar.style.backgroundColor = color[colorIndex];
  localStorage.setItem('taskcolors', color[colorIndex]);
  colorIndex = (colorIndex + 1) % color.length;


  //update button color
  changebtn.style.backgroundColor = color[colorIndex];
  localStorage.setItem('changebtncolor', color[colorIndex]);
  changebtn = (colorIndex + 1) % color.length;
}


let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let activeWindow = null;

noteWindow.addEventListener("mousedown", (e) => {
  isDragging = true;
  activeWindow = noteWindow;
  offsetX = e.clientX - noteWindow.offsetLeft;
  offsetY = e.clientY - noteWindow.offsetTop;
});

clockWin.addEventListener("mousedown", (e) => {
  isDragging = true;
  activeWindow = clockWin;
  offsetX = e.clientX - clockWin.offsetLeft;
  offsetY = e.clientY - clockWin.offsetTop;
});

calcWindow.addEventListener("mousedown", (e) => {
  isDragging = true;
  activeWindow = calcWindow;
  offsetX = e.clientX - clockWin.offsetLeft;
  offsetY = e.clientY - clockWin.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging && activeWindow) {
    activeWindow.style.left = (e.clientX - offsetX) + "px";
    activeWindow.style.top = (e.clientY - offsetY) + "px";
  }
});

browserwindow.addEventListener("mousedown", (e) => {
  isDragging = true;
  activeWindow = browserwindow;
  offsetX = e.clientX - browserwindow.offsetLeft;
  offsetY = e.clientY - browserwindow.offsetTop;
}); 
    



document.addEventListener("mouseup", () => {
  isDragging = false;
  activeWindow = null;
});




// calculator section ///////////////////



const calcBtn2 = document.querySelector('.calc-btn2')

calcBtn.addEventListener("dblclick", () => {

    calcWindow.style.display = "block"
    localStorage.setItem("calcstore", 'block')
})

calcBtn2.addEventListener("click", () => {

    calcWindow.style.display = "block"
    localStorage.setItem("calcstore", 'block')
})

cancelCalc.addEventListener('click', () => {
    calcWindow.style.display = "none"
    localStorage.setItem("calcstore", "none");
})

window.addEventListener("load", () => {
    const savedDisplay = localStorage.getItem("calcstore");
    if (savedDisplay) {
        calcWindow.style.display = savedDisplay;  
    }
})

calcWindow.addEventListener("click", ()=>{
    calcWindow.style.zIndex = zindex++
})



const display = document.getElementById("display");

function append(value) {
  display.value += value; 
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}







    // notepad section...............................



notepadBtn.addEventListener("dblclick", (e) => {
    e.preventDefault()
    noteWindow.style.display = "block"
    localStorage.setItem("NoteWindowDisplay", 'block')
})

noteCancel.addEventListener('click', () => {
    noteWindow.style.display = "none"
    localStorage.setItem("NoteWindowDisplay", "none");
})

window.addEventListener("load", () => {
    const savedDisplay = localStorage.getItem("NoteWindowDisplay");
    if (savedDisplay) {
        noteWindow.style.display = savedDisplay;
    }
})





noteWindow.addEventListener("click", ()=>{
    noteWindow.style.zIndex = zindex++
})


function saveData() {
    const text = document.getElementById("myTextarea").value;
    localStorage.setItem("textareaContent", text);
    alert("Saved to localStorage!");
}

// Load textarea content from localStorage
function loadData() {
    const savedText = localStorage.getItem("textareaContent");
    if (savedText !== null) {
        document.getElementById("myTextarea").value = savedText;
        alert("Loaded from localStorage!");
    }
}

// Optional: Clear stored data
function clearData() {
    localStorage.removeItem("textareaContent");
    document.getElementById("myTextarea").value = "";
    alert("Cleared localStorage!");
}


// Clock Section..........................


const clockBtn2 = document.querySelector('.btn-clock2')

clockBtn.addEventListener("dblclick", (e) => {
    e.preventDefault()
    clockWin.style.display = "block"
    localStorage.setItem("noteClock", 'block')
})

clockBtn2.addEventListener("click", () => {
    clockWin.style.display = "block"
    localStorage.setItem("noteClock", 'block')
})

clockCancel.addEventListener('click', () => {
    clockWin.style.display = "none"
    localStorage.setItem("noteClock", "none");
})

window.addEventListener("load", () => {
    const savedDisplay = localStorage.getItem("noteClock");
    if (savedDisplay) {
        clockWin.style.display = savedDisplay;
    }
})


clockWin.addEventListener("click", ()=>{
    clockWin.style.zIndex = zindex++
})


 function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Add leading zeros
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      const currentTime = `${hours}:${minutes}:${seconds}`;
      document.getElementById("clock").textContent = currentTime;


      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateString = now.toLocaleDateString('en-US', options);
      document.getElementById('date').textContent = dateString;
    }

    // Update every second
    setInterval(updateClock, 1000);
    updateClock(); // Call once immediately



    //bowser window///////////////////

const browserWin = document.getElementById("browserWin");
const browserFrame = document.getElementById("browserFrame");

// Show browser and save state
function openBrowser() {
  browserWin.style.display = "flex";
  localStorage.setItem("browser", "flex");
}

// Close browser and update state
function closeBrowser() {
  browserWin.style.display = "none";
  localStorage.setItem("browser", "none");
}

// Handle URL input
document.getElementById("urlInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let input = e.target.value.trim();
    let url;

    const isURL = input.includes(".") && !input.includes(" ");

    if (isURL) {
      // Treat input as a URL
      if (!input.startsWith("http://") && !input.startsWith("https://")) {
        url = "https://" + input;
      } else {
        url = input;
      }
    } else {
      // Treat input as a search term and use Startpage search
      const query = encodeURIComponent(input);
      url = `https://www.startpage.com/do/search?query=${query}`;
    }

    // Load in iframe and store it
    document.getElementById("browserFrame").src = url;
    localStorage.setItem("lastURL", url);
  }
});




// Restore browser state on load
window.addEventListener("load", () => {
  const savedDisplay = localStorage.getItem("browser");
  const savedURL = localStorage.getItem("lastURL");

  if (savedDisplay === "flex") {
    browserWin.style.display = "flex";
  }

  if (savedURL) {
    browserFrame.src = savedURL;
    document.getElementById("urlInput").value = savedURL;
  }
});


browserwindow.addEventListener("click", () =>{
  browserwindow.style.zIndex = zindex++
})
browserID.addEventListener("click", () =>{
  browserID.style.zIndex = zindex++
})








    // taskbar................

function updateTaskbarClock() {
  const clockEl = document.getElementById("taskbar-clock");
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString();
}

setInterval(updateTaskbarClock, 1000);
updateTaskbarClock();


// taskbar buttons ..................



notepadBtn2.addEventListener("click", (e) => {
    e.preventDefault()
    noteWindow.style.display = "block"
    localStorage.setItem("NoteWindowDisplay", 'block')
})

noteCancel.addEventListener('click', () => {
    noteWindow.style.display = "none"
    localStorage.setItem("NoteWindowDisplay", "none");
})

window.addEventListener("load", () => {
    const savedDisplay = localStorage.getItem("NoteWindowDisplay");
    if (savedDisplay) {
        noteWindow.style.display = savedDisplay;
    }
})





  window.addEventListener('load', () => {
    const bootSound = document.getElementById("bootSound");
    bootSound.play(); // Play the sound
  });