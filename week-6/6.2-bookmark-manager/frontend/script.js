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
  document.getElementById('bookmark-list').innerHTML=""
  let response = await axios.get(API_URL);
  let bookmarks1 = response.data.bookmarks;
  bookmarks1.forEach((bookmark) => {
    addBookmarkToDOM(bookmark.url, bookmark.bookmarkId);
  });
}
// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark, idx) {
  //  start here
  let parent = document.getElementById("bookmark-list");
  let bookmarkHolder = document.createElement("li");
  bookmarkHolder.innerHTML = `<a href="${bookmark}" target="_blank">${bookmark} </a><span
            ><button class="operations" data-bookmarkIndex = ${idx}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">                
                <path
                  fill="white"
                  d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                />
              </svg></button
          ></span>
        `;
  bookmarkHolder.dataset.bookmarkIndex = idx;
  parent.appendChild(bookmarkHolder);
  setDeleteButtons();
}
function setDeleteButtons() {
  let btns = document.querySelectorAll(".operations");
  btns.forEach((btn) => {
    btn.removeEventListener("click", handleDelete);
    btn.addEventListener("click", handleDelete);
  });
}

// Separate delete handler function
function handleDelete(event) {
  const index = event.target.closest(".operations").dataset.bookmarkindex;
  deleteBookmark(index);
}
// Add a new bookmark
document
  .getElementById("add-bookmark-btn")
  .addEventListener("click", async () => {
    //  start here
    try {
      const url = document.getElementById("bookmark-url").value;
      if (!validateURL(url)) {
        alert("Not A Valid URL");
        return;
      }
      let response = await axios.post(API_URL, {
        url: url,
      });
      if (response) {
        addBookmarkToDOM(response.data.bookmark.url, response.data.bookmarkId);
        alert(response.data.message);
        document.getElementById("bookmark-url").value = "";
      } else {
        alert("Bookmark Not Added");
      }
    } catch (e) {
      alert("Please enter a bookmark");
      return;
    }
  });

// Delete a bookmark
async function deleteBookmark(id) {
  //  start here;
  try {
    let deleteIndex = id;
    let response = await axios.delete(`${API_URL}/${deleteIndex}`);
    alert(response.data.message)
    fetchBookmarks()
  } catch (e) {
    alert("Bookmark not deleted.");
  }
}
