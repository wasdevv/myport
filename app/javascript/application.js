// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");
  
    if (scrollButton) {
      scrollButton.addEventListener("click", function() {
        var projectsSection = document.getElementById("projects");
  
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
});