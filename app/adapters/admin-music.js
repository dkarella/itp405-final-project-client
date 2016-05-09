import ApplicationAdapter from './application';
import ENV from 'music-match/config/environment';

export default ApplicationAdapter.extend({
  host: ENV.apiURL,
  namespace: ENV.apiNamespace+'/admin',
  pathForType(){
    return 'music';
  }
});
