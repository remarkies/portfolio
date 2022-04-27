import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data = {
    header: {
      about: 'Who even cares about this section.',
      projects: 'All kind of work I did in my free time or during my studies.'
    },
    about: {
      me: ''
    },
    projects: [
      {
        id: 1,
        title: 'Alpi',
        link: '/projects/alpi',
        date: moment('30.06.2019', 'DD.MM.YYYY'),
        shortDescription: '',
        longDescription: [
          'The Alpi app simplifies the process of contacting a mountain professional. The decision for a mountain professional is supported with meaningful profiles.',
          'This is achieved by displaying a profile picture and qualifications of the mountain professionals, the activities offered and their ratings, as well as the display of testimonials from other users.',
          'Secondarily, the app is also a platform for mountain professionals themselves, where they can market themselves by maintaining their profile with their own offered activities.',
          'Communication among each other is supported by an integrated messaging service, which facilitates initial contact. Among other things, the view of upcoming activities helps to keep an overview.'
        ]
      }
    ]
  }

  constructor() { }
}
