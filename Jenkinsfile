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
        sh 'sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose'
        sh 'sudo chmod +x /usr/local/bin/docker-compose'
        sh 'docker-compose -f ./docker/docker-compose.yml -f ./docker/docker-compose.dev.yml -f ./docker/docker-compose.test.yml up -d'
        sh 'docker-compose -f ./docker/docker-compose.yml -f ./docker/docker-compose.dev.yml -f ./docker/docker-compose.test.yml exec web-app /home/docker/run-tests.sh'
        script {
          env.GITHUB_TOKEN = GITHUB_TOKEN
        }
      }
    }
  }
}