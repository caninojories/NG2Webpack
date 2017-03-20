import {
  IosIpad
} from './phone.resolution/ios.ipad';
import {
  IosIphone6
} from './phone.resolution/ios.iphone6';
import {
  AndroidJ7
} from './phone.resolution/android.j7';

export class CanvasSettings {
  constructor(private scale) {
  }

  private canvas : any;

  get() {
    let settings;
    switch(this.scale) {
      case 'width1024.height768':
        settings = new IosIpad();
        break;
      case 'width667.height375':
        settings = new IosIphone6();
        break;
      case 'width640.height335':
      case 'width640.height336':
      case 'width640.height337':
      case 'width640.height339':
      case 'width640.height339':
      case 'width640.height340':
      case 'width640.height341':
      case 'width640.height342':
      case 'width640.height343':
      case 'width640.height344':
      case 'width640.height345':
      case 'width640.height346':
      case 'width640.height347':
      case 'width640.height348':
      case 'width640.height349':
      case 'width640.height350':
        settings = new AndroidJ7();
        break;
      default :
    }
    // console.log(this.scale);

    return settings;
  }
}
