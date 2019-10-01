install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
brain-even:
	npx babel-node src/bin/brain-even.js
publish:
	rm -R dist
	npm publish --dry-run
lint:
	npx eslint .

