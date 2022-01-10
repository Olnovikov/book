
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
  ]
})
export class NgZorroAntdModule {

}
