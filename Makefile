init:
	mkdir -p frontend
	docker run --rm -it \
		-v $(PWD)/frontend:/app \
		-w /app \
		node:20-alpine \
		sh -c "npm create vite@latest . -- --template react-ts"
	$(MAKE) perms
	$(MAKE) install
	$(MAKE) dev

perms:
	chmod -R u+rwX frontend

install:
	docker compose run --rm node npm install

dev:
	docker compose up

build:
	docker compose run --rm node npm run build
