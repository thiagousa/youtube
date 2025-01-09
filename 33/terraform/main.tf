resource "proxmox_vm_qemu" "cloudinit-test" {
  for_each = { for idx, vm in var.vm_configs : vm.name => vm }

  name        = each.value.name
  vmid        = each.value.vmid # Explicit VM ID
  desc        = each.value.description
  target_node = var.target_node
  clone       = var.template
  agent       = 1

  os_type = "cloud-init"
  cores   = each.value.cores
  sockets = 1
  vcpus   = 0
  cpu     = "host"
  memory  = each.value.memory
  scsihw  = "virtio-scsi-pci"

  # Setup the disk
  disks {
    ide {
      ide2 {
        cloudinit {
          storage = var.local_storage
        }
      }
    }
    scsi {
      scsi0 {
        disk {
          size      = each.value.disk_size
          cache     = "writeback"
          storage   = "local"
          replicate = true
        }
      }
    }
  }

  network {
    model  = "virtio"
    bridge = var.network_bridge
  }

  boot      = "order=scsi0"
  ipconfig0 = "ip=dhcp"

  serial {
    id   = 0
    type = "socket"
  }

  ciuser  = var.user
  sshkeys = <<EOF
  ${var.ssh_key}
  EOF
}