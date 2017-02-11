$(document).ready(function() { 

  var businessContainer = $("#business-list");

  function getBusinesses() {
    $.get("/api/businesses", function(data) {
      businesses = data;
      console.log("List", data);
      initializeWaiting();
    });
  }
  
  function initializeWaiting() {
    businessContainer.empty();
    var businessesToAdd = [];
    for (var i = 0; i <businesses.length; i++) {
      businessesToAdd.push(createNewRow(businesses[i]));
    }
    businessContainer.append(businessesToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {

    var newPostPanel = $("<div>");
    newPostPanel.addClass("panel panel-default");
    var newPostPanelHeading = $("<div>");
    newPostPanelHeading.addClass("panel-heading");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newPostTitle = $("<h2>");
   
    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category);
    newPostCategory.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });
    var newPostPanelBody = $("<div>");
    newPostPanelBody.addClass("panel-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.biz_name + " ");
    newPostBody.text(post.biz_desc);
   
   
    newPostPanelHeading.append(deleteBtn);
    newPostPanelHeading.append(editBtn);
    newPostPanelHeading.append(newPostTitle);
    newPostPanelHeading.append(newPostCategory);
    newPostPanelBody.append(newPostBody);
    newPostPanel.append(newPostPanelHeading);
    newPostPanel.append(newPostPanelBody);
    newPostPanel.data("post", post);
    return newPostPanel;
  }

  // Getting jQuery references to the post body, title, form, and category select
  var bodyInput = $("#bn");

  $("#createBurger").on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body
    if (!bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newBurger = {
      burger_name: bodyInput.val().trim(),
    };

    submitBurger(newBurger);
    bodyInput.val('');

  });
  $("#waiting").on("click", ".devoure-it", function() {
    event.preventDefault();  
    // Constructing a newPost object to hand to the database
    var currentBurger = $(this)
    .parent()
    .data("burger");

    var newBurger = {
      devoured: true,
      id: currentBurger.id
    };
    updateBurger(newBurger);

  });

  // Submits a new burger
  function submitBurger(Burger) {
    $.post("/api/burgers/", Burger, function() {
      getBurgers();
      getDevoured();
    });
  }
  // Update a given post, bring user to the blog page when done
  function updateBurger(burger) {
    $.ajax({
      method: "PUT",
      url: "/api/burgers/",
      data: burger
    })
    .done(function() {
      getBurgers();
      getDevoured();
    });
  }

  getBusinesses();

});