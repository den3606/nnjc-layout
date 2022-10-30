#!/bin/bash
`npx generate-schema schemas/raws/$1.json -j > schemas/$1.json`
`npx json2ts -i schemas/$1.json > typings/$1.d.ts`
echo 'finished'
