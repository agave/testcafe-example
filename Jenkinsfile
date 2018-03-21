pipeline {
  agent {
    docker {
      image 'agavelab/jenkins-slave'
      args '--privileged -lxc-conf="aa_ profile=unconfined"'
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