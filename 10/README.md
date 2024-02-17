# How to Run Ubuntu as a Docker Container (fast & easy)🌟

[![VIDEO NAME](#SCREENSHOT PICTURE)](YOUTUBE LINK)

[Watch the Video](YOUTUBE LINK)

"This project will show you how to easily create an Ubuntu Container using Docker."

## Requirements

**For Windows Users:**
- Docker Desktop for Windows. [Installation Guide](https://www.youtube.com/watch?v=8MrnvUSW_34)

**For Ubuntu Users:**
- Docker. [Installation Guide](https://www.youtube.com/watch?v=f1JqnioiCaQ)

**For MacOS Users:**
- Docker Desktop for MacOS. [Installation Guide](https://www.youtube.com/watch?v=knarlToekQ0&t)

### Steps:

1. **Download the Ubuntu image**
   ```bash
   docker pull ubuntu:latest
   ```

2. **Check if the image was downloaded**
   ```bash
   docker images 
   ```

3. **Run the Ubuntu container on Docker**
   ```bash
   docker run -itd --name=ubuntu ubuntu:latest
   ```
4. **Verify if the Ubuntu Container is running**
   ```bash
   docker ps
   ```
5. **Access the Docker Ubuntu Container**
   ```bash
   docker exec -it ubuntu bash 
   ```

6. **Update the package on the container**
   ```bash
   apt update && apt upgrade -y 
   ```

7. **Install htop**
   ```bash
   apt install htop -y 
   ```
8. **Open htop app**
   ```bash
   htop
   ```
9. **Exit the container**
   
   ```
   exit
   ```

10. **Delete the Ubuntu container**
   ```bash
   docker rm  ubuntu --force
   ```

## How to Contribute 🤝

Contributions to this project are welcome! Whether you want to fix a bug, improve documentation, or add new features, please check out our [Contribution Guidelines](../CONTRIBUTING.md) to get started.

## License 📜

This project is licensed under the [MIT License](../LICENSE), so you're free to use it in your own projects.

## Support My Work

Creating accessible, high-quality videos and resources for everyone is challenging. Your support enables me to invest more in content creation, enhancing overall quality. Becoming a member offers significant support and comes with fantastic perks as a token of appreciation.

Remember, ***support is optional***. Whether you become a member or not, you'll have full access to all my videos and resources.

Support here: [https://www.patreon.com/thiagodsantos](https://www.patreon.com/thiagodsantos) or [https://www.buymeacoffee.com/thiagodsantos](https://www.buymeacoffee.com/thiagodsantos)
