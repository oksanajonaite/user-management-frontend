import { ApplicationConfig } from '@angular/core'; //aplikacijos konfiguracija
import { provideRouter } from '@angular/router'; //ijungia routeri, leidzia narsyti tarp puslapiu be pilno perkrovimo
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; //ijungia HTTP klienta, siunciamos uzklausos i SB
import { routes } from './app.routes'; //marsrutu importas, aprasyta kas kokiame URL yra rodoma

export const appConfig: ApplicationConfig = {
  providers: [ //sarasas kas ijunngta visoje aplikacijoje, tai marsrutai ir http klientas
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
