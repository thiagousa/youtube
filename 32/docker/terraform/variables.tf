# Define variables for sensitive or customizable values
variable "pm_api_url" {
  description = "Proxmox API URL"
  type        = string
}

variable "pm_api_token_id" {
  description = "Proxmox API Token ID"
  type        = string
}

variable "pm_api_token_secret" {
  description = "Proxmox API Token Secret"
  type        = string
}

variable "target_node" {
  description = "Node name in the Proxmox cluster"
  type        = string
}

variable "vm_name" {
  description = "Name of the virtual machine"
  type        = string
}

variable "template" {
  description = "Name of the template to clone from"
  type        = string
}

variable "vm_description" {
  description = "Description for the virtual machine"
  type        = string
}

variable "cores" {
  description = "Number of cores for the VM"
  type        = number
}

variable "sockets" {
  description = "Number of sockets for the VM"
  type        = number
}

variable "memory" {
  description = "Memory for the VM in MB"
  type        = number
}

variable "local_storage" {
  description = "Name of the local storage"
  type        = string
}

variable "disk_size" {
  description = "Size of the disk in GB"
  type        = number
}

variable "network_bridge" {
  description = "Network bridge"
  type        = string
}

variable "user"  {
  description = "User for cloud-init"
  type        = string
}

variable "ssh_key" {
  description = "SSH key for cloud-init"
  type        = string
}