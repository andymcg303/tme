const { italic } = require("chalk");
const render = require("../../render");

const assert = require('assert');

it('has a text input', async () => {
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');

    assert(input);
});