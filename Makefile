test:
	TESTBUILD=true npx webpack

clean:
	rm -fr test-dist/

build:
	npx webpack --config webpack.config.js