// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevoured");

    var newDevourState = {
      devours: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/cupcake/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCupcake = {
      cupcake_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cupcake", {
      type: "POST",
      data: newCupcake
    }).then(
      function() {
        console.log("created new cupcake");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
