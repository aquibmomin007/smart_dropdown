# Smart DropDown React Component
create-react-app cli is used to create this Smart Dropdown Component.
## Git Repository to Boilerplate
```bash
https://github.com/facebook/create-react-app
```

# Additional Setup
* Typescript support added
* SCSS is used for styling
* React Icons are used
* node version >= 12.0.0


```bash
https://github.com/aquibmomin007/smart_dropdown
```

## 1. Setup
- install all dependencies
```bash
npm install
or 
yarn install
```
- to start the project locally
```bash
npm run start
or 
yarn start
```
- to create an optimized build
```bash
npm run build
or 
yarn build
```
- to run unit tests (using react-testing-library)
```bash
npm run test
or 
yarn test
```

## 2. Usage
- Example 1 (Country List (Add New Permission) + label)
```jsx
<DropDown 
  maxOptionsToShow={5}
  hasAddPermission={true}
  options={countries}
  label="Country List (Add New Permission)"
/>
```

- Example 2 (Country List (Cannot Add New) + label)
```jsx
<DropDown
  maxOptionsToShow={5}
  hasAddPermission={false}
  options={[...countries]}
  label="Country List (Add New Permission)"
/>
```

- Example 3 (No Label)
```jsx
<DropDown
  maxOptionsToShow={5}
  hasAddPermission={true}
  options={[...countries]}
/>
```

## 3. Props
| Propert Name     | Description                                                                 | Required | Type                                             | Example                                                                      |
|------------------|-----------------------------------------------------------------------------|----------|--------------------------------------------------|------------------------------------------------------------------------------|
| maxOptionsToShow | This shows the number of options to show in the dropdown list when expanded | Yes      | number                                           | maxOptionsToShow={5}                                                         |
| hasAddPermission | This gives permission to add new option to the dropdown list                | Yes      | boolean                                          | hasAddPermission={true}                                                      |
| options          | This is array of key-value pair to display the dropdown options             | Yes      | [  {    label:string;    value:string  },  ... ] | options={   [    {      label:'Singapore';      value:'SG'    },   ...   ] } |
| label            | This property adds a label above your select box                            | No       | string                                           | label="countries"                                                            |                                                       |

> **_NOTE:_**  More enhancements to be added as well as unit tests.
