const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
  if (item.textContent.endsWith("Done")) {
    item.classList.add("complete");
  } else if (item.textContent.endsWith("Ongoing")) {
    item.classList.add("ongoing");
  } else if (item.textContent.endsWith("Coming")) {
    item.classList.add("coming");
  }
});
