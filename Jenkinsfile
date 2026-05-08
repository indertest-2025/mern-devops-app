pipeline {
    agent any

    environment {
        APP_DIR = "/var/jenkins_home/workspace/mern-devops-pipeline"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Pulling latest code from GitHub..."
                git branch: 'main',
                    url: 'https://github.com/indertest-2025/mern-devops-app.git'
            }
        }

        stage('Stop Old Containers') {
            steps {
                echo "Stopping old containers..."
                bat 'docker-compose down || true'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "Building Docker images..."
                bat 'docker-compose build'
            }
        }

        stage('Start Containers') {
            steps {
                echo "Starting containers..."
                bat 'docker-compose up -d'
            }
        }

        stage('Verify Running Containers') {
            steps {
                bat 'docker ps'
            }
        }
    }

    post {
        success {
            echo "Deployment successful 🚀"
        }
        failure {
            echo "Deployment failed ❌"
        }
    }
}