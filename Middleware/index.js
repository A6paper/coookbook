module.exports = function (app) {
    const express = require('express');
    const morgan = require('morgan');
    const cookieParser = require('cookie-parser');
    const session = require('express-session');
    const FileStore = require('session-file-store')(session);
    const oneWeek = 7 * 24 * 3600 * 1000;
  
    app.use(morgan('dev'));
  
    // Body POST reqs.
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    //Enable json from front
    app.use(express.json({extended:false}));
    app.use(express.text({extended:false}));

  
    app.use(cookieParser());
  
    app.use(
      session({
        store: new FileStore(),
        key: 'cookie',
        secret: 'anything here',
        resave: false,
        saveUninitialized: false,
        cookie: {
          expires: new Date(Date.now() + oneWeek),
        },
      }),
    );
  
    app.use(cookiesCleaner);
  };