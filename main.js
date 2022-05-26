function addUser() {
    accountName = document.getElementById("name").value;
    localStorage.setItem("Account Name", accountName);
    window.location = "planner.html";
}