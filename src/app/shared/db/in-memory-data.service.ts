import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICustomer } from 'src/app/features/customer/interfaces/customer.interface';
import { IShow } from '../../features/shows/interfaces/show.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const shows = [
      { id: 1, name: "Thor: love and thunder", title: "Thor: love and thunder", description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.", language: "English", genre: "Action,Comedy,Adventure", rating: 7.8, image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
      { id: 2, name: "Jujutsu Kaisen 0: The Movie", title: "Jujutsu Kaisen 0: The Movie", description: "Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.", language: "English, Japanese", genre: "Animation,Action,Fantas y", rating: 7.9, image: "https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_.jpg" },
      { id: 3, name: "Sample Show 3", title: "drama show", description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.", language: "Korean", genre: "Drama", rating: 3, image: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
      { id: 4, name: "Stranger Things", title: "Stranger Things - season 4", description: "drama show", language: "English,Hindi", genre: "Horror,Fantasy, Drama", rating: 9, image: "https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg" },
      { id: 5, name: "Breaking Bad", title: "Breaking Bad", description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.", language: "English", genre: "Drama,Crime,Thriller", rating: 10, image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Breaking_Bad.jpeg?Ifrqi.v01Y0KfAlAyY172HCu8HZTJJvy&size=770:433" },
      { id: 6, name: "Sample Show 8", title: "Sample Show 8", description: "drama show", language: "Korean", genre: "Drama", rating: 3, image: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
      { id: 7, name: "Chernobyl", title: "Chernobyl", description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.", language: "English", genre: "History,Thriller,Drama", rating: 9, image: "https://wallpaperaccess.com/full/4444607.jpg" },
      { id: 8, name: "Inception", title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", language: "English", genre: "Sci-fi,Adventure, Action", rating: 10, image: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" },
      { id: 9, name: "The Dark Knight", title: "The Dark Knight", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", language: "English,French", genre: "Action,Crime,Drama", rating: 10, image: "https://upload.wikimedia.org/wikipedia/en/c/c9/Darkknight_cd.jpg" }
    ];
    const customers = [
      { id: 12, name: 'Dr. Nice', email: "swapnil@gmail.com", password: "admin123", isPrime: true, watched:['IT','Batmen'],favorite:['AOT','titan'],watchLater:['boruto','onepice']},
      { id: 13, name: 'Bombasto', email: "ok1@test.com", password: "admin@123", isPrime: false, watched:['IT','Batmen'],favorite:['AOT','titan'],watchLater:['boruto','onepice']},
      { id: 17, name: 'Dynama', email: "ok2@dtest.com", password: "admin123", isPrime: true, watched:['IT','Batmen'],favorite:['AOT','titan'],watchLater:['boruto','onepice'] },
      { id: 19, name: 'Magma', email: "ok3@dtest.com", password: "admin123", isPrime: false , watched:['IT','Batmen'],favorite:['AOT','titan'],watchLater:['boruto','onepice']},
      { id: 20, name: 'Tornado', email: "ok4@dtest.com", password: "admin123", isPrime: false, watched:['IT','Batmen'],favorite:['AOT','titan'],watchLater:['boruto','onepice'] }
    ];
    const reviews = [
      {id:1, showid:1, comment: "work of art", rating: 8, customername:"swapnil"},
      {id:2, showid:1, comment: "average", rating: 5, customername:"vitalii"},
      {id:3, showid:2, comment: "good to watch", rating: 6, customername:"Yale"},
      {id:4, showid:2, comment: "perfect", rating: 10, customername:"Mukesh"},
      {id:5, showid:2, comment: "great", rating: 8, customername:"samantha"},
      {id:6, showid:2, comment: "excellent", rating: 9, customername:"pikachu"},
      {id:7, showid:2, comment: "great animations", rating: 9, customername:"zoro"},
      {id:8, showid:3, comment: "work of art", rating: 5, customername:"nike"},
      {id:9, showid:3, comment: "niche", rating: 8, customername:"klaus"},
      {id:10, showid:3, comment: "awesome", rating: 9, customername:"mimaw"},
      {id:11, showid:1, comment: "sample", rating: 3, customername:"Adrian"},
      {id:12, showid:1, comment: "perfect", rating: 4, customername:"yatesh"},
      {id:13, showid:3, comment: "bad", rating: 7, customername:"manas"},
      {id:14, showid:4, comment: "simple", rating: 7, customername:"raichu"},
      {id:15, showid:5, comment: "ok ok", rating: 7, customername:"naruto"},
      {id:16, showid:5, comment: "bad", rating: 3, customername:"deepak"},
      {id:17, showid:6, comment: "fab!!!", rating: 7, customername:"zoro"},
      {id:18, showid:6, comment: "perfect!", rating: 9, customername:"naresh"},
      {id:19, showid:6, comment: "good!", rating: 8, customername:"haresh"},
      {id:20, showid:7, comment: "nacho!!!", rating: 7, customername:"luffy"},
      {id:21, showid:7, comment: "great", rating: 8, customername:"lokesh"},
      {id:22, showid:7, comment: "FAB", rating: 9, customername:"manish"},
      {id:23, showid:7, comment: "FAB", rating: 9, customername:"deepak"},
      {id:24, showid:8, comment: "WTF???", rating: 7, customername:"kakashi"},
      {id:25, showid:9, comment: "OMG!!!!", rating: 8, customername:"yato"},
      {id:26, showid:9, comment: "Yess!!!!", rating: 10, customername:"minato"},
      {id:27, showid:9, comment: "Awesome", rating: 10, customername:"mukesh"},
      {id:28, showid:9, comment: "sad", rating: 9, customername:"naresh"},
    ]
    return { shows, customers, reviews};
  }

  genShowsId(shows: IShow[]): number {
    return shows.length > 0 ? Math.max(...shows.map(show => show.id)) + 1 : 11;
  }

  genCustomerId(customers: ICustomer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 11;
  }

}
