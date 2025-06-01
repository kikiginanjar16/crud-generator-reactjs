import os
import json
from jinja2 import Environment, FileSystemLoader

# Load konfigurasi
def load_config(config_path="config.json"):
    with open(config_path, 'r') as f:
        return json.load(f)

# Generate komponen
def generate_component(component, api_base_url, output_dir="output/generated_components"):
    # Setup Jinja2 environment with custom delimiters
    env = Environment(
        loader=FileSystemLoader('templates'),
        variable_start_string='<%',
        variable_end_string='%>',
        block_start_string='[%',
        block_end_string='%]'
    )

    # Generate List component
    if 'list' in component:
        template = env.get_template('List.jsx.j2')
        content = template.render(
            component_name=component['name'],
            list=component['list']
        )
        os.makedirs(output_dir, exist_ok=True)
        with open(f"{output_dir}/{component['name']}List.tsx", 'w') as f:
            f.write(content)
        print(f"Generated {component['name']}List.tsx and {component['name']}List.css")

    # Generate Form component
    if 'form' in component:
        template = env.get_template('Form.jsx.j2')
        content = template.render(
            component_name=component['name'],
            form=component['form']
        )
        with open(f"{output_dir}/{component['name']}Form.tsx", 'w') as f:
            f.write(content)
        print(f"Generated {component['name']}Form.tsx and {component['name']}Form.css")

    # Generate Service
    template = env.get_template('Service.js.j2')
    content = template.render(
        component_name=component['name'],
        api_base_url=api_base_url,
        endpoint=component['list']['endpoint'],
        form=component['form']
    )
    os.makedirs(f"{output_dir}/services", exist_ok=True)
    with open(f"{output_dir}/services/{component['name']}Service.ts", 'w') as f:
        f.write(content)
    print(f"Generated services/{component['name']}Service.ts")

# Generate App.jsx
def generate_app(config, output_dir="output/generated_components"):
    env = Environment(
        loader=FileSystemLoader('templates'),
        variable_start_string='<%',
        variable_end_string='%>',
        block_start_string='[%',
        block_end_string='%]'
    )
    template = env.get_template('App.jsx.j2')
    content = template.render(
        module=config['module'],
        components=config['components']
    )
    os.makedirs(output_dir, exist_ok=True)
    with open(f"{output_dir}/{config['module']}Page.jsx", 'w') as f:
        f.write(content)
    print(f"Generated App.jsx and App.css")

# Main function
def main():
    config = load_config()
    print(config)
    for component in config.get("components", []):
        generate_component(component, config['apiBaseUrl'])
    generate_app(config)

if __name__ == "__main__":
    main()