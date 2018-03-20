pipeline {
  agent {
    docker { image 'tehranian/dind-jenkins-slave' }
  }
  stages {
    stage('test') {
      environment {
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
      }
      steps {
        script {
          env.GITHUB_TOKEN = GITHUB_TOKEN
        }
      }
    }
  }
}