pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            echo 'Running Stages of Build'
          }
        }
        stage('Install NVM') {
          steps {
            nvm(version: 'v8.4.0', nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh', nvmNodeJsOrgMirror: 'https://npm.taobao.org/mirrors/node', nvmIoJsOrgMirror: 'https://iojs.org/dist') {
              sh 'node --version'
            }
            
          }
        }
        stage('Install Dependencies') {
          steps {
            sh 'npm install'
          }
        }
      }
    }
  }
}