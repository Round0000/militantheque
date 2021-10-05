module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_includes/assets/css/styles.css");
    eleventyConfig.addWatchTarget("_includes/assets/css/styles.css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy({ "./src/favicon": "/" });
  
    return {
      dir: {
        input: "src",
        output: "public",
      },
      passthroughFileCopy: true
    };
  };