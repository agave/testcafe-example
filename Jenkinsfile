pipeline {
  agent {
    docker {
      image 'agavelab/jenkins-slave'
      args '--privileged -u root:root  --entrypoint=/jenkins-slave-startup.sh -e "DOCKER_DAEMON_ARGS=--registry-mirror=http://192.168.0.100"'
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