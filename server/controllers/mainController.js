//GET HOMEPAGE
exports.homepage = async (req, res) => {
  const locals = {
    title: "Node Js Notes",
    decription: "Free NodeJs App",
  };
  res.render("index", locals);
};

//GET ABOUT PAGE
exports.aboutpage = async (req, res) => {
  const locals = {
    title: "about page",
    description: "Free Nodejs App",
  };
  res.render("about", locals);
};
