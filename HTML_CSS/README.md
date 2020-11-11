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

doc: [link](https://developer.mozilla.org/en-US/docs/Web/CSS)

Colorhunt: [link](https://colorhunt.co/) - To find some beautiful colors

## Inline CSS

```html
<body style="background-color: blue;">
  
</body>
```

[Back to top](#HTML)

---

## Internal CSS

```html
<style>
  
  body {
    background-color: blue;
  }
  
  hr {
    background-color: white;
    border-style: none;
    border-top-style: dotted;
    border-color: grey;
    border-width: 5px;
    height: 0px;
    width: 5%;
  }
  
</style>
```

[Back to top](#HTML)

---

## External CSS

index.html

```html
<head>
  <link rel="stylesheet" herf="css/styles.css">
</head>
```

styles.css

```css
<style>
  
  body {
    background-color: blue;
  }

  h1 {
		color: black;
  }

	h3 {
		color: black;
  }
  
  hr {
    background-color: white;
    border-style: none;
    border-top-style: dotted;
    border-color: grey;
    border-width: 5px;
    height: 0px;
    width: 5%;
  }
  
</style>
```

[Back to top](#HTML)

---

## Debug CSS

- Chrome developer tool -> Elements -> body -> Styles
- 可以使用 checkbox in the Styles 去一个一个尝试对应的style - 不会影响code

[Back to top](#HTML)

---

## CSS Syntax

[link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) - find keywords

`selector{property: value;}`

- `selector` - hr
- `property` - background-color - 要按照字典顺序排序
- `value` - red

[Back to top](#HTML)

---

## CSS Selector

```html
<img class="bacon" src="abc.png" alt="abc picture">
```

```css
.bacon{
	background-color: green;
}
```

[Back to top](#HTML)

---

## Class vs Ids

Id:

```html
<h1 id="heading">I love you</h1>
```

```css
#heading {
  color: blue;
}
```

Class:

```html
<img class="bacon circular" src="abc.png" alt="abc picture">
```

```css
.bacon{
	background-color: green;
}

.circular{
  border-radius: 100%;
}
```

- Id - apply to only one element in entire html file
  - 尽可能不要使用id
- Class - apply same style to a group of elements
  - 一个element 可以应用多个class

pseudo-class: [link](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

```css
img:hover {
  background-color: red;
}
```

[Back to top](#HTML)

---

