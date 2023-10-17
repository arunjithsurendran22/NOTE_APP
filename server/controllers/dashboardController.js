//GET DASHBOARD
exports.dashboard = async (req, res) => {
  const locals = {
    title: "dashboard",
    decription: "Free NodeJs App",
  };
  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
