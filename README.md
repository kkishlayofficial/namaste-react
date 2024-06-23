# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement - Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.
- File Watching Algorithm - written in C++;
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - removed unused code
- Different dev and production bundles

# Browsers List
- Last 2 versions - Works on 2 previous versions of all the browsers.
- Last 2 Chrome versions - Works on 2 previous versions of Chrome.
- Last 2 Firefox versions - Works on 2 previous versions of Firefox.
- For more details visit [Browsers List Official Website](https://browserslist.dev/)

# Babel
- Babel is a Javascript compiler or transpiler which converts the code into backward compatible Javascript code which can be run on older browsers.

# Config Driven UI
- Controlling the UI using the data which is coming from the API.

# Food Ordering App
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Image
 *      - Name
 *      - Star Rating
 *      - Cuisine
 *      - Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

# Routing
- Client Side Routing - Doesn't make any network call to fetch any page.
- Server Side Routing - Make a network call and the page is coming from the server.

# Break down the app - different names
- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On-demand loading
- Dynamic Import

# Higher Order Component
- Takes a component as an input.
- Returns an enhanced version on the component.

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store.
- Connect our store to app.
- Slice ( cartSlice )
- Dispatch action
- Selector
- App Store has 1 big reducer, and slices have multiple reducers.

# Types of Testing
- Unit Testing - Testing Single Component
- Integration Testing
- End to End Testing

# Setting up Testing
- Install React Testing Library
- Installed Jest
- Installed Babel Dependencies
- Configured Babel
- Configured Parcel Config file to disable default Babel Transpilation
- Jest Configuration
- Install JSDOM Library
- Install @babel/preset-react to make JSX work in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/dom
- Install @testing-library/jest-dom