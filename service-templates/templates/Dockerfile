FROM alpine:latest

ENV SERVICE_NAME "{{ ServiceName }}"

ENV SERVICE_Type "{{ ServiceType }}"

{% for command in Dockerfile.PreInstalledCommands %}
{{ command }}
{% endfor %}


RUN {{ Dockerfile.InstallCommand }}

{% for command in Dockerfile.PostInstalledCommands %}
{{ command }}
{% endfor %}

RUN "/bin/bash"