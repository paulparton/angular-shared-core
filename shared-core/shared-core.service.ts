import { Injectable} from '@angular/core';

@Injectable()
export class SharedCoreService {

    constructor() {
    }

    public sharedMethod() {
        return 'testValue beep';
    }

}
