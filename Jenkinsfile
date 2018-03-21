pipeline {
  agent {
    docker {
      image 'agavelab/jenkins-slave'
      args '--privileged -lxc-conf="aa_ profile=unconfined" -u 0:0'
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