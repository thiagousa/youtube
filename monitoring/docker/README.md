# Monitoring Stack with Prometheus, AlertManager, Grafana, Node Exporter, MailHog, and NGINX 🚀

![Project Preview](https://github.com/thiagousa/youtube/blob/main/monitoring/docker/screenshot/docker-design.png)

Welcome to the Monitoring Stack project, a robust and comprehensive solution for monitoring and managing your infrastructure. This project combines powerful open-source tools to help you keep learning the monitoring infrastruture. 

## What's Inside? 🧐

This project provides an out-of-the-box setup for a monitoring stack that includes:

- **Prometheus**: A leading open-source monitoring and alerting toolkit, designed for reliability and scalability.

- **AlertManager**: Handles alerts sent by various applications, deduplicates, groups, routes, and delivers them to the right recipients.

- **Grafana**: An open-source platform for monitoring and observability, complete with customizable dashboards and powerful visualization options.

- **Node Exporter**: A Prometheus exporter that collects hardware and OS metrics, making it essential for system monitoring.

- **MailHog**: An email testing tool for developers, allowing you to configure SMTP delivery and view messages conveniently.

- **NGINX Proxy Manager**: Simplify reverse proxying to websites with free SSL, without the complexity of Nginx or Letsencrypt configuration.

## Getting Started 🚀

Follow the detailed setup instructions in the [project's documentation](https://github.com/thiagousa/youtube/tree/main/monitoring/docker) to get your monitoring stack up and running in no time. With just a few simple steps, you'll have access to a fully functional monitoring environment.

## Features and Benefits 🌟

- **Easy Configuration**: The project includes well-defined configuration files for each component, making customization straightforward.

- **Powerful Visualization**: Grafana empowers you to create stunning dashboards and visualize data in real-time, helping you gain insights into your infrastructure.

- **Alerting and Notifications**: AlertManager ensures that you're promptly notified of any issues, allowing you to take proactive measures.

- **Scalable and Reliable**: Prometheus, at its core, is designed for reliability and scalability, making it suitable for both small and large-scale environments.

- **Local Development**: The project is perfect for local development, enabling you to test and optimize your monitoring setup.

## How to Contribute 🤝

Contributions to this project are welcome! Whether you want to fix a bug, improve documentation, or add new features, please check out our [Contribution Guidelines](../../CONTRIBUTING.md) to get started.

## License 📜

This project is licensed under the [MIT License](../../LICENSE), so you're free to use it in your own projects.

## Get Started Today! 🚀

Ready to take control of your infrastructure's monitoring? Get started with this Monitoring Stack project and keep your systems running smoothly!

[![Watch the Video](https://img.youtube.com/vi/YourVideoID/0.jpg)](https://www.youtube.com/watch?v=YourVideoID)

Feel free to customize and expand upon this description as needed for your GitHub project.

![Screenshot](/monitoring/docker/screenshot/docker-design.png)

## Requirements

To set up your environment for using Docker, ensure you have the following prerequisites:

Docker Desktop: This is a necessary tool for running containerized applications. Make sure Docker Desktop is installed and operational on your system. You can download and install Docker Desktop from the official website at Docker Desktop.

Git: Git is a version control system often used for code management. It is essential for cloning repositories, managing source code versions, and collaborating with other developers. You can download Git from Git's official website.

Once you have these tools installed, you can proceed with setting up your Docker environment.

### Linux or MacOS 🏠 Edit Your Hosts File

Add the following entries to your `/etc/hosts` file:

```plaintext
127.0.0.1 nginx.acme.net
127.0.0.1 grafana.acme.net
127.0.0.1 prometheus.acme.net
127.0.0.1 alertmanager.acme.net
127.0.0.1 nodeexport.acme.net
127.0.0.1 mailhog.acme.net
127.0.0.1 services.acme.net
```

### Windows 🏠 Edit Your Hosts File

1. **Open Notepad as an Administrator**: 😎 To wield your power and edit the Windows host file, let's start by right-clicking on the Notepad application in the Start menu. Choose "Run as administrator" because you're in control!

2. **Open the Hosts File**: 📂 In Notepad, navigate to the sacred `C:\Windows\System32\drivers\etc` folder. You won't find the host file immediately because it's a bit of a ninja. To unmask it, change the file type to "All Files (*.*)."

3. **Edit the Hosts File**: 🖋️ Select the `hosts` file and click "Open." This is your canvas!

4. **Add Host Entries**: ✍️ Now, let's sprinkle some magic. Add the host entries with the finesse of a maestro. For instance:

   ```
   127.0.0.1 nginx.acme.net
   127.0.0.1 grafana.acme.net
   127.0.0.1 prometheus.acme.net
   127.0.0.1 alertmanager.acme.net
   127.0.0.1 nodeexport.acme.net
   127.0.0.1 mailhog.acme.net
   127.0.0.1 services.acme.net
   ```

   Place these lines at the end of the hosts file, like icing on a cake!

5. **Save the Changes**: 📁 After adding the enchanting host entries, let's seal the spell with a click. Choose "File" and then "Save" in Notepad.

6. **Close Notepad**: 🚪 You've worked your magic! You can now elegantly close Notepad.

Certainly! Here's an updated `readme.md` section that explains how to clone the Git project:

## Requirements

Before you begin, make sure you have the following prerequisites:

- **Docker Desktop**: You must have Docker Desktop installed and running on your system. You can download and install Docker Desktop from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).

- **Operating System**: This project is designed to run on Linux-based systems. Ensure that you are using a compatible operating system.

## Cloning the Project

To get started with the Monitoring Stack project, follow these steps to clone the Git repository to your local machine:

1. **Open a Terminal or Command Prompt**: Launch your terminal application on your computer.

2. **Clone the Repository**: Run the following command to clone the Git repository:

   ```shell
   git clone https://github.com/thiagousa/youtube.git
   ```

   This command will create a new directory named `youtube` in your current location and clone the project into it.

3. **Change Directory**: Enter the project directory by running:

   ```shell
   cd youtube/monitoring/docker
   ```

Now you have successfully cloned the Monitoring Stack project to your local machine, and you can proceed with setting up and running the monitoring stack as described in the rest of this readme.

### 🐳 Run Docker Compose

Navigate to the project directory and run the following command to start the services:

```bash
cd docker
docker compose up -d
```

### 🔗 Access All the Services

Visit [All Services](http://services.acme.net) to access the various components of the monitoring stack.

![Screenshot](/monitoring/docker/screenshot/services.png)


## 📚 Services Description

### Prometheus 📈

[Prometheus](http://prometheus.acme.net) is your trusty metrics collection and storage tool. It stores data with timestamps and optional labels, allowing you to monitor and analyze your systems effectively.
![Screenshot](/monitoring/docker/screenshot/prometheus.png)


#### Configuration Files

- `alert_rules.yaml` for defining alert rules.
- `prometheus.yaml` for Prometheus server configuration.

### AlertManager 🚨

[AlertManager](http://alertmanager.acme.net/#/alerts) handles alerts sent by client applications, deduplicates, groups, routes, and delivers them to the right receiver. It also takes care of silencing and inhibition of alerts.

![Screenshot](/monitoring/docker/screenshot/alertmanager.png)

### Grafana 📊

[Grafana](http://grafana.acme.net/) is your open-source analytics and monitoring solution. Use it to visualize your data from various sources.

![Screenshot](/monitoring/docker/screenshot/grafana.png)



#### Data Source

Configure Prometheus as a data source:

```yaml
datasources:
  - name: 'prometheus'
    type: 'prometheus'
    access: 'proxy'
    url: 'http://prometheus:9090'
```

Login with the following credentials:

- User: admin
- Password: s0W#Pg562^YA

### Node Exporter 🖥️

[Node Exporter](http://nodeexport.acme.net/) is a Prometheus exporter for hardware and OS metrics exposed by *NIX kernels.

![Screenshot](/monitoring/docker/screenshot/nodeexport.png)

### MailHog 📧

[MailHog](http://mailhog.acme.net/) is an email testing tool for developers, perfect for configuring SMTP delivery for your applications.

![Screenshot](/monitoring/docker/screenshot/mailhog.png)

### Nginx-Proxy-Manager 🌐

[Nginx-Proxy-Manager](http://nginx.acme.net/) simplifies proxying to websites and provides free SSL, all without the hassle of Nginx or Letsencrypt configuration.

![Screenshot](/monitoring/docker/screenshot/nginx.png)


Login with the following credentials:

- User: acme@acme.net
- Password: s0W#Pg562^YA

### Prometheus Query 📊

[Prometheus Query](http://prometheus.acme.net/) is where you can experiment with various queries and explore your data.

![Screenshot](/monitoring/docker/screenshot/prometheus.png)


### ❌ Stopping Node Exporter to Received the Alert on Mailhog

If you need to stop the Node Exporter, use this command:

```bash
docker rm --force foobar-exporter
```

### 🧹 Deleting All Applications

To clean up all running containers and networks associated with the project, run:

```bash
docker down
```

## Support My Work

Creating free, high-quality videos and resources for everyone is challenging. Your support enables me to invest more in content creation, enhancing overall quality. Becoming a member offers significant support and comes with cool perks as a token of appreciation.

Remember, ***support is optional***. Whether you choose to become a member or not, you'll have full access to all my videos and resources.

Support here: [https://www.patreon.com/thiagodsantos](https://www.patreon.com/thiagodsantos) or [https://www.buymeacoffee.com/thiagodsantos](https://www.buymeacoffee.com/thiagodsantos)
