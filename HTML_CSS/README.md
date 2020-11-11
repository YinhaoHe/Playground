# HTML

doc: [link](https://devdocs.io/html/)

---

## HTML tags

- opening/closing tags - `<h1></h1>`
- Self-closing tags - `<br> <hr>`

`<hr size="3">`

- `hr` is element
- `size="3"` is attribute

[Back to top](#HTML)

---

## Comment

`<!--     -->`

[Back to top](#HTML)

---

## Boilerplate

html5

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    
  </body>
</html>
```

- title: website tab's name
- charset: utf-8 encoding
- meta: `<meta name="description" content="How to search this website">` - used for search engine

[Back to top](#HTML)

---

## Basic elements

- `<h1></h1>` - heading
- `<p></p>` - paragraph
- `<em></em>` - italic 斜体
- `<strong></strong>` - bold 加粗
- `<hr>` - 黑色分隔实线

[Back to top](#HTML)

---

## HTML lists

- un-ordered lists

```html
<ul>
  <li></li>
  <li></li>
</ul>
```

- ordered lists

```html
<ol>
  <li></li>
  <li></li>
</ol>

<ol type="i">
  
</ol>

<ol start="7">
  
</ol>
```

[Back to top](#HTML)

---

## HTML image element

`<img src="abc.png" alt="abc picture">`

- self-closing tag

- `img` - element
- `src="abc.png"` - attribute
- `alt` - 如果link不能用 会显示一个替代文本

[Back to top](#HTML)

---

## HTML Links and Anchor Tags

`<a herf="https://...">Hello</a>`

- `a` - Anchor - 用于超链接
- `herf` - attribute the link you want to use

[Back to top](#HTML)

---

## HTML Tables

```html
<table>
  <thead>
  	<tr>
    	<th>Dates</th>
      <th>Works</th>
    </tr>
  </thead>
  <tbody>
  	<tr>
      <td>2000-2001s</td>
      <td>coding</td>
  	</tr>
    <tr>
    	<td>2005-2008</td>
      <td>programming</td>
    </tr>
  </tbody>
  <tfoot>
  
  </tfoot>
  
</table>
```

- We can also use the table to structure the page. - E.G.: put `<img src="abc.png" alt="abc picture">` in one `<td>` and `<p>` in the other `<td>`

[Back to top](#HTML)

---

## HTML Forms

- [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) doc

- [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) doc

```html
<form class="" action="index.html" method="post">
  <label>My name:</label>
  <input type="text" name="name" id="name" required>
  <input type="color" name="" id="">
  <input type="checkbox" name="" id="">
  <label>Password:</label>
  <input type="password" name="" id="">
  <input type="submit" name="">
</form>
```

- Contact me

```html
<form class="" action="mailto:yinhaoh@uci.edu" method="post">
  <label>Your name:</label>
  <input type="text" name="yourName" value=""><br>
  <label>Your email:</label>
  <input type="email" name="yourEmail" value=""><br>
  <label>Your message:</label>
  <textarea name="yourMessage" rows="10" cols="30"></textarea><br>
  <input type="submit" name="">
</form>
```

[Back to top](#HTML)

---

# CSS