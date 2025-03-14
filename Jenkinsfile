pipeline {
    agent any

    triggers {
        cron('H/30 * * * *') // Schedule: Runs every 30 minutes
    }

    environment {
        CI = 'true' // Ensure Cypress runs in CI mode
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yourusername/yourrepo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        always {
            echo 'Test execution completed.'
            archiveArtifacts artifacts: '**/cypress/screenshots/**', fingerprint: true

            // Send email report
            emailext(
                subject: "Cypress Test Report: Build #${env.BUILD_NUMBER}",
                body: """
                Jenkins Cypress Test Report

                - Job: ${env.JOB_NAME}
                - Build Number: ${env.BUILD_NUMBER}
                - Status: ${currentBuild.currentResult}

                Logs: ${env.BUILD_URL}
                """,
                to: 'yourname@example.com'
            )
        }
    }
}
