## Description

Cisco coding assignment

## Installation

```bash
$ make install
```

## Prerequisites

Docker

## Running the app

```bash
# development
$ make start

# watch mode
$ make develop
```

## Graph Operations
### Endpoints:

- Get all paths starting from the root node
Send a GET request to:

```bash
http://localhost:8080/graph/paths
```
This will return all possible paths through the directed acyclic graph (DAG), starting from the root node.

- Walk through all nodes in the graph
Send a GET request to:

```bash
http://localhost:8080/graph/walk
```
This will return a list of all unique nodes in the graph, visited once in traversal order.

## Word counter
### Endpoint:
- Upload a text file to count words
Send a POST request to:

```bash
http://localhost:8080/word-counter/upload
```
- `Content-Type: multipart/form-data`
- Body: Include the text file as the file property in the request.


## Tag

### Endpoint:
- Retrieve documents by tag
Send a GET request to:

```bash
http://localhost:8080/taggedContent?tag=<tag>

```
- Replace <tag> with the tag you want to search for. Possible values for <tag> are `animals` and `technology` as there is a dummy hardcoded json database.
This will return a JSON array of all documents associated with the specified tag and its sub-tags.
