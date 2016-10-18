import AppSettings from '../AppSettings';
import Connector from './Connector';
import Request, {EMethodType, ETransferType} from './Request';

class MainConnector extends Connector {

    authenticate() {
        let request = new Request();
        request.Header = {
            'Authorization' : `Basic ${AppSettings.API_AUTH_BASIC}`,
            'Content-Type' : `application/x-www-form-urlencoded;charset=UTF-8`
        };
        request.Method = EMethodType.POST;
        request.URL = `/oauth2/token`;
        request.TransferType = ETransferType.SEND;
        request.Response = 'body';
        request.Query = {grant_type: 'client_credentials'};

        return this.createPromise(request);
    }

    loadTweets(token, username) {
        let request = new Request();
        request.Header = {
            'Authorization' : `Bearer ${token}`,
        };
        request.Method = EMethodType.GET;
        request.URL = `/1.1/statuses/user_timeline.json?`;
        request.TransferType = ETransferType.QUERY;
        request.Response = 'body';
        request.Query = {
            'screen_name' : username,
            'count' : AppSettings.TWEETS_COUNT,
            'trim_user' : true,
            'include_rts' : true,
        };

        return this.createPromise(request);
    }

}
const INSTANCE = new MainConnector();
export default INSTANCE;
