node ('rhel7-app-agent'){  
    def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    stage('SAST'){
        sh 'echo SAST'
        //build 'SECURITY-SAST-SNYK'
    }

    
    stage('Build-and-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        sh 'echo Build-and-Tag'
        app = docker.build("peh3/peh")
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
    }
  
    
    stage('Pull-image-server') {
        sh 'echo Pull-image-serve'
    
         sh "docker-compose down"
         sh "docker-compose up -d"
      }
    
    stage('DAST')
        {
        sh 'echo DAST'
        //build 'SECURITY-DAST-OWASP_ZAP'
        }
 
}
