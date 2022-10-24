const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://192.168.108.129:9000',
       token : "squ_2b013356574fbb46faeaac9aed6ae1a853f7f424",
       options : {
       'sonar.sources': '.',
       'sonar.projectName': 'sonar-project',
       'sonar.projectDescription': 'Description for "My App" project...',
       //'sonar.sources': 'src',
       //'sonar.tests': 'specs'
       }
     }, () => {});
