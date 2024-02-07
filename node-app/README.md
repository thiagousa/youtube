# The Easy Way to Monitor Your Application Monitoring with Docker 🌟

![Project Overview](/monitoring/docker/node-app/screenshot/node-app.png)

Easily keep an eye on your Docker app with our simple monitoring tool. It's perfect for local checks and getting alerts set up right before you go live.

This framework is adaptable for further customization to meet your specific monitoring needs.

## Requirements

Ensure you have the Monitoring Stack installed, including Prometheus, AlertManager, Grafana, Node Exporter, MailHog, and NGINX on your local system.

Refer to our [comprehensive guide](https://github.com/thiagousa/youtube/tree/main/monitoring/docker) for detailed installation instructions, enabling you to set up your monitoring stack effortlessly.

[Explore the Setup Video](https://www.youtube.com/watch?v=eVi-ec7n_7cD)

## Installation Guide

### Step 1: Create Docker Image
Generate your application's Docker image, incorporating the exporter for metrics.

```bash
cd node-app
docker build -t node-app:1.0 .
```

### Step 2: Verify Image Creation
Confirm the Docker image has been successfully created.

```bash
docker images
```

### Step 3: Launch Docker Image
Deploy your Docker image, making sure to expose the necessary port.

```bash
docker run -itd -p 3333:3000 --name=node node-app:1.0
```

### Step 4: Validate Application and Metrics
Use a web browser to check if the application is active and metrics are accessible.

```bash
localhost:3333
localhost:3333/metrics
```

### Step 5: Configure Prometheus Scrape Target
Integrate your application into Prometheus by editing the `prometheus.yaml` file.

```bash
- job_name: "node-app"
  static_configs:
    - targets: ["node-app:3000"]
```

### Step 6: Set Up Alert Rules
Define your alert conditions within the `alert_rules.yaml` file in Prometheus.

```bash
- alert: Increase more than 10
  expr: increase(fake_metrics_counter[1m]) > 10
  for: 15s
  labels:
    severity: warning
  annotations:
    summary: Increase more than 10
    description: Increase more than 10
```

### Step 7: Set Service on Docker Compose file
Define your app service in the `docker-compose.yaml` . 

```bash
- alert: Increase more than 10
  expr: increase(fake_metrics_counter[1m]) > 10
  for: 15s
  labels:
    severity: warning
  annotations:
    summary: Increase more than 10
    description: Increase more than 10
```


### Step 7: Configure Domain in Hosts File

#### For Linux or MacOS 🏠
Edit your `/etc/hosts` file to include:

```plaintext
127.0.0.1 node-app.acme.net
```

#### For Windows 🏠
- **Launch Notepad as Administrator**: 😎 Right-click Notepad in the Start menu and select "Run as administrator."
- **Open the Hosts File**: 📂 In Notepad, navigate to `C:\Windows\System32\drivers\etc`, change the file type to "All Files (*.*)," and open the `hosts` file.
- **Edit and Save**: 🖋️ Add the required entries and save your changes.

### Step 8: 🐳 Deploy Using Docker Compose

In the project directory, initiate the services with:

```bash

cd '/youtube/monitoring'   
docker compose down
docker compose up -d
```

### Step 9: 🔗 Access the Monitoring Services

Navigate to [All Services](http://services.acme.net) for full access to the monitoring components.

![Services Screenshot](/monitoring/docker/screenshot/services.png)

### Step 10: Configure NGINX Proxy

#### Nginx-Proxy-Manager 🌐

Utilize [Nginx-Proxy-Manager](http://nginx.acme.net/) for easy web proxying and SSL configuration, bypassing the complexities of manual Nginx or Letsencrypt setup.

![Nginx Screenshot](/monitoring/docker/screenshot/nginx.png)

Log in with the credentials provided:

- Username: acme@acme.net
- Password: s0W#Pg562^YA

This revised README provides a more professional tone and structure, along with the inclusion of relevant icons for an enhanced visual appeal.


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
docker compose down
```

## Support My Work

Creating free, high-quality videos and resources for everyone is challenging. Your support enables me to invest more in content creation, enhancing overall quality. Becoming a member offers significant support and comes with cool perks as a token of appreciation.

Remember, ***support is optional***. Whether you choose to become a member or not, you'll have full access to all my videos and resources.

Support here: [https://www.patreon.com/thiagodsantos](https://www.patreon.com/thiagodsantos) or [https://www.buymeacoffee.com/thiagodsantos](https://www.buymeacoffee.com/thiagodsantos)
