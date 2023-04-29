<h1 align="center">Social App</h1>

![image](https://user-images.githubusercontent.com/112737682/235284912-98667e6b-3eaa-4f0d-b956-c9aa324152b2.png)
## Description
**SocialApp** is a **Next.js** application that is meant to organize and schedule social meetings. Social Events display on the main page, including location. 
- The social events are saved on a ***MongoDB*** collection using *MongoClient* to communicate to *Atlas*, instantly updating social events by Authorized Users.
- User Authentification via allows individuals ability to edit, delete & update applications not available to the general user firebase - **in-progress** 
- ***CSS.modules*** in combinatio with bootstraps provide a clean design aesthetic across the entire Next.js application. 

## Technology Stack
**Front-End:** HTML5, CSS, Next.js

**APIs:**  MongoDB, Google Travel,  **in-progress** 

**Back-End:**  MongoDB, Node.js


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

--------------------------------------------------
### Deployment
#### Vercel (Next.js)
- Establish Vercel account (see resources)
-  Acceptable Git Repository Provider ([Github](https://github.com/), [Gitlab](https://about.gitlab.com/), [BitBucket](https://bitbucket.org/product)):



## Additional Resources & Helpful Hints:
- [Next](https://nextjs.org/docs/getting-started#system-requirements).js
    - < Link /> uses href instead of to & getStaticProps/getStaticPath for Next.js.
    - [next/head](https://nextjs.org/docs/api-reference/next/head) for meta-data
    - [next/route](https://nextjs.org/docs/api-reference/next/router) & [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) for Next.js
    - getStaticProps, specifically [context](https://nextjs.org/docs/api-reference/data-fetching/get-static-props)
    - getStaticPaths, specifically [fallback](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths) (true,false, 'blocking')
    - [next/image](https://nextjs.org/docs/basic-features/image-optimization) for Images Optimization
    
- [REACT](https://react.dev/).js docs
    - [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
- [MongoDB](https://www.mongodb.com/) will be used with Drivers (Atla Cluster())
- [Vercel](https://vercel.com/) for Deployment Next.js
- [GoogleMap API](https://www.99darshan.com/posts/interactive-maps-using-nextjs-and-google-maps/) helpful hints. 
- Always Stay Positive & When in Doubt Double Check Permissions :) 