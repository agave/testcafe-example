CURRENT_DIRECTORY=./

BASE_COMPOSE=-f $(CURRENT_DIRECTORY)/docker/docker-compose.yml
DEV_COMPOSE=$(BASE_COMPOSE) -f $(CURRENT_DIRECTORY)/docker/docker-compose.dev.yml
TEST_COMPOSE=$(BASE_COMPOSE) -f $(CURRENT_DIRECTORY)/docker/docker-compose.test.yml

help: Makefile
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## Build image
	@docker-compose $(BASE_COMPOSE) build

test: ## Test image
	@docker-compose $(TEST_COMPOSE) up -d
	@docker exec $(shell docker-compose -f $(TEST_COMPOSE) ps -q web-app) /home/docker/run-tests.sh

test-down: ## Clean up test env
	@docker-compose $(TEST_COMPOSE) down

dev: ## Lift dev environment
	@docker-compose $(DEV_COMPOSE) up

dev-down: ## Destroy dev environment
	@docker-compose $(DEV_COMPOSE) down

bash: ## Ssh into app container
	@docker-compose $(DEV_COMPOSE) exec web-app /bin/bash

bash-chrome: ## Ssh into chrome container
	@docker-compose $(DEV_COMPOSE) exec chrome /bin/bash
