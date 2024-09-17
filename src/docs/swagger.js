// src/docs/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.1.0',  // Phiên bản OpenAPI
    info: {
      title: 'Contact App API',  // Tiêu đề API
      version: '1.0.0',  // Phiên bản API
      description: 'A simple contact app API',  // Mô tả API
    },
    servers: [
      {
        url: 'http://localhost:3000',  // URL của máy chủ phát triển
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/docs/components.yaml'],  // Đường dẫn đến các tệp chứa JSDoc và YAML
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
