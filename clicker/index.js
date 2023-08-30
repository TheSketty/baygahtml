if (!localStorage.getItem("cookies")) {
    localStorage.setItem("cookies", 0);
    localStorage.setItem("cpc", 1);
    localStorage.setItem("cps", 0);
}
var curPage = "clickPage";
let timer = setInterval(cookieplussecond, 1000)
function cookieplussecond() {
    localStorage.setItem("cookies", Math.round((Number(localStorage.getItem("cookies")) + Number(localStorage.getItem("cps"))) * 10) / 10);
    document.getElementById("cookieAmount").textContent = localStorage.getItem("cookies") + " cookies";
}
function cookieplus() {
    localStorage.setItem("cookies", Number(localStorage.getItem("cookies")) + Number(localStorage.getItem("cpc")));
    document.getElementById("cookieAmount").textContent = localStorage.getItem("cookies") + " cookies";
}
function loadPage() {
    document.getElementById("cookieAmount").textContent = localStorage.getItem("cookies") + " cookies";
    document.getElementById("cps").textContent = localStorage.getItem("cps") + " cookies per seconds";
}
function reset() {
    localStorage.clear();
    location.reload();
}
function clickPage() {
    if (curPage != "clickPage") {
        document.getElementById(curPage).style.display = "none";
        document.getElementById("clickPage").style.display = "flex";
        curPage = "clickPage";
    }
}
function storePage() {
    if (curPage != "storePage") {
        document.getElementById(curPage).style.display = "none";
        document.getElementById("storePage").style.display = "list-item";
        curPage = "storePage";
    }
}
function miscPage() {
    if (curPage != "miscPage") {
        document.getElementById(curPage).style.display = "none";
        document.getElementById("miscPage").style.display = "grid";
        curPage = "miscPage";
    }
}
function cpsplus(cost, amount) {
    if (Number(localStorage.getItem("cookies")) >= cost) {
        localStorage.setItem("cps", Math.round((Number(localStorage.getItem("cps")) + amount) * 10) / 10);
        localStorage.setItem("cookies", Number(localStorage.getItem("cookies")) - cost);
        loadPage();
    }
}