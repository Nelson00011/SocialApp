# SocialApp
Next.js application that is meant to organize and plan Social Meetings. 

## Technology Stack
**Front-End:** HTML5, CSS, Next.js

**APIs:**  Google Travel, , tbd?

**Back-End:** MongoDB, Node.js



## Run Code (Environment)
### Next.js Helpful Hints (Node.js)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependencies (localhost: 3000):
```
> npx create-next-app <project name>
> cd <project name>
> npm install next react react-dom
```
- next-app application is not Typescript & uses 'next/router'
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run dev
```

### Back-End Helpful Hints (Node.js)
#### MongoDB cluster
- Make MongDB Cluster (see resources):
```
> npm install mongodb
```

- Confirm mongodb version
```
> npm mongodb -v
```
- Config in Atlas (see resources):
    - Network: 'add current IP address"
    - Edit User: specific priviledges > "readWriteAnyDatabase" 
    - Database: Cluster(): Connect: Drivers (option)
    
- API notes for Next.js:
    - all API's must be in 'api' folder in Next.js applications
    - MongoClient.connect(url)
        - url must have username:password (recomment autogenerate) 
        - url collection naming example: 
        - "net/< name of collection >?retryWRites=true..."
    
> Required for api/meetup.js
```
import { MongoClient } from 'mongodb';
```



## Additional Resources & Helpful Hints:
- [Next](https://nextjs.org/docs/getting-started#system-requirements).js
    - < Link /> uses href instead of to & getStaticProps/getStaticPath for Next.js.
    - [next/head](https://nextjs.org/docs/api-reference/next/head) for meta-data
    - [next/route](https://nextjs.org/docs/api-reference/next/router) & [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) for Next.js
- [REACT](https://react.dev/).js docs
    - [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
- [MongoDB](https://www.mongodb.com/) will be used with Drivers (Atla Cluster())
- [GoogleMap API](https://www.99darshan.com/posts/interactive-maps-using-nextjs-and-google-maps/) helpful hints. 
- Always Stay Positive & When in Doubt Double Check Permissions :) 