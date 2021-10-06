module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_includes/assets/css/styles.css");
  eleventyConfig.addWatchTarget("_includes/assets/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/_includes/assets/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy({ "./src/favicon": "/" });

  eleventyConfig.addFilter("onlyText", (body) => {
    const content = body.replace(/(<([^>]+)>)/gi, "");
    return content.replace(/(\r\n|\n|\r)/gm, "");
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
    passthroughFileCopy: true,
  };
};
