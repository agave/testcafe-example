pipeline {
  agent {
    docker {
      image 'agavelab/jenkins-slave'
      args '--privileged -v /var/lib/docker:/var/lib/docker'
    }
    
  }
  stages {
    stage('test') {
      environment {
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
      }
      steps {
        sh 'make test'
        script {
          env.GITHUB_TOKEN = GITHUB_TOKEN
        }
        
      }
    }
  }
}