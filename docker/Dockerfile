FROM agavelab/frontend:8.4.0

COPY ./docker/scripts /home/docker/
COPY ./ /var/lib/app

RUN chmod +x /home/docker/*.sh \
  && yarn install \
  && npm run build

ENTRYPOINT ["/home/docker/startup.sh"]