var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters

    routes: [
        {
          path: '/',
          url: 'index.html',
        },
        {
          path: '/help/',
          url: 'pages/help.html',
          scripts: 'js/script.js/'
        },
    ]
  });
var mainView = app.views.create('.view-main')
