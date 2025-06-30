const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

function run() {
  // Save to localStorage
  localStorage.setItem('html_code', html_code.value);
  localStorage.setItem('css_code', css_code.value);
  localStorage.setItem('js_code', js_code.value);

  // Inject code into iframe
  const code = `
    <html>
      <head>
        <style>${css_code.value}</style>
      </head>
      <body>
        ${html_code.value}
        <script>${js_code.value}<\/script>
      </body>
    </html>
  `;
  result.srcdoc = code;
}

// Restore code from localStorage
html_code.value = localStorage.getItem('html_code') || '';
css_code.value = localStorage.getItem('css_code') || '';
js_code.value = localStorage.getItem('js_code') || '';

// Attach event listeners
html_code.addEventListener('keyup', run);
css_code.addEventListener('keyup', run);
js_code.addEventListener('keyup', run);

// Initial run on load
run();
