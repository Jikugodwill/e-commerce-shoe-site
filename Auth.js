document.addEventListener("DOMContentLoaded", () => {
  const storeTextHTMLTag = document.querySelector(".user");
  const dropdown = document.querySelector(".dropdown");
  const dropup = document.querySelector(".dropup");

  const user = localStorage.getItem("user");
  const username = JSON.parse(user);
  if (!localStorage.getItem("isLoggedIn")) {
    storeTextHTMLTag.innerHTML = `<button class="loginlogout">Log In</button>`;
    storeTextHTMLTag.onclick = () => {
      location.href = "signin.html";
    };
  } else {
    const logoutBtn = document.querySelectorAll(".loginlogout");
    console.log("logouts", logoutBtn);
    storeTextHTMLTag.textContent = `${username.FirstName}  ${username.LastName}`;
    // when the width is smaller than 512px
    const windowWidth = window.innerWidth;
    if (windowWidth < 512) {
      dropdown.style.display = "none";
      storeTextHTMLTag.textContent = `${username.FirstName.slice(
        0,
        1
      )} ${username.LastName.slice(0, 1)}`;
    }

    logoutBtn.forEach(
      (btn) =>
        (btn.onclick = () => {
          //remove the user object from local storage
          localStorage.removeItem("isLoggedIn");
          //reload the page
          location.reload();
        })
    );
    storeTextHTMLTag.onclick = () => {
      //   dropdown.style.display === "flex"?dropdown.style.display = "none" : dropdown.style.display = "flex";

      //   if (dropdown.style.display === "flex") {
      //         dropdown.style.display = "none";
      //   } else {
      //         dropdown.style.display = "flex";
      //   }

      dropdown.style.display =
        dropdown.style.display === "flex" ? "none" : "flex";

      if (windowWidth < 512) {
        dropdown.style.display = "none";
        dropup.style.display =
          dropup.style.display === "flex" ? "none" : "flex";
      }
    };
  }
});
