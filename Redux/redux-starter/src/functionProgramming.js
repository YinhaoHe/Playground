import { compose, pipe } from 'lodash/fp';

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

// Functional programming way:
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
//const warp = (type, str) => `<${type}>${str}<${type}>`;
const wrap = type => str => `<${type}>${str}<${type}>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

// With lodash no need to add that many ((()))
const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);

// with pipe we no longer need to read code from right to left
const transform = pipe(trim, toLowerCase, wrap('<div>'));
transform(input);