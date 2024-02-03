---
# How to Install Docker on Linux

## Introduction
This guide provides step-by-step instructions on how to install Docker on a Linux system. Docker is a powerful platform for building, deploying, and managing containerized applications. 

![Watch the Video](

[![How to Install Docker on Ubuntu](docker-ubuntu.png)](https://www.youtube.com/watch?v=f1JqnioiCaQ)

[Watch the Video](https://www.youtube.com/watch?v=f1JqnioiCaQ)

## Requirements
- A Linux-based operating system
- Command-line/terminal access
- Sudo privileges

## Installation Steps

### Step 1: Update System Packages
First, update your system's package database:

```bash
sudo apt-get update
```

### Step 2: Install Required Packages
Install packages that allow `apt` to use a repository over HTTPS:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

### Step 3: Add Docker’s Official GPG Key
Fetch and add Docker's official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

### Step 4: Set Up the Stable Repository
Set up the stable repository:

```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

### Step 5: Install Docker Engine
Update the `apt` package index, and install the latest version of Docker Engine and containerd:

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### Step 6: Verify Docker Installation
Verify that Docker is installed correctly by running the hello-world image:

```bash
sudo docker run hello-world
```

This command downloads a test image and runs it in a container. If the installation was successful, the message "Hello from Docker!" will be displayed.

## Post-installation Steps
To use Docker without `sudo`, you need to add your user to the `docker` group:

```bash
sudo chmod 666 /var/run/docker.sock
```

```bash
sudo usermod -aG docker $USER
```
Log out and log back in for this to take effect.

## Conclusion
Docker is now installed and ready to use on your Linux system. For more information on using Docker, refer to the [Docker documentation](https://docs.docker.com/).

## Support My Work

Creating free, high-quality videos and resources for everyone is challenging. Your support enables me to invest more in content creation, enhancing overall quality. Becoming a member offers significant support and comes with cool perks as a token of appreciation.

Remember, ***support is optional***. Whether you choose to become a member or not, you'll have full access to all my videos and resources.

Support here: [https://www.patreon.com/thiagodsantos](https://www.patreon.com/thiagodsantos) or [https://www.buymeacoffee.com/thiagodsantos](https://www.buymeacoffee.com/thiagodsantos)
