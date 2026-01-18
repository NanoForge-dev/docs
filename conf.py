extensions = ["breathe", "myst-parser"]

html_theme = "sphinx_rtd_theme"

# Breathe configuration
breathe_projects = {"ecs-lib": "engine/docs/registry/api/xml"}
breathe_default_project = "ecs-lib"

source_suffix = {
    ".rst": "restructuredtext",
    ".txt": "markdown",
    ".md": "markdown",
}

project = "Nanoforge"
