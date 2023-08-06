# Contributing

## What and how to contribute

Please submit a pull request or create an issue to add a new language to the list. We are looking for language implementations that are either actively maintained or largely "done". The VM, bytecode compiler, and standard library (if any) must have a free (*libre*) license. They may have optional add-ons with any license. A Datalog implementation must be able to parse Datalog source code; it must not be just an [EDSL](https://en.wikipedia.org/wiki/Domain-specific_language#External_and_Embedded_Domain_Specific_Languages).

## Do not edit `README.md` directly

`README.md` is automatically generated from `README.md.jinja2` and the data in [`data/projects.toml`](data/projects.toml). Do not edit `README.md` directly. To add a project or update a project's information, edit `data/projects.toml`. Edit `README.md.njk` to change information not derived from `data/projects.toml`.
