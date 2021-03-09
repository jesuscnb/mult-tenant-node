pipeline {
    agent {
        docker {
            image 'adrianokowalski/npm-agent:1.0.1'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install '
            }
        }
    }
}
