#!/bin/sh

moduleName="ace-admin"
pidPath="../$moduleName-tpid"

rm -f $pidPath

nohup java -jar ../$moduleName.jar > ./run.log 2>&1 &

echo $! > $pidPath