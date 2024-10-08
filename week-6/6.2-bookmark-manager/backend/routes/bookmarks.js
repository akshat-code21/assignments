let bookmarks = []; // in memory space
let bookmarkId = 1;
async function addBookmark(req, res, next) {
  // write here
  const url = req.body.url;
  if (url) {
    bookmarks.push({
      bookmarkId: bookmarkId,
      url: url,
    });
    res.json({
      bookmarkId: bookmarkId,
      message: "Bookmark successfully added",
      bookmark: bookmarks[bookmarks.length - 1],
    });
    bookmarkId++;
    next();
  } else {
    res.status(403).json({
      message: "Book mark not added",
    });
  }
}

async function deleteBookmark(req, res, next) {
  // write here
  const bookmarkIdx = parseInt(req.params.id);
  const bookmark = bookmarks.find((bookmark)=>bookmark.bookmarkId===bookmarkIdx)
  const index = bookmarks.indexOf(bookmark)
  if (index >= 0) {
    bookmarks.splice(index, 1);
    res.json({
      message: "Bookmark successfully deleted",
    });
    next();
  } else {
    res.status(404).json({
      message: "No such bookmark",
    });
  }
}

async function getAllBookmarks(req, res, next) {
  // write here
  res.json({
    bookmarks: bookmarks,
    message: "Bookmarks successfully fetched ",
  });
  next();
}
module.exports = {
  getAllBookmarks,
  addBookmark,
  deleteBookmark,
};
