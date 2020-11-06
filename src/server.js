import app from './app';
import path from 'path';
app.listen(3333);

app.set('views',path.join(__dirname,"views"));
app.set("view engine","hbs");
