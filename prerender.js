const fs = require("fs").promises;
const path = require("path");
const { render } = require("./dist/server/entry-server.js");

const toAbs = (p) => path.resolve(__dirname, p);

const template = fs.readFile(toAbs("dist/static/index.html"), "utf-8");

async function* routesToPrerender(dir) {
  const dirs = await fs.readdir(dir, { withFileTypes: true });
  for (const d of dirs) {
    const res = path.resolve(dir, d.name);
    if (d.isDirectory()) {
      if (d.name.charAt(0) !== "_") {
        yield* routesToPrerender(res);
      }
    } else if (res.endsWith(".tsx")) {
      yield res.replace(toAbs("src/pages"), "");
    }
  }
}

(async () => {
  for await (const f of routesToPrerender(toAbs("src/pages"))) {
    let url = f.replace(/\.tsx$/, "");
    if (/^\/home/.test(url)) {
      url = url.replace(/^\/home/, "");
    }

    const context = {};
    const appHtml = await render(url, context);

    const html = (await template).replace(`<!--content-->`, appHtml);

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
    try {
      await fs.writeFile(toAbs(filePath), html);
    } catch (e) {
      if (e.code === "ENOENT") {
        await fs.mkdir(filePath.replace(/([^/]*$)/, ""));
        await fs.writeFile(toAbs(filePath), html);
      }
    }
    console.log("pre-rendered:", filePath);
  }
})();
