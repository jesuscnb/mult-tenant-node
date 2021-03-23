pipeline {
    agent {
         dockerfile {
                filename 'Dockerfile'
                label 'agent'
                additionalBuildArgs  '--build-arg version=1.0.2'
                args '-v /fs/npm:/fs/npm'
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
