variable "vm_configs" {
  description = "Configuration for multiple VMs"
  type = list(object({
    name        = string
    vmid        = number
    disk_size   = number
    cores       = number
    memory      = number
    description = string
  }))
}

variable "pm_api_url" {
  type    = string
  default = "https://192.168.1.81:8006/api2/json"
}

variable "pm_api_token_id" {
  type    = string
  default = "root@pam!terraform"
}

variable "pm_api_token_secret" {
  type      = string
  sensitive = true
}

variable "target_node" {
  type    = string
  default = "pve"
}

variable "template" {
  type    = string
  default = "ubuntu-24-04-cloud-init-template"
}

variable "local_storage" {
  type    = string
  default = "local"
}

variable "network_bridge" {
  type    = string
  default = "vmbr0"
}

variable "user" {
  type = string
}

variable "ssh_key" {
  type = string
}