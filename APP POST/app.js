function post() {
   let postArea = document.getElementById("mainPost");
   console.log(postArea);

   postArea.classList.toggle("highlight");
}

let postNum = 0;
function postNow() {
   let tagLine = document.getElementById("tagline").value;
   let description = document.getElementById("description").value;

   let postArea = document.getElementById("postArea");

   ++postNum;

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
}
