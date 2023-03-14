---
to: packages/<%=folder%>/package.json
---
{
    "name": "@hi-<%=business%>/<%=name%>",
    "version": "1.0.0",
    "private": true,
    "description": "<%=description%>",
    "author": "<%=author%>",
    "homepage": "",
    "license": "ISC",
    "main": "src/index.js",
    "directories": {
      "src": "src",
      "test": "__tests__"
    },
    "files": [
      "src"
    ],
    "scripts": {
      "test": "node ./__tests__/<%=name%>.test.js"
    },
    "dependencies": {
    }
  }