// var uuidv1 = require('uuid/v1');

/**
 * Add a new Client
 * @param {com.rbc.bid.AddDocumentToClient} tx - the transaction
 * @transaction
 */
function addDocumentToClient(tx) {
    return getAssetRegistry('com.rbc.bid.Client')
        .then(function (assetRegistry) {

            var client = tx.client;
            var document = tx.document;

            client.documents = client.documents || [];
            var update = false;
            for (var i = 0; i < client.documents.length; i++) {
                if (client.documents[i].documentType == document.documentType) {
                    client.documents[i] = document;
                    var update = true;
                }
            }
            if (!update) {
                client.documents.push(document);
            }
            return assetRegistry.update(client);
        });
}