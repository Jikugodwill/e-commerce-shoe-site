document.addEventListener("DOMContentLoaded", () => {
    const storeTextHTMLTag = document.querySelector(".user");
    const dropdown = document.querySelector(".dropdown");

  const user = localStorage.getItem("user");
  const username = JSON.parse(user);
  if (!localStorage.getItem("isLoggedIn")) {
    storeTextHTMLTag.innerHTML = `<button class="loginlogout">Log In</button>`;
    storeTextHTMLTag.onclick = () => {
      location.href = "signin.html";
    };
  } else {
      const logoutBtn = document.querySelector(".loginlogout");
      storeTextHTMLTag.textContent = `${username.FirstName}  ${username.LastName}`;

      logoutBtn.onclick = () => { 
          //remove the user object from local storage
          localStorage.removeItem("isLoggedIn");
            //reload the page
            location.reload();
      }
      storeTextHTMLTag.onclick = () => {
        //   dropdown.style.display === "flex"?dropdown.style.display = "none" : dropdown.style.display = "flex";
          
        //   if (dropdown.style.display === "flex") {
        //         dropdown.style.display = "none";
        //   } else {
        //         dropdown.style.display = "flex";
        //   }
          
          dropdown.style.display =  dropdown.style.display === "flex" ? "none" : "flex";
      }
  }
});
