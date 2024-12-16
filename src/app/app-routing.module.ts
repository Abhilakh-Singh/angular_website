import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurPresenceComponent } from './our-presence/our-presence.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { GurugramProjectComponent } from './gurugram-project/gurugram-project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [

  { path: '', component:HomePageComponent},
  { path: 'navbar', component:NavbarComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'our-presence', component: OurPresenceComponent},
  { path: 'our-project', component: OurProjectComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'testimonial', component: TestimonialComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'gurugram-project', component: GurugramProjectComponent},
  { path: 'blog', component: BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 
