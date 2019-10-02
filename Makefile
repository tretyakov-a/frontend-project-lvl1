install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
brain-even:
	npx babel-node src/bin/brain-even.js
brain-calc:
	npx babel-node src/bin/brain-calc.js
brain-gcd:
	npx babel-node src/bin/brain-gcd.js
brain-prog:
	npx babel-node src/bin/brain-progression.js
publish:
	rm -R dist
	npm publish --dry-run
lint:
	npx eslint .
