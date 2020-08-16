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
- to run the project in development mode
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

## 2. Usage
- Example
```jsx
<DropDown 
  maxOptionsToShow={5}
  hasAddPermission={true}
  options={countries}
  label="Country List (Add New Permission)"
/>
```

## 3. Props
| Propert Name     | Description                                                                 | Required | Type                                             | Example                                                                      |
|------------------|-----------------------------------------------------------------------------|----------|--------------------------------------------------|------------------------------------------------------------------------------|
| maxOptionsToShow | This shows the number of options to show in the dropdown list when expanded | Yes      | number                                           | maxOptionsToShow={5}                                                         |
| hasAddPermission | This gives permission to add new option to the dropdown list                | Yes      | boolean                                          | hasAddPermission={true}                                                      |
| options          | This is array of key-value pair to display the dropdown options             | Yes      | [  {    label:string;    value:string  },  ... ] | options={   [    {      label:'Singapore';      value:'SG'    },   ...   ] } |
| label            | This property adds a label above your select box                            | No       | string                                           | label="countries"                                                            |                                                       |
