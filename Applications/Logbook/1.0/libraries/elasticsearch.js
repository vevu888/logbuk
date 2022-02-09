let elasticsearch = require('elasticsearch');

let elasticClient = new elasticsearch.Client({
    host: '10.212.1.130:19200',
    log: 'info'
});

// Get current month and year (UTC format)
let today = new Date();
let Year = today.getFullYear();
let Month = today.getMonth()+1; // the method returns 0-11 values but we have 1-12 months

let indexName = `logbook-${Month}-${Year}`;

// Delete an existing index
function deleteIndex() {
    return elasticClient.indices.delete({
        index: indexName
    });
}
exports.deleteIndex = deleteIndex;

// create the index
function initIndex() {
    return elasticClient.indices.create({
        index: indexName
    });
}
exports.initIndex = initIndex;

// check if the index exists
function indexExists() {
    return elasticClient.indices.exists({
        index: indexName
    });
}
exports.indexExists = indexExists;

function initMapping() {
    return elasticClient.indices.putMapping({
        index: indexName,
        type: 'document',
        body: {
            properties: {
                payload: { type: 'string' }
            }
        }
    });
}
exports.initMapping = initMapping;

function addDocument(document) {
    return elasticClient.index({
        index: indexName,
        type: 'document',
        body: {
            payload: document,
            '@timestamp': document['timestamp'],
            'logbook' : 'v0.1'
        }
    });
}
exports.addDocument = addDocument;
