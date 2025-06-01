# React Component Generator

This Python script generates React components (TypeScript) using Jinja2 templates based on a JSON configuration file. It creates List components, Form components, Service files, and an App page for a specified module.

## Features
- Generates React components with TypeScript support
- Creates List and Form components based on configuration
- Generates service files for API interactions
- Produces a main App page for the module
- Uses custom Jinja2 delimiters (`<% %>` for variables, `[% %]` for blocks)
- Configurable via command-line arguments

## Prerequisites
- Python 3.6+
- Required Python packages:
  - `jinja2`
  - `argparse` (included in Python standard library)

## Installation
1. Clone or download this repository.
2. Install dependencies:
   ```bash
   pip install jinja2
   ```

## Project Structure
```
project/
├── templates/                # Jinja2 template files
│   ├── List.jsx.j2
│   ├── Form.jsx.j2
│   ├── Service.js.j2
│   └── App.jsx.j2
├── config.json              # Configuration file
├── generator.py             # Main script
└── output/                  # Generated files directory
```

## Configuration
The script uses a `config.json` file to define the module and components. Example structure:
```json
{
  "module": "User",
  "apiBaseUrl": "https://api.example.com",
  "components": [
    {
      "name": "User",
      "list": {
        "endpoint": "/users"
      },
      "form": {
        "fields": ["name", "email"]
      }
    }
  ]
}
```

## Usage
Run the script with default settings:
```bash
python generator.py
```

Specify custom configuration file and output directory:
```bash
python generator.py --config custom_config.json --output-dir custom_output
```

### Command-Line Arguments
- `--config`: Path to the JSON configuration file (default: `config.json`)
- `--output-dir`: Base output directory for generated files (default: `output`)

## Output
The script generates the following files in `output/<module_name>/`:
- `<ComponentName>List.tsx`: List component
- `<ComponentName>Form.tsx`: Form component
- `services/<ComponentName>Service.ts`: Service file
- `<ModuleName>Page.jsx`: Main app page
- Associated CSS files for components

## Example
To generate components for a "User" module:
1. Ensure `config.json` is configured with the module and component details.
2. Run:
   ```bash
   python generator.py
   ```
3. Check the `output/User/` directory for generated files.

## Notes
- Ensure the `templates` directory contains the required Jinja2 templates.
- The script creates directories as needed in the output path.
- Generated files use TypeScript (.tsx, .ts) for React components and services.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
MIT License