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
        stage('Install NPM') {
          steps {
            nvm(version: '8.4.0', nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh', nvmNodeJsOrgMirror: 'https://npm.taobao.org/mirrors/node', nvmIoJsOrgMirror: 'https://iojs.org/dist') {
              sh 'nvm use v8.4.0'
            }
            
          }
        }
      }
    }
  }
}