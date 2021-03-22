pipeline {
    agent {
        docker {
            image 'adrianokowalski/npm-agent:1.0.1'
            args '-v /var/run/docker.sock:/var/run/docker.sock -u jenkins:docker -v /fs/jenkins/npm:/fs/npm'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install --cache /fs/npm'
            }
        }
    }
}
