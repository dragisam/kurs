import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { KurseviDisciplineModule } from './discipline/discipline.module';
import { KurseviProgramModule } from './program/program.module';
import { KurseviCourseModule } from './course/course.module';
import { KurseviLessonModule } from './lesson/lesson.module';
import { KurseviResourceModule } from './resource/resource.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        KurseviDisciplineModule,
        KurseviProgramModule,
        KurseviCourseModule,
        KurseviLessonModule,
        KurseviResourceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KurseviEntityModule {}
