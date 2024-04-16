import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatFormFieldModule, MatIconModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatSidenavModule } from '@angular/material'
import { GyaanKarmayogiRoutingModule } from './gyaan-karmayogi-routing.module'
import { GyaanKarmayogiHomeComponent } from './components/gyaan-karmayogi-home/gyaan-karmayogi-home.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { ContentStripWithTabsModule } from '@sunbird-cb/collection/src/public-api'
import { PdfModule } from '@ws/viewer/src/lib/routes/pdf/pdf.module'
import { GyaanPlayerComponent } from './components/gyaan-player/gyaan-player.component'
import { GyaanKarmayogiComponent } from './gyaan-karmayogi.component'
import { ViewerResolve } from '@ws/viewer/src/lib/viewer.resolve'
import { PdfScormDataService } from '@ws/viewer/src/lib/pdf-scorm-data-service'
import { GyaanKarmayogiViewAllComponent } from './components/gyaan-karmayogi-view-all/gyaan-karmayogi-view-all.component'
import { DefaultThumbnailModule } from '@sunbird-cb/utils/src/public-api'
import { CardContentV2Module } from '@sunbird-cb/collection/src/lib/card-content-v2/card-content-v2.module'
import { GyaanKarmayogiService } from './services/gyaan-karmayogi.service'
import { PdfComponent } from './components/players/pdf/pdf.component'
import { GyaanVideoComponent } from './components/players/gyaan-video/gyaan-video.component'
import { VideoModule } from '@ws/viewer/src/lib/routes/video/video.module'
import { ViewerDataService } from '@ws/viewer/src/public-api'
import { ReactiveFormsModule } from '@angular/forms'

// tslint:disable-next-line:function-name
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [GyaanKarmayogiHomeComponent, GyaanPlayerComponent,
    GyaanKarmayogiComponent, GyaanKarmayogiViewAllComponent,
     PdfComponent, GyaanVideoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    GyaanKarmayogiRoutingModule,
    DefaultThumbnailModule,
    ContentStripWithTabsModule,
    MatCheckboxModule,
    CardContentV2Module,
    PdfModule,
    VideoModule,
    MatSidenavModule,
    ReactiveFormsModule,
   TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ViewerResolve, PdfScormDataService, GyaanKarmayogiService, ViewerDataService],
})
export class GyaanKarmayogiModule { }