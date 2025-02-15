let postNum = 0;

function togglePostArea() {
   let postArea = document.getElementById("mainPost");
   postArea.classList.toggle("postAreaHidden");
}

function createPost() {

   let tagLine = document.getElementById("tagline").value;
   let description = document.getElementById("description").value;

   if (tagLine.trim() === "" || description.trim() === "") {
      alert("Please fill in both fields before posting!");
      return;
   }

   let postArea = document.getElementById("postArea");

   postNum++;

   let postContainer = document.createElement("div");
   postContainer.classList.add("post");

   let postHeader = document.createElement("h2");
   let postDescription = document.createElement("h4");
   let postNumber = document.createElement("p");

   postHeader.innerText = tagLine;
   postDescription.innerText = description;
   postNumber.innerText = `Post Number ${postNum}`;

   postContainer.append(postNumber, postHeader, postDescription);

   postArea.appendChild(postContainer);

   // Reset the fields after posting
   document.getElementById("tagline").value = "";
   document.getElementById("description").value = "";
   document.getElementById("mainPost").classList.add("postAreaHidden");
}
