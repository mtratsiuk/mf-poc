all:
	cd ./app-alpha && npm ci && npm run build:wrapper
	cd ..
	cd ./app-beta && npm ci && npm run build:wrapper
	cd ..
	docker-compose up --build
