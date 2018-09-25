import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'
const config = {
    apiKey: "AIzaSyBqiRNPo9uIDknYOQPUSXSBLoxlrmswQLQ",
    authDomain: "poo-review.firebaseapp.com",
    databaseURL: "https://poo-review.firebaseio.com",
    storageBucket: "poo-review.appspot.com",
    messagingSenderId: "1061006390491"
  }
export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get LoginBG() {
    return this.loginBG
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}