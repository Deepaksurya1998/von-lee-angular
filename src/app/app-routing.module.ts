import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ {path: '' , component:HomeComponent},
{path: 'About' , component: AboutComponent},
{path: 'contact' , component:ContactComponent},
{path: 'classes' , component:ClassesComponent},
{path: 'events' , component:EventsComponent},
{path: 'gallery' , component:GalleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
