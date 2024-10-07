let bookmarks = []; // in memory space

async function addBookmark(req, res, next) {
  // write here
  const url = req.body.url;
  if (url) {
    bookmarks.push({
        url : url
    });
    res.json({
         message : "Bookmark successfully added",
         bookmark : bookmarks[bookmarks.length-1]
    })
    next();
  }
  else{
    res.status(403).json({
        message : "Book mark not added"
    })
  }
}

async function deleteBookmark(req, res, next) {
  // write here
  const deleteId = parseInt(req.params.id);
  if (deleteId >= 0) {
    bookmarks.splice(deleteId - 1, 1);
    res.json({
        message : "Bookmark successfully deleted"
    })
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
    bookmarks : bookmarks,
    message :"Bookmarks successfully fetched ",
  })
  next()
}
module.exports={
    getAllBookmarks,
    addBookmark,
    deleteBookmark
}