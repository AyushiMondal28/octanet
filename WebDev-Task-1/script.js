<script>
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      var targetId = this.getAttribute("href").substring(1); // Get target section ID

      var targetSection = document.getElementById(targetId); // Find target section

      if (targetSection) {
        // Smooth scroll to the target section
        targetSection.scrollIntoView({
          behavior: "smooth"
        });

        // Highlight the active link
        navLinks.forEach(function(link) {
          link.parentElement.classList.remove("active");
        });
        this.parentElement.classList.add("active");
      }
    });
  });

  // Highlight the initial active link based on the current section
  window.addEventListener("scroll", function() {
    var currentSection = "";

    // Find the current section based on scroll position
    document.querySelectorAll("section").forEach(function(section) {
      var sectionTop = section.offsetTop - 50; // Adjusted for better UX
      var sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Highlight the corresponding nav link
    navLinks.forEach(function(link) {
      link.parentElement.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.parentElement.classList.add("active");
      }
    });
  });
});
</script>
