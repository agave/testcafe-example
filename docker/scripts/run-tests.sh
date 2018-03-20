#!/bin/bash

until nc -z -v -w30 localhost 4000
do
  echo "Waiting for app to start..."
  sleep 5
done

yarn run test-ci