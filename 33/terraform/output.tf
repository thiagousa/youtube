output "vm_ips" {
  description = "The IP addresses of the Proxmox VMs"
  value = {
    for vm_name, vm in proxmox_vm_qemu.cloudinit-test : vm_name => vm.default_ipv4_address
  }
}