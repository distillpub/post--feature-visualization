`npm run dev` to run a watching server.

`npm run build` to build, transpile, babel-ify and minify files.

Components are in `src`. The `.html` files are [svelte](https://svelte.technology/guide) components, the `.js` files are compilation endpoints that are also defined in `webpack.config.js`. These compiled endpoints are then consumed by hand authored `.ejs` files in `src`.

Visit [localhost:8080/index.html](localhost:8080/index.html) for a compilation of all components, [localhost:8080/simple.html](localhost:8080/simple.html) for an isolated example.
