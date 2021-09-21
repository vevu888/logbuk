fffm_elasticsearch
==================

Set up elasticsearch on remote

Role Variables
--------------

These three variables are used to specify the filename of the configuration file templates.

- ``fffm_elasticsearch_logstash_conf``
- ``fffm_elasticsearch_elasticsearch_yml``
- ``fffm_elasticsearch_kibana_yml``

Running behind a reverse proxy
------------------------------

Kibana can be protected by an apache2 reverse proxy by adding an appropriate section to site configuration file:

```
<Location "/kibana">
    ProxyPass         http://127.0.0.1:5601 retry=0
    ProxyPassReverse  http://127.0.0.1:5601
</Location>
```

Alternatively, an NGINX reverse proxy can be used:

```
location /kibana {
    rewrite /kibana$      /   break;
    rewrite /kibana/(.*)$ /$1 break;
    proxy_pass http://127.0.0.1:5601;
    proxy_redirect off;
    proxy_buffering off;
    proxy_http_version 1.1;
    proxy_set_header Connection "Keep-Alive";
    proxy_set_header Proxy-Connection "Keep-Alive";
}
```

Also, for both proxy configurations to work, the Kibana base path needs to be configured accordingly:

```
server.basePath: "/kibana"
```

Note that this configuration setting behaves not really intuitve. Cf. https://github.com/elastic/kibana/issues/6665

RabbitMQ input for Logstash
---------------------------

The default installation comes with a plugin to enable RabbitMQ input using AMQP. An example configuration stanza in the input queue could look like this:

```
input {
  rabbitmq {
    host => "zdeoko04sirmq01.deoko.zeiss.org"
    port => 5671
    user => "dfm-ltdssla"
    password => "???"
    ssl => true
    ssl_certificate_password => "???"
    ssl_certificate_path => "/path/to/your_cert.p12"
    subscription_retry_interval_seconds => 5
    vhost => "dft"
    queue => "logstash"
  }
}
```

The certificate in the binary PKCS#12 format (*.p12) can be created using the tool ``keystore``. See Reference 2. below.

References
----------

1. https://www.elastic.co/guide/en/logstash/current/plugins-inputs-rabbitmq.html
2. https://github.com/logstash-plugins/logstash-input-rabbitmq/issues/113

Author Information
------------------

felix dot schulthess at zeiss dot com
