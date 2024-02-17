# Create a container image in Docker (step by step) 🌟

[![VIDEO NAME](#SCREENSHOT PICTURE)](YOUTUBE LINK)

[Watch the Video](YOUTUBE LINK)

# Creating Container Image on Docker

"This project will show you how to easily make an Ubuntu Container using Docker."

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
   docker pull nginx:latest
   ```
2. Create Docker Image
Generate your application's Docker image

```bash
docker build -t my-docker-image:1.0 .
```

3. Verify Image Creation
Confirm the Docker image has been successfully created.

```bash
docker images
```

4. Launch Docker Image
Deploy your Docker image, making sure to expose the necessary port.

```bash
docker run -itd -p 8888:80 --name=my-docker-image --v=./:/usr/share/nginx/html/ my-docker-image:1.0
```

5. Validate Application Use a web browser to check if the application are active and accessible.

```bash
localhost:8888
```
6. **Access the Docker Ubuntu Container**
   ```bash
   docker exec -it my-docker-image bash 
   ```

7. **Open htop app**
   ```bash
   htop
   ```
8. **Exit the container**
   
   ```
   exit
   ```

10. **Delete the Ubuntu container**
   ```bash
   docker rm  my-docker-image --force
    ```

11. **Launch Docker Image**

```bash
docker run -itd -p 8888:80 --name=my-docker-image my-docker-image:1.0
```

12. Validate Application Use a web browser to check if the application are active and accessible.

```bash
localhost:8888
```
13. **Delete the Ubuntu container**
   ```bash
   docker rm  my-docker-image --force
    ```
## How to Contribute 🤝

Contributions to this project are welcome! Whether you want to fix a bug, improve documentation, or add new features, please check out our [Contribution Guidelines](../CONTRIBUTING.md) to get started.

## License 📜

This project is licensed under the [MIT License](../LICENSE), so you're free to use it in your own projects.

## Support My Work

Creating accessible, high-quality videos and resources for everyone is challenging. Your support enables me to invest more in content creation, enhancing overall quality. Becoming a member offers significant support and comes with fantastic perks as a token of appreciation.

Remember, ***support is optional***. Whether you become a member or not, you'll have full access to all my videos and resources.

Support here: [https://www.patreon.com/thiagodsantos](https://www.patreon.com/thiagodsantos) or [https://www.buymeacoffee.com/thiagodsantos](https://www.buymeacoffee.com/thiagodsantos)
