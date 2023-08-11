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
                 credentialsId: '98187a3f-2169-470a-9b8b-798e74dd2178',
                 url: 'git@github.com:Kura2023/Gatling_Test_1.git'
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
