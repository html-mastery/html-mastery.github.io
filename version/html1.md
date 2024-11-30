---
title: "HTML 1.0 - The Foundation of Web Development"
description: In-depth exploration of HTML 1.0, the foundation of web development.
slug: html-1
authors: ajay-dhangar
tags: [html, html1, history, web development]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: true
---

HTML 1.0, introduced in **1993** by **Tim Berners-Lee**, was the first version of the HyperText Markup Language. It was a simple yet revolutionary markup language that defined the structure and layout of web pages. HTML 1.0 provided the basic building blocks for the web as we know it today.

<!-- truncate -->

## Key Features of HTML 1.0

- **Static Content:** HTML 1.0 supported only static content. Dynamic features like JavaScript were not part of this version.
- **Limited Tags:** The language included a small set of tags, focusing on simple document structuring and linking.
- **Hyperlinks:** One of the most groundbreaking features was the ability to create links between documents, enabling the concept of "hypertext."
- **No Styling:** There was no support for CSS or any styling; the visual presentation depended on the browser.

## Basic Tags in HTML 1.0

Here are some key tags introduced in HTML 1.0:

### 1. `<html>`

The root element of an HTML document.

```html title="index.html"
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to HTML 1.0</h1>
  </body>
</html>
```

<BrowserWindow url="https://.../index.html">
  <>
    <h1>Welcome to HTML 1.0</h1>
  </>
</BrowserWindow>

### 2. `<head>` and `<title>`

The `<head>` tag contains metadata, and `<title>` specifies the page title. The title appears in the browser tab.

### 3. `<body>`

Contains the content of the page. Text, images, links, and other elements are placed within the `<body>` tag.

```html title="body.html"
<body>
  <p>This is the body of the page.</p>
</body>
```

<BrowserWindow url="https://.../body.html">
  <>
    <p>This is the body of the page.</p>
  </>
</BrowserWindow>

### 4. `<h1> to <h6>`

Defines headings of different levels. The number indicates the importance of the heading.

```html title="headings.html"
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

<BrowserWindow url="https://.../headings.html">
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </>
</BrowserWindow>

### 5. `<p>`

Defines a paragraph.

```html title="paragraph.html"
<p>This is a paragraph in HTML 1.0.</p>
```

<BrowserWindow url="https://.../paragraph.html">
  <>
    <p>This is a paragraph in HTML 1.0.</p>
  </>
</BrowserWindow>

### 6. `<a>`

Defines a hyperlink. The `href` attribute specifies the URL to link to.

```html title="hyperlink.html"
<a href="codeharborhub.github.io">Visit Example</a>
```

<BrowserWindow url="https://.../hyperlink.html">
  <>
    <a href="codeharborhub.github.io">Visit Example</a>
  </>
</BrowserWindow>

### 7. `<img>`

Displays images (with limited attributes). The `src` attribute specifies the image URL.

```html title="image.html"
<img src="image.jpg" alt="Example Image">
```

<BrowserWindow url="https://.../image.html">
  <>
    <img src="/img/image.jpg" alt="Example Image" />
  </>
</BrowserWindow>

### 8. `<ul>`, `<ol>`, and `<li>`

Defines unordered and ordered lists. `<li>` represents list items.

```html title="lists.html"
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

<BrowserWindow url="https://.../lists.html">
  <>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>

    <ol>
      <li>First</li>
      <li>Second</li>
    </ol>
  </>
</BrowserWindow>

## Limitations of HTML 1.0

- **No Multimedia Support:** HTML 1.0 did not support embedding multimedia content such as audio or video.
- **Limited Formatting:** There was no way to control the layout or design of the web page.
- **No Forms:** User interaction was minimal as forms and input fields were not yet introduced.

## Example: A Simple HTML 1.0 Page

```html title="index.html"
<html>
  <head>
    <title>HTML 1.0 Example</title>
  </head>
  <body>
    <h1>Welcome to HTML 1.0</h1>
    <p>This is a simple web page created using HTML 1.0.</p>
    <a href="https://codeharborhub.github.io">Visit CodeHarborHub</a>
    <ul>
      <li>Static Content</li>
      <li>Basic Tags</li>
      <li>Hyperlinks</li>
    </ul>
  </body>
</html>
```

<BrowserWindow url="https://.../index.html">
  <>
    <h1>Welcome to HTML 1.0</h1>
    <p>This is a simple web page created using HTML 1.0.</p>
    <a href="https://codeharborhub.github.io">Visit CodeHarborHub</a>
    <ul>
      <li>Static Content</li>
      <li>Basic Tags</li>
      <li>Hyperlinks</li>
    </ul>
  </>
</BrowserWindow>

## Conclusion

HTML 1.0 was a monumental step in the history of the internet. It laid the groundwork for the development of more complex and feature-rich versions of HTML. While basic and limited, it demonstrated the potential of the web and paved the way for modern web development.
