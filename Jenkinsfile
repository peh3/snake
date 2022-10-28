 /* app-agent on RHEL or Ubuntu*/ 
//node ('rhel7-app-agent'){  
node ('ubuntu-app-agent3'){      
    def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    stage('SAST'){
        sh 'echo SAST'
        //build 'SECURITY-SAST-SNYK'
        build 'Security-SAST-SonarQube'
    }

    
    stage('Build-and-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        sh 'echo Build-and-Tag'
        app = docker.build("peh3/peh")
        //app = docker.build("amrit96/snake")
    }
    stage('Post-to-dockerhub') {
        sh 'echo Post-to-dockerhub'
     docker.withRegistry('https://registry.hub.docker.com', 'peh3-docker') {
            app.push("latest")
        			}
         }
    stage('SECURITY-IMAGE-SCANNER'){
        sh 'echo SECURITY-IMAGE-SCANNER'
        //build 'SECURITY-IMAGE-SCANNER-AQUAMICROSCANNER'
        build 'Security-Image-Scanner-Anchore'
    }
  
    
    stage('Pull-image-server') {
        sh 'echo Pull-image-serve'

         //sh "docker-compose down"
         //sh "docker-compose up -d"	
         
         sh "docker compose down"
         sh "docker compose up -d"
      }
    
    stage('DAST')
        {
        sh 'echo DAST'
        //build 'SECURITY-DAST-OWASP_ZAP'
         build 'Security-DAST-arachni'
        }
 
}
