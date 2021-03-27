VIRTUAL_ENV=.venv
PYTHON_PATH=${VIRTUAL_ENV}/bin/
.DEFAULT_GOAL := help

define BROWSER_PYSCRIPT
import webbrowser
webbrowser.open("http://localhost:8000/")
endef
export BROWSER_PYSCRIPT

venv:  ## Create python virtualenv at `./venv/`
	if [ ! -d "./${VIRTUAL_ENV}" ]; \
	then clear; virtualenv ${VIRTUAL_ENV}; \
	else clear; echo "Virtual Environment folder ${VIRTUAL_ENV} already exists"; \
	fi

install: venv  ## Install and setup project dependencies
	${PYTHON_PATH}python3 -m pip install -r requirements.txt
ifneq ($(CI),True)
	${PYTHON_PATH}python3 manage.py migrate
endif

djrun: install  ## Start Django server locally
	clear
	${PYTHON_PATH}python3 -c "$$BROWSER_PYSCRIPT"
	${PYTHON_PATH}python3 manage.py runserver

djmigrate:  ## Run Django migrations
	${PYTHON_PATH}python3 manage.py migrate

djmm:  ## Create Django migrations
	${PYTHON_PATH}python3 manage.py makemigrations

help:  ## Display this help
	# https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-12s\033[0m %s\n", $$1, $$2}'
.PHONY: help
