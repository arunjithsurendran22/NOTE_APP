//GET HOMEPAGE
exports.homepage = async (req, res) => {
  const locals = {
    title: "Node Js Notes",
    decription: "Free NodeJs App",
  };
  res.render("index", {locals,layout:'../views/layouts/front-page'});
};

//GET ABOUT PAGE
exports.aboutpage = async (req, res) => {
  const locals = {
    title: "about page",
    description: "Free Nodejs App",
  };
  res.render("about", locals);
};
//GET DASH BOARD
exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dash board",
    decription: "Free NodeJs App",
  };
  res.render("dashboard/index", {locals,layout:'../views/layouts/dashboard'});
};
