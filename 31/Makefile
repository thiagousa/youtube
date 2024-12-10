# Define variables
VM_ID=9000
VM_NAME=ubuntu-2404-cloud-init
IMAGE_URL=https://cloud-images.ubuntu.com/noble/current/noble-server-cloudimg-amd64.img
IMAGE_NAME=noble-server-cloudimg-amd64.img
STORAGE=local
DISK_SIZE=50G
BRIDGE=vmbr0

# Default target
all: prepare_dir download_image customize_image create_vm import_disk configure_vm resize_disk create_template

# Step 1: Create 'chat' directory and change to it
prepare_dir:
	mkdir -p chat
	cd chat

# Step 2: Download Ubuntu Cloud Image
download_image: prepare_dir
	cd chat && wget $(IMAGE_URL)

# Step 3: Add QEMU guest agent to the image
customize_image: download_image
	cd chat && virt-customize --add $(IMAGE_NAME) --install qemu-guest-agent

# Step 4: Create a new Proxmox VM
create_vm: customize_image
	qm create $(VM_ID) --name $(VM_NAME) --numa 0 --ostype l26 --cpu cputype=host --cores 4 --sockets 2 --memory 6144 --net0 virtio,bridge=$(BRIDGE)

# Step 5: Import the cloud image as a disk
import_disk: create_vm
	cd chat && qm importdisk $(VM_ID) $(IMAGE_NAME) $(STORAGE)

# Step 6: Configure the VM disk and boot settings
configure_vm: import_disk
	qm set $(VM_ID) --scsihw virtio-scsi-pci --scsi0 $(STORAGE):$(VM_ID)/vm-$(VM_ID)-disk-0.raw
	qm set $(VM_ID) --ide2 $(STORAGE):cloudinit
	qm set $(VM_ID) --boot c --bootdisk scsi0
	qm set $(VM_ID) --serial0 socket --vga serial0
	qm set $(VM_ID) --agent enabled=1

# Step 7: Resize the VM disk
resize_disk: configure_vm
	qm disk resize $(VM_ID) scsi0 +$(DISK_SIZE)

# Step 8: Exit the shell (for manual process simulation)
exit_shell:
	exit

# Step 9: Convert VM to a template
create_template: resize_disk
	qm template $(VM_ID)

# Clean up (optional)
clean:
	rm -rf chat
