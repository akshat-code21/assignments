const API_URL = "http://localhost:3000/bookmarks";
// Fetch bookmarks when the page loads
document.addEventListener("DOMContentLoaded", () => {
  //   start here
  fetchBookmarks();
});
function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}
// Fetch bookmarks from the backend
async function fetchBookmarks() {
  //  start here
  let response = await axios.get(API_URL);
  console.log(response.data.bookmarks);
  let bookmarks1 = response.data.bookmarks;
  bookmarks1.forEach((bookmark) => {
    addBookmarkToDOM(bookmark.url);
  });
}
// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {
  //  start here
  let parent = document.getElementById("bookmark-list");
  let bookmarkHolder = document.createElement("li");
  bookmarkHolder.innerHTML = bookmark;
  parent.appendChild(bookmarkHolder);
  console.log(bookmarkHolder);
  //   fetchBookmarks()
}

// Add a new bookmark
document
  .getElementById("add-bookmark-btn")
  .addEventListener("click", async () => {
    //  start here
    try {
      const url = document.getElementById("bookmark-url").value;
      if(!validateURL(url)){
        alert('not a valid url')
        return;
      }
      let response = await axios.post(API_URL, {
        url: url,
      });
      if (response) {
        addBookmarkToDOM(response.data.bookmark.url);
        alert(response.data.message);
        document.getElementById("bookmark-url").value = "";
      } else {
        console.log("bookmark not added");
      }
    } catch (e) {
        alert('Please enter a bookmark');
        return;
    }
  });

// Delete a bookmark
function deleteBookmark(id) {
  //  start here;
}
