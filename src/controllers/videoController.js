let videos = [
  {
    title: "1 v",
    rating: 5,
    comments: 2,
    createdAt: "2 min ago",
    views: 42,
    id: 1,
  },
  {
    title: "2 v",
    rating: 5,
    comments: 2,
    createdAt: "2 min ago",
    views: 42,
    id: 2,
  },
  {
    title: "3 v",
    rating: 5,
    comments: 2,
    createdAt: "2 min ago",
    views: 42,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watch ${video.title}` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const video = videos[id - 1];
  return res.redirect(`video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  return res.redirect("/");
};
