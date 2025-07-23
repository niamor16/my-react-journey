init:
	docker run --rm -it \
		-v $(PWD)/react:/app \
		-w /app \
		node:20-alpine \
		sh -c "npm create vite@latest . -- --template react-ts"
	$(MAKE) perms

	# Patch vite.config.ts
	@echo "✅ Mise à jour de vite.config.ts..."
	@sed -i '/defineConfig({/a\  server: {\n    host: \"0.0.0.0\",\n    port: 5173,\n    strictPort: true\n  },' react/vite.config.ts

	$(MAKE) install
	$(MAKE) dev

perms:
	sudo chown -R $(shell id -u):$(shell id -g) react
	sudo chmod -R u+rwX react

install:
	docker compose run --rm node npm install

dev:
	docker compose up

build:
	docker compose run --rm node npm run build
