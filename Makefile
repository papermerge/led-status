test:
	npm run-script test
	npx mocha test-dist/tests.bundle.js --require source-map-support/register

clean:
	rm -fr test-dist/

build:
	npm run-script build

