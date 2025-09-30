# Use Ubuntu 22.04 as base image
FROM ubuntu:22.04

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Update package list and install dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-dev \
    openssh-client \
    sshpass \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Install Ansible via pip
RUN pip3 install ansible

# Set working directory
WORKDIR /ansible

# Verify installation
RUN ansible --version

RUN useradd -m -s /bin/bash tsantos

USER tsantos
# Default command
CMD ["bash"]