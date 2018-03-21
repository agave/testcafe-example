pipeline {
  agent {
    docker {
      image 'agavelab/jenkins-slave'
      args '--privileged'
    }
    
  }
  stages {
    stage('test') {
      environment {
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
      }
      steps {
        sh '/jenkins-slave-startup.sh'
        sh 'make test'
        script {
          env.GITHUB_TOKEN = GITHUB_TOKEN
        }
        
      }
    }
  }
}