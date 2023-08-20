pipeline {
    agent any
    stages {
        stage("Maven build") {
            steps {
                bat 'mvn clean test'
            }
        }
       stage("Gatling run") {
            steps {
                bat 'mvn gatling:test'
            }
            post {
                always {
                    gatlingArchive()
                }
            }
        }
    }
}
