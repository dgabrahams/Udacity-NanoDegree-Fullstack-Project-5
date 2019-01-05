# Udacity Fullstack Nano Degree - Project 5

### Overview
---

The instructions in this readme will get a copy of the project up and running on a local machine for development and testing purposes.

### Prerequisites
---

It is assumed that an active connection to the internet will be available at all times. To run this program a web browser is required. To run this application on a local environment, Python is required, plus access to Terminal (MAC Linux) or Command Prompt (Windows).

### MAC AND WINDOWS

To determine whether you have Python installed, open the Terminal application, type the following, and press Return:
```
python -V
```

This command will report the version:
```
Python 2.7.15
```

If your machine does not recognise the node command, then you might need to install it.
```
https://wiki.python.org/moin/BeginnersGuide/Download
```

To determine whether you have virtualenv installed, open the Terminal application, type the following, and press Return:
```
virtualenv --version
```

This command will report the version:
```
15.2.0
```

If your machine does not recognise the command, then you might need to install it.
```
https://virtualenv.pypa.io/en/latest/installation/
```

To determine whether you have GIT installed, open the Terminal application, type the following, and press Return:
```
git --version
```

This command will report the version:
```
git version 2.15.1 (Apple Git-101)
```

If your machine does not recognise the command, then you might need to install it.
```
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
```

### INSTALL AND RUN
---

To install the application, assuming that the required prerequisite software is installed, use GIT to clone the repository using a terminal console.

Clone: https://github.com/dgabrahams/Udacity-NanoDegree-Fullstack-Project-5.git

To clone run:
```
git clone https://github.com/dgabrahams/Udacity-NanoDegree-Fullstack-Project-5.git
```

It should build into your current working folder, and produce an output similar to that found below:
```
Cloning into 'Udacity-NanoDegree-Fullstack-Project-5'...
remote: Enumerating objects: 86, done.
remote: Counting objects: 100% (86/86), done.
remote: Compressing objects: 100% (35/35), done.
remote: Total 86 (delta 38), reused 77 (delta 29), pack-reused 0
Unpacking objects: 100% (86/86), done.
```

Navigate into the newly created 'Udacity-NanoDegree-Fullstack-Project-4' folder:
```
cd Udacity-NanoDegree-Fullstack-Project-5
```

Create a virtual environment:
```
virtualenv locationapp-workspace
```

Navigate into the newly created workspace folder:
```
cd locationapp-workspace
```

Activate the Python Virtual environment:
```
source bin/activate
```

Instal the flask and requests libraries:
```
pip install flask requests
```

Navigate back one level:
```
cd ..
```

Start the webservice:
```
python localhost_webserver.py
```

Open browser and navigate to;
```
http://localhost:8000/
```

### License
---

This project is licensed under the MIT License.

### Acknowledgments
---
