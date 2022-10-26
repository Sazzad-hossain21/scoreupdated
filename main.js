const stars = document.querySelectorAll(".star");

stars.forEach(star => {
  star.addEventListener('click', function handleClick(event) {

    star.classList.add("newstar");
    if (star.classList.contains("newstar")) {
        star.addEventListener('click', function handleClick(event) {
            star.classList.remove("newstar");
        })}
  });
});
