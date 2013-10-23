jquery-countdown
==========

Simple countdown as JQuery plugin

## Usage

1. Add `jcountdown.js` to your document

2. Prepare HTML code for countdown
```html
	<span id="countdown" data-time="60"></span>
```

3. Init countdown

```javascript
$(function(){
    $('#countdown').countdown();
});
```

### Examples

* single element

```html
<span id="countdown" data-time="60"></span>
```

```javascript
$('#countdown').countdown();
```

* multi elements

```html
<span class="countdown" data-time="60"></span>
<span class="countdown" data-time="120"></span>
<span class="countdown" data-time="180"></span>
<span class="countdown" data-time="240"></span>
```

```javascript
$('.countdown').countdown();
```

## Requirements

* jQuery
