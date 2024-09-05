
import json
import yaml
import sys
import os
import argparse

def json_to_yaml(json_filepath, yaml_filepath):
    with open(json_filepath, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    with open(yaml_filepath, 'w', encoding='utf-8') as yaml_file:
        yaml.dump(data, yaml_file, allow_unicode=True, default_flow_style=False)

def yaml_to_json(yaml_filepath, json_filepath):
    with open(yaml_filepath, 'r', encoding='utf-8') as yaml_file:
        data = yaml.safe_load(yaml_file)

    with open(json_filepath, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)

def translate_file(filepath, output_filepath=None):
    file_extension = os.path.splitext(filepath)[-1].lower()

    if not output_filepath:
        if file_extension == '.json':
            output_filepath = os.path.splitext(filepath)[0] + '.yaml'
        elif file_extension == '.yaml' or file_extension == '.yml':
            output_filepath = os.path.splitext(filepath)[0] + '.json'
        else:
            print(f"Unsupported file extension: {file_extension}")
            return

    if file_extension == '.json':
        json_to_yaml(filepath, output_filepath)
        print(f"Converted {filepath} to {output_filepath}")
    elif file_extension == '.yaml' or file_extension == '.yml':
        yaml_to_json(filepath, output_filepath)
        print(f"Converted {filepath} to {output_filepath}")
    else:
        print(f"Unsupported file extension: {file_extension}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert JSON to YAML or YAML to JSON.')
    parser.add_argument('input', help='Input file path')
    parser.add_argument('--output', '-o', help='Output file path (optional)')

    args = parser.parse_args()

    translate_file(args.input, args.output)
