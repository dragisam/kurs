import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KurseviSharedModule } from '../../shared';
import {
    ProgramService,
    ProgramPopupService,
    ProgramComponent,
    ProgramDetailComponent,
    ProgramDialogComponent,
    ProgramPopupComponent,
    ProgramDeletePopupComponent,
    ProgramDeleteDialogComponent,
    programRoute,
    programPopupRoute,
    ProgramResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...programRoute,
    ...programPopupRoute,
];

@NgModule({
    imports: [
        KurseviSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ProgramComponent,
        ProgramDetailComponent,
        ProgramDialogComponent,
        ProgramDeleteDialogComponent,
        ProgramPopupComponent,
        ProgramDeletePopupComponent,
    ],
    entryComponents: [
        ProgramComponent,
        ProgramDialogComponent,
        ProgramPopupComponent,
        ProgramDeleteDialogComponent,
        ProgramDeletePopupComponent,
    ],
    providers: [
        ProgramService,
        ProgramPopupService,
        ProgramResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KurseviProgramModule {}
