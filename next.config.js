const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  images: {
    loader: "akamai",
    path: "",
    domains: ["media-exp1.licdn.com"],
  },
});
