---
title: "HTML 2.0: The First Standardized Version"
description: Comprehensive guide to HTML 2.0, the first standardized version of HTML.
slug: html-2-details
authors: ajay-dhangar
tags: [html, html2, history, web development]
hide_table_of_contents: false
---

HTML 2.0, published in 1995 by the Internet Engineering Task Force (IETF), was the first standardized version of HTML. It built upon HTML 1.0 by adding new features and addressing the need for consistent web development practices across different browsers.

<!-- truncate -->

## Key Features of HTML 2.0

- **Standardization:** HTML 2.0 established a set of guidelines for browser developers, ensuring a more consistent user experience.
- **Forms:** Introduced the `<form>` element, enabling user input and interactivity.
- **Tables:** Allowed developers to structure data in a tabular format.
- **Entities:** Supported character entities for special characters like `&lt;` for `<` and `&amp;` for `&`.
- **Backward Compatibility:** Retained all features of HTML 1.0, ensuring older pages remained functional.

## New Tags in HTML 2.0

### 1. `<form>`
Enabled user interaction through input fields.
```html
<form action="submit.html" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>
```

### 2. `<table>`
Allowed data to be presented in rows and columns.
```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>25</td>
  </tr>
</table>
```

### 3. `<input>`
Various input types like text, password, radio, and checkbox were introduced.
```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</form>
```

### 4. `<textarea>`
Allowed multiline text input.
```html
<form>
  <label for="comments">Comments:</label>
  <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
</form>
```

### 5. `<select>` and `<option>`
Dropdown menus for selecting options.
```html
<form>
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</form>
```

## Forms in HTML 2.0
HTML 2.0 introduced forms, revolutionizing how users interacted with web pages. Key elements included:

- `<form>`: Defines a form.
- `<input>`: Accepts user input (text, radio, checkbox, etc.).
- `<textarea>`: Multiline text input.
- `<select>`: Dropdown menus.
- `<button>`: A clickable button.

### Example: A Complete Form
```html
<form action="submit_form.html" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <label for="gender">Gender:</label>
  <input type="radio" id="male" name="gender" value="male"> Male
  <input type="radio" id="female" name="gender" value="female"> Female

  <label for="hobbies">Hobbies:</label>
  <input type="checkbox" id="reading" name="hobbies" value="reading"> Reading
  <input type="checkbox" id="traveling" name="hobbies" value="traveling"> Traveling

  <input type="submit" value="Submit">
</form>
```

## Example: A Simple HTML 2.0 Page
```html
<html>
  <head>
    <title>HTML 2.0 Example</title>
  </head>
  <body>
    <h1>Welcome to HTML 2.0</h1>
    <p>This page demonstrates the features of HTML 2.0.</p>

    <h2>Table Example</h2>
    <table border="1">
      <tr>
        <th>Item</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>Apple</td>
        <td>$1</td>
      </tr>
      <tr>
        <td>Banana</td>
        <td>$0.5</td>
      </tr>
    </table>

    <h2>Form Example</h2>
    <form action="submit.html" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

## Limitations of HTML 2.0

- **No Styling:** Like HTML 1.0, there was no support for CSS.
- **Limited Multimedia Support:** Only basic images and text; no audio or video.
- **Basic Layouts:** Advanced layouts required nested tables or external scripts.

## Conclusion
HTML 2.0 was a significant step forward, standardizing web development and introducing features like forms and tables. While basic by modern standards, it laid the foundation for the interactive web applications we use today.
