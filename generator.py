import os
import json
import argparse
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
    
    # Generate Form component
    if 'form' in component:
        template = env.get_template('Detail.jsx.j2')
        content = template.render(
            component_name=component['name'],
            form=component['form']
        )
        with open(f"{output_dir}/{component['name']}Detail.tsx", 'w') as f:
            f.write(content)
        print(f"Generated {component['name']}Detail.tsx and {component['name']}Form.css")

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
    with open(f"{output_dir}/{config['module']}Page.tsx", 'w') as f:
        f.write(content)
    print(f"Generated App.jsx and App.css")

# Main function
def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(description='Generate React components from configuration')
    parser.add_argument('--config', default='config.json', help='Path to configuration JSON file')
    parser.add_argument('--output-dir', default='output', help='Base output directory for generated components')
    
    # Parse arguments
    args = parser.parse_args()

    # Load configuration
    config = load_config(args.config)
    
    # Construct output directory path using module name
    module_output_dir = os.path.join(args.output_dir, config['module'])
    
    # Generate components
    for component in config.get("components", []):
        generate_component(component, config['apiBaseUrl'], module_output_dir)
    
    # Generate app
    generate_app(config, module_output_dir)

if __name__ == "__main__":
    main()