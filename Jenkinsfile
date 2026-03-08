pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}
