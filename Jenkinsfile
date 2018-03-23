pipeline {
  agent {
    docker {
      image 'agavelab/jenkins-slave:proxy'
      args '--privileged -u root:root  --entrypoint=/jenkins-slave-startup.sh'
    }
    
  }
  stages {
    stage('test') {
      environment {
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
      }
      steps {
        sh 'sleep 15 && make test'
        script {
          env.GITHUB_TOKEN = GITHUB_TOKEN
        }
        
      }
    }
  }
}