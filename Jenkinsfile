pipeline {
    agent any
    stages {
        stage("Maven build") {
            steps {
                sh 'mvn clean test'
            }
        }
       stage("Gatling run") {
            steps {
                sh 'mvn gatling:test'
            }
            post {
                always {
                    gatlingArchive()
                }
            }
        }
    }
}
