pipeline {
    agent any
    stages {
        stage("Maven build") {
            steps {
                sh 'mvn -B clean package'
            }
        }
    stage('pullLatestCode'){
            git branch: 'main',
            credentialsId: '3381895a-df18-4bc3-b35c-fa53869e805c',
            url: 'https://github.com/Kura2023/Gatling_Test_1.git'
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
