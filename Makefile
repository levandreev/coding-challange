develop:
	npx nest start --watch 

install:
	npm install

start:
	docker compose up

lint-fix:
	npx eslint --ext ts src test --fix

