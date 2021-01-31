APP=poke-api
COMMIT=$(shell git rev-parse HEAD)
IMAGE=$(DOCKER_USER)/$(APP):$(COMMIT)

local: clean compile copy-files build local-docker

deploy: clean compile copy-files build upload-heroku

push-docker: build upload-docker

clean:
	rm -rf dist

compile:
	npm run build

copy-files:
	cp package*.json dist

build:
	docker build -t $(IMAGE) .

local-docker:
	docker run -p5000:5000 $(IMAGE)

upload-docker:
	docker login -u $(DOCKER_USER) -p $(DOCKER_PASSWORD)
	docker push $(IMAGE)

upload-heroku:
	docker login --username=$(HEROKU_USER) --password=$(HEROKU_PASSWORD) registry.heroku.com
	heroku container:login
	heroku container:push web --app=$(APP)
	heroku container:release web --app=$(APP)
	