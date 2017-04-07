import {
  EmitterService
} from '../../shared/emitter.service';

export class EmitterComponent {
  constructor() {
  }

  main() {
    /**
     * use as a medium
     */
    return EmitterService.get('main');
  }

  user() {
    
    return EmitterService.get('user');
  }
}