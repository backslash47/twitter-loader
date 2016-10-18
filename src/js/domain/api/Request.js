
const EMethodType = {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    PUT: 'put',
    DELETE: 'del'
};

const ETransferType = {
    QUERY: 'query',
    SEND: 'send'
};

class Request {

    Method = EMethodType.GET;

    URL = null;

    TransferType = ETransferType.QUERY;

    Query = null;

    OnError = () => {};

    Response = null;

}

export {Request as default , EMethodType, ETransferType};
