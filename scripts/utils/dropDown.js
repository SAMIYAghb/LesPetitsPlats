/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  const dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");

  //   const icon = document.querySelector(".fa-angle-down");
  //   console.log(icon)
  // if (dropdownContent.classList.contains("show")) {
  //   icon.classList.remove("fa-angle-down");
  //   icon.classList.add("fa-chevron-up");
  // } else {
  //   icon.classList.remove("fa-chevron-up");
  //   icon.classList.add("fa-angle-down");
  // }
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }





  