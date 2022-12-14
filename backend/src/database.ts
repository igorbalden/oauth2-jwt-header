import mongoose, { ConnectionOptions} from 'mongoose';
import config from './config/config';

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  user: config.DB.USER,
  pass: config.DB.PASSWORD
};

mongoose.connect(config.DB.URI!, dbOptions);

const connection = mongoose.connection;

try {
  connection.once('open', () => {
    console.log('Mongodb Connection established');
  });
} catch(err) {
  console.log('Mongodb connection error:', err);
  process.exit(1);
}
