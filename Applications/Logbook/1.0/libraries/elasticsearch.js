'use strict'
let elasticsearch = require('elasticsearch');
const { Client } = require('@elastic/elasticsearch')

const client = new Client({ node: 'https://elastic:kowgKbHkoJAikKndWkIidsC2@0dc6c061f19442e2b9a83c7c132af36a.privatelink.westeurope.azure.elastic-cloud.com:9243' });

// let elasticsearch = require('elasticsearch');

// let elasticClient = new elasticsearch.Client({
//     host: '10.212.1.130:19200',
//     log: 'info'
// });

//Get current month and year (UTC format)
let today = new Date();
let Year = today.getFullYear();
let Month = today.getMonth()+1; // the method returns 0-11 values but we have 1-12 months

let indexName = `app-${Month}-${Year}`;

// client.index({
//     index: indexName,
//     id: '9119',
//     body: {
//         "Name": "22332Integrating Eljasticsearch ",
//         "Type": "222Tutorial",
//         "Description": "2222222This is the text of our tutorial about using Elasticsearch in your Node.js application.",
//     }
// }, function(err, resp, status) {
//     console.log(resp);
// });

// let elasticClient = new elasticsearch.Client({
//     host: '0dc6c061f19442e2b9a83c7c132af36a.privatelink.westeurope.azure.elastic-cloud.com:9243',
//     log: 'info'
// });



// Delete an existing index
function deleteIndex() {
    return client.indices.delete({
        index: indexName
    });
}
exports.deleteIndex = deleteIndex;

// create the index
function initIndex() {
    return client.indices.create({
        index: indexName
    });
}
exports.initIndex = initIndex;

// check if the index exists
function indexExists() {
    return client.indices.exists({
        index: indexName
    });
}
exports.indexExists = indexExists;

function initMapping() {
    return client.indices.putMapping({
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
    return client.index({
        index: indexName,
        type: '_doc',
        body: {
            payload: document,
            '@timestamp': document['timestamp'],
            'logbook' : 'v0.1'
        }
    });
}
exports.addDocument = addDocument;