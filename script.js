const febHolidays  = [
    "Dear BUD JASMIN ❤️", 
     "Listen To My Heart Thing",
    "My heart beats for our friendship.",
    "You Are The Ride Or Die Of My Life.",
    "You Are My Partner In Crime.",
    "You are my everything in friendship.",
    "Always and forever.",
    "I will never let you cry alone - I'll bring snacks and memes",
    "Trust Me 100%😊",
    "I find your chaotic energy absolutely amazing.",
    "Your vibe is timeless😘.",
    "You know one thing? Talking to you gives me peace",
    "No matter the distance between us, I feel you're always with me",
    "Always Take care yourself",
    "Be Happy😊",
    "Be Relaxed🥰",
    "You are the most special person in my life",
    "And trust me I don't want anyone else",
    "if you are with me❤️",
    "I am always here with you",
    "Then one thing",
    "when you share your drama with me",
    "Wow that time I feel truly needed😊",
    "This is for you",
    "Roses Are Red🌹",
    "Sky Is Blue🌃",
    "My Friendship Is True😊",
    "Only For You🥰",
    "I Love You So Much Bestie❤️"
  ];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
      idx + 1
    }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
