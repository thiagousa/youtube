# Define variables
VM_ID=6000
VM_NAME=ubuntu-24-04-cloud-init-template
IMAGE_URL=https://cloud-images.ubuntu.com/noble/current/noble-server-cloudimg-amd64.img
IMAGE_NAME=noble-server-cloudimg-amd64.img
STORAGE=local
DISK_SIZE=50G
BRIDGE=vmbr0

# Default target
all: 0_install_tools 1_prepare_dir 2_download_image 3_customize_image 4_create_vm 5_import_disk 6_configure_vm 7_resize_disk 8_create_template

# Step 0: Install required tools
0_install_tools:
	apt install libguestfs-tools -y

# Step 1: Create 'template' directory
1_prepare_dir:
	mkdir -p template

# Step 2: Download Ubuntu Cloud Image
2_download_image:
	test -f template/$(IMAGE_NAME) || (cd template && wget $(IMAGE_URL))

# Step 3: Add QEMU guest agent to the image
# Step 3: Add QEMU guest agent to the image and customize with unique MAC
3_customize_image:
	test -f template/$(IMAGE_NAME) && \
	cd template && \
	virt-customize --add $(IMAGE_NAME) \
		--install qemu-guest-agent \
		--run-command 'systemd-machine-id-setup' \
		--run-command 'truncate -s 0 /etc/machine-id && echo "generate unique machine-id on boot" > /etc/machine-id' \
		--run-command 'rm -f /var/lib/dbus/machine-id && ln -s /etc/machine-id /var/lib/dbus/machine-id'

# Step 4: Create a new Proxmox VM
4_create_vm:
	qm list | grep -q $(VM_ID) || qm create $(VM_ID) --name $(VM_NAME) --numa 0 --ostype l26 --cpu cputype=host --cores 4 --sockets 2 --memory 6144 --net0 virtio,bridge=$(BRIDGE)

# Step 5: Import the cloud image as a disk
5_import_disk:
	test -f template/$(IMAGE_NAME) && qm importdisk $(VM_ID) template/$(IMAGE_NAME) $(STORAGE)

# Step 6: Configure the VM disk and boot settings
6_configure_vm:
	qm set $(VM_ID) --scsihw virtio-scsi-pci --scsi0 $(STORAGE):$(VM_ID)/vm-$(VM_ID)-disk-0.raw
	qm set $(VM_ID) --ide2 $(STORAGE):cloudinit
	qm set $(VM_ID) --boot c --bootdisk scsi0
	qm set $(VM_ID) --serial0 socket --vga serial0
	qm set $(VM_ID) --agent enabled=1

# Step 7: Resize the VM disk
7_resize_disk:
	#qm disk resize $(VM_ID) scsi0 +$(DISK_SIZE)

# Step 8: Convert VM to a template
8_create_template:
	qm template $(VM_ID)

# Clean up (optional)
9_clean:
	rm -rf template

# Declare targets as phony
.PHONY: all 0_install_tools 1_prepare_dir 2_download_image 3_customize_image 4_create_vm 5_import_disk 6_configure_vm 7_resize_disk 8_create_template 9_clean
