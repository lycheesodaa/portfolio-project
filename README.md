# Wei Soon's Portfolio

Click [here](https://wei-soon.vercel.app/) to visit the website.

This project was inspired by Takuya Matsuyama's website, but using the default React library.

You can view his website and source code [here](https://www.craftz.dog).

## Stack

- [Bun](https://bun.sh/) - A blazing fast Javascript runtime and toolkit
- [React.js](https://react.dev/) - A Javascript UI framework and library
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Three.js](https://threejs.org/) - 3D library for JavaScript
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React

## Build

This project has been configured to use Bun 1.0 as its Javascript runtime, though it has yet to be heavily optimized with Vite. Execute the following commands to run the development server:
```
cd portfolio-project
bun install
bun run dev
```
To build the app for production, simply run:
```
bunx --bun vite build
```

## Project structure

```
$PROJECT_ROOT
|
├── public
└─┬ src
  ├── components
  ├── lib
  └── pages
```

## License

MIT License.

You can create your own webpage for free without notifying the owner, Takuya, by forking this project under the condition that a link to [his homepage](https://www.craftz.dog/) is added in the description. Check out [LICENSE](./LICENSE) for more detail.

---
