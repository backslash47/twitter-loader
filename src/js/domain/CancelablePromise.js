
/**
 * CancelablePromise provides the same functionality as Promise but additionally supports cancelation.
 * If 'cancel' method is called while the Promise is pending,
 * the Promise will be rejected with 'isCanceled' attribute added to error object.
 */
const CancelDecoration = (InnerPromise) =>  {

    let canceled = false;

    const decoratedPromise = new Promise((resolve, reject) => {

        InnerPromise.then(
            (response) => {
                if (canceled){
                    reject({isCanceled: true});
                }
                else{
                    resolve(response);
                }
            },
            (error) => {
                if (canceled){
                    error.isCanceled = true;
                    reject(error);
                }
                else{
                    reject(error);
                }
            }
        );

        InnerPromise.catch(
            (error) => {
                if (canceled){
                    error.isCanceled = true;
                    reject(error);
                }
                else{
                    reject(error);
                }
            }
        );

    });

    decoratedPromise.cancel = () => {
        canceled = true;
    };

    return decoratedPromise;
};

//const CancelablePromise = (Action) => {
//    const promise = new Promise(Action);
//    return CancelDecoration(promise);
//};

class CancelablePromise{
    static create(Action){
        const promise = new Promise(Action);
        return CancelDecoration(promise);
    }
}

export default CancelablePromise;


