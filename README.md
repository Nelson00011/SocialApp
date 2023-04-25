# SocialApp
Next.js application that is meant to organize and plan Social Meetings. 

## Technology Stack
**Front-End:** HTML5, CSS, Next.js, Node.js

**APIs:**  NYtimes, GoogleNews, tbd?

**Back-End:** Express.js, tbd?



## Run Code (Environment)
### Front-End Helpful Hints (Node.js)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependencies (localhost: 3000):
```
> npx create-next app <project name>
> cd <project name>
> npm install next react react-dom
```
- next-app application is not Typescript & uses 'next/router'
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run dev
```

### Back-End Helpful Hints (Node.js)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
> npm express -v 
```

- Initial package.json & install dependencies (localhost:8080):
```
> cd <backend name>
> npm init -y
> npm install express 
```

- In a separate terminal run
```
> npm start
```

## Additional Resources:
- [Next](https://nextjs.org/docs/getting-started#system-requirements)
-- Link uses href instead of to. 
- [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes) in Next.js
- [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.