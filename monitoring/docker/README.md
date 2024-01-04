# GitHub Monitoring Project 😎

![Screenshot](/monitoring/docker/screenshot/docker-design.png)

## 🚀 Getting Started

To kickstart your monitoring journey, follow these steps:

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

### 🐳 Run Docker Compose

Navigate to the project directory and run the following command to start the services:

```bash
cd docker
docker compose up -d
```

### 🔗 Access All the Services

Visit [All Services](http://services.acme.net) to access the various components of the monitoring stack.

![Screenshot](/monitoring/docker/screenshot/services.png)

### ❌ Stopping Node Exporter

If you need to stop the Node Exporter, use this command:

```bash
docker rm --force foobar-exporter
```

### 🧹 Deleting All Applications

To clean up all running containers and networks associated with the project, run:

```bash
docker down
```

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

![Screenshot](monitoring/docker/screenshot/nodeexport.png)

### MailHog 📧

[MailHog](http://mailhog.acme.net/) is an email testing tool for developers, perfect for configuring SMTP delivery for your applications.

![Screenshot](monitoring/docker/screenshot/mailhog.png)

### Nginx-Proxy-Manager 🌐

[Nginx-Proxy-Manager](http://nginx.acme.net/) simplifies proxying to websites and provides free SSL, all without the hassle of Nginx or Letsencrypt configuration.

![Screenshot](monitoring/docker/screenshot/nginx.png)


Login with the following credentials:

- User: acme@acme.net
- Password: s0W#Pg562^YA

### Prometheus Query 📊

[Prometheus Query](http://prometheus.acme.net/) is where you can experiment with various queries and explore your data.

![Screenshot](monitoring/docker/screenshot/prometheus.png)