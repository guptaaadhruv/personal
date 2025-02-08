const febHolidays = [
  "I still look back sometimes and see",
  "how far we have come it is",
  "unimaginable that we have fought",
  "so hard after so many difficulties",
  "so many highs and lows i cant",
  "believe it has been such a long time.",
  "Youre my First thought, my first call,",
  "my first text, my everything.",
  "everything i do i look for you first.",
  "life just feels miserable without",
  "you or you being naaraz dumbdo..",
  "honestly i still feel the same when",
  "we hangout as i felt when we went",
  "to juhu beach for our first date, you",
  "in that green top, baggy jeans and",
  "nike airmax with gola stains, but",
  "more importantly your beautiful eyes,",
  "your hair flowing with the wind, your",
  "voice, the way your hands felt that",
  "day. the first time we hugged and",
  "kissed was a dream come true, i",
  "couldnt ask for anything more than",
  "your support, love and presence.",
  "Finally in 2025 i completed one of",
  "my biggest dreams of attending a",
  "coldplay concert (you know i would",
  "mention it ) with you dumbdo, I love",
  "you dumbdo, youre my everything"
];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate()  : 1;
  let activeIndex = daynumber-1;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber-1);
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
  