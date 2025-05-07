/*
const auth = (() => {
    const users = {
      admin: "cybersecure123",
    };
  
    let attempts = 0;
    const maxAttempts = 5;
  
    return {
      login(username, password) {
        if (attempts >= maxAttempts) {
          alert("Too many failed attempts. Try again later.");
          return false;
        }
  
        const cleanUser = username.replace(/[<>"']/g, "");
        const cleanPass = password.replace(/[<>"']/g, "");
  
        if (users[cleanUser] === cleanPass) {
          alert("Login successful!");
          document.getElementById("status").innerText = `Welcome, ${cleanUser}`;
          return true;
        } else {
          attempts++;
          alert(`Login failed. Attempts left: ${maxAttempts - attempts}`);
          return false;
        }
      }
    };
  })();
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  }
  (function applySavedTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") document.body.classList.add("dark");
  })();
  function displaySafe(text, containerId) {
    const safeText = text.replace(/[<>&"'`]/g, (c) => ({
      '<': '&lt;', '>': '&gt;', '&': '&amp;',
      '"': '&quot;', "'": '&#x27;', '`': '&#x60;'
    }[c]));
    document.getElementById(containerId).innerHTML = safeText;
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn").addEventListener("click", () => {
      const u = document.getElementById("username").value;
      const p = document.getElementById("password").value;
      auth.login(u, p);
    });
  
    document.getElementById("darkToggle").addEventListener("click", toggleDarkMode);
  });
*/

const flag = "QU9IRntmYWtlX2ZsYWdfbWlzbGVhZH0="