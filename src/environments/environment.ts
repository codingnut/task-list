// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:   // Initialize Firebase
  {
    apiKey: 'AIzaSyB84ofMcqjCkeXCzsH1x0qxA6Sd3_Tbrxw',
    authDomain: 'tasklistapp-86428.firebaseapp.com',
    databaseURL: 'https://tasklistapp-86428.firebaseio.com',
    projectId: 'tasklistapp-86428',
    storageBucket: 'tasklistapp-86428.appspot.com',
    messagingSenderId: '695263795612'
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
