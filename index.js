/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './AppNavigation';
import App1 from './AppFirebase'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App1);
