import SuperAgent from './SuperAgent';
import CancelablePromise from '../CancelablePromise';


class Connector{

    // CONSTRUCTION ==================================================================================================

    constructor() {
        this.Type = null;
    }

    // FIELDS ========================================================================================================

    Type = null;

    // PUBLIC METHODS ================================================================================================

    // PRIVATE METHODS ===============================================================================================

    createPromise(request){

        const ACTION = (resolve, reject) => {

            let superagent = SuperAgent();

            superagent = superagent.set(request.Header);

            superagent = superagent[request.Method](request.URL);

            superagent = superagent[request.TransferType](request.Query);

            superagent.end((err, res) => {
                if (err === null) {
                    if (request.Response !== null){
                        resolve(res[request.Response]);
                    }
                    else{
                        resolve(res);
                    }
                }
                else {
                    this.logError(request, err);
                    request.OnError(err);
                    reject(err);
                }
            });
        };

        return CancelablePromise.create(ACTION);
    }

    createMockPromise(response, error){
        const ACTION = (resolve, reject) => {

            if (response != null)
                resolve(response);

            if (error != null)
                reject(error);
        };

        return CancelablePromise.create(ACTION);
    }

    logError(request, error){
        console.error('XHR Response Error: [' + request.Method + ' ' + request.URL + '] >> ' + error.status);
    }

    // EVENTS ========================================================================================================

}

export default Connector;
