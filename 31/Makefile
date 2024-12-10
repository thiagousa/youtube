# Define variables
VM_ID=6000
VM_NAME=ubuntu-24-04-cloud-init-template
IMAGE_URL=https://cloud-images.ubuntu.com/noble/current/noble-server-cloudimg-amd64.img
IMAGE_NAME=noble-server-cloudimg-amd64.img
STORAGE=local
DISK_SIZE=50G
BRIDGE=vmbr0

# Default target
all: 1-prepare_dir 2-download_image 3-customize_image 4-create_vm 5-import_disk 6-configure_vm 7-resize_disk 9-create_template
# Step 1: Create 'chat' directory and change to it
1-prepare_dir:
	mkdir -p template
	cd template

# Step 2: Download Ubuntu Cloud Image
2-download_image: prepare_dir
	cd template && wget $(IMAGE_URL)

# Step 3: Add QEMU guest agent to the image
3-customize_image: download_image
	cd template && virt-customize --add $(IMAGE_NAME) --install qemu-guest-agent

# Step 4: Create a new Proxmox VM
4-create_vm: customize_image
	qm create $(VM_ID) --name $(VM_NAME) --numa 0 --ostype l26 --cpu cputype=host --cores 4 --sockets 2 --memory 6144 --net0 virtio,bridge=$(BRIDGE)

# Step 5: Import the cloud image as a disk
5-import_disk: create_vm
	cd template && qm importdisk $(VM_ID) $(IMAGE_NAME) $(STORAGE)

# Step 6: Configure the VM disk and boot settings
6-configure_vm: import_disk
	qm set $(VM_ID) --scsihw virtio-scsi-pci --scsi0 $(STORAGE):$(VM_ID)/vm-$(VM_ID)-disk-0.raw
	qm set $(VM_ID) --ide2 $(STORAGE):cloudinit
	qm set $(VM_ID) --boot c --bootdisk scsi0
	qm set $(VM_ID) --serial0 socket --vga serial0
	qm set $(VM_ID) --agent enabled=1

# Step 7: Resize the VM disk
7-resize_disk: configure_vm
	qm disk resize $(VM_ID) scsi0 +$(DISK_SIZE)

# Step 8: Exit the shell (for manual process simulation)
8-exit_shell:
	exit

# Step 9: Convert VM to a template
9-create_template: resize_disk
	qm template $(VM_ID)

# Clean up (optional)
10-clean:
	rm -rf chat
