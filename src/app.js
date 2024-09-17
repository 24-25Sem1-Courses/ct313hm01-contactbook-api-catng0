const express = require('express');
const cors = require('cors');

const JSend = require('./jsend');  // Nhập module JSend
const contactsRouter = require('./routes/contacts.router');
const {
    resourceNotFound,
    handleError,
}   = require('./controllers/errors.controller');
const { specs, swaggerUi } = require('./docs/swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.json(JSend.success());  // Sử dụng hàm success để trả về phản hồi
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/public', express.static('public'));

contactsRouter.setup(app);

app.use(resourceNotFound);

app.use(handleError);

module.exports = app;
