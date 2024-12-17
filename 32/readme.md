# Automate Your Proxmox Virtual Machines with Terraform NOW!

## Project Overview

This project uses Terraform to manage infrastructure as code. It provides an automated way to deploy and manage cloud resources using Infrastructure as Code (IaC) principles.

## Requirements

- Docker
- Make
- Access to PROXMOX

## Project Structure

```
.
├── Makefile         # Contains all make commands for project management
├── README.md        # This file
└── terraform/       # Contains all Terraform configurations
    ├── main.tf      # Main Terraform configuration
    ├── variables.tf # Variable definitions
    ├── outputs.tf   # Output definitions
    └── terraform.tfvars # Variable values (gitignored)
```

## Quick Start

1. Clone the repository:
```bash
git clone git@github.com:thiagousa/youtube.git
cd 32
```

2. Configure your variables in `terraform/terraform.tfvars`:
```hcl
## Configuration Variables

The following variables need to be configured in your terraform.tfvars file:
pm_api_url: Proxmox API URL
pm_api_token_id: Proxmox API Token ID
pm_api_token_secret: Proxmox API Token Secret
target_node: Target Proxmox node
vm_name: Name of the virtual machine
target_node: Target Proxmox node
template: Name of the cloud-init template to clone
cores: Number of CPU cores
sockets: Number of CPU sockets
memory: RAM in MB
local_storage: Storage location for cloud-init
network_bridge: Network bridge name
user: Cloud-init username
ssh_key: SSH public key for VM access
```

3. Initialize and apply the configuration:
```bash
make all
make init
make plan
make apply
```

## Available Make Commands

| Command | Description |
|---------|-------------|
| `make init` | Initialize Terraform working directory |
| `make plan` | Generate and show an execution plan |
| `make apply` | Build or change infrastructure |
| `make destroy` | Destroy previously-created infrastructure |
| `make output` | Show output values from your infrastructure |
| `make fix` | Format Terraform configuration files |
| `make build` | Prepare terraform.tfvars from example file |
| `make readme` | Generate this README file |

## Docker Usage

This project uses Docker to ensure consistent Terraform execution environments. The Makefile automatically handles Docker operations, but you can also run Terraform commands directly using:

```bash
docker run --rm -v $(PWD)/terraform:/workspace -w /workspace hashicorp/terraform:latest <command>
```

## Configuration Variables

Variables are defined in `terraform/variables.tf` and can be set in `terraform/terraform.tfvars`. Below are the available variables:

| Variable | Description | Type | Default |
|----------|-------------|------|---------|
| [Variables will be automatically populated by the make readme command] |

## Outputs

The following outputs are available after applying the Terraform configuration:

| Output | Description |
|--------|-------------|
| [Outputs will be automatically populated by the make readme command] |

## State Management

This project uses local state by default. For production environments, it's recommended to configure remote state storage (e.g., S3, Azure Storage, GCS) and state locking.

To configure remote state:

1. Uncomment and configure the backend block in `main.tf`
2. Run `make init` to initialize the backend

## Best Practices

1. Always run `make plan` before `make apply`
2. Keep sensitive values in `terraform.tfvars` (gitignored)
3. Use meaningful names for resources
4. Tag resources appropriately
5. Review security group rules and IAM permissions carefully

## Troubleshooting

Common issues and solutions:

1. **Docker not running:**
   - Ensure Docker daemon is running
   - Verify Docker permissions

2. **Terraform initialization fails:**
   - Check internet connectivity
   - Verify provider configuration
   - Ensure proper credentials are configured

3. **Apply fails:**
   - Review error messages in the output
   - Verify resource quotas and limits
   - Check for conflicting resources

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

- Sensitive values should never be committed to version control
- Use environment variables or encrypted files for secrets
- Regularly rotate credentials
- Follow the principle of least privilege when assigning permissions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the project repository.