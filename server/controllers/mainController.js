//GET HOMEPAGE
exports.homepage = async (req, res) => {
  const locals = {
    title: "Node Js Notes",
    decription: "Free NodeJs App",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};
//GET DASHBOARD
exports.dashboard = async (req, res) => {
  const locals = {
    title: "dashboard",
    decription: "Free NodeJs App",
  };
  res.render("dashboard_index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};


//GET ABOUT PAGE
exports.aboutpage = async (req, res) => {
  const locals = {
    title: "about page",
    description: "Free Nodejs App",
  };
  res.render("about", locals);
};

