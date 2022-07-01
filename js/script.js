const select = document.getElementById("select");
    const list = document.getElementById("list");
    const selectText = document.getElementById("selectText");
    const options = document.getElementsByClassName("options");
    const inputarea = document.getElementById("inputarea");

    select.onclick = function () {
      list.classList.toggle("active");
    };

    for (option of options) {
      option.onclick = function () {
        selectText.innerHTML = this.innerHTML;
        inputarea.placeholder = "search in" + " " + selectText.innerHTML;
      }
    };