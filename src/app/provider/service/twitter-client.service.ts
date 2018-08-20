import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../../node_modules/rxjs/Observable';
import {Search} from '../model/search.model';
import {Tweet} from '../model/tweet.model';

@Injectable()
export class TwitterClientService {

    constructor(private http: HttpClient) {
    }

    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    search(text: string): Observable<Search> {
        const tweet1 = new Tweet();
        tweet1.id = 1;
        tweet1.idTweet = 1;
        tweet1.text = 'Overview of supporting complex, dynamic ' +
            'analysis with large data sets. Response speeded up from 3-6 hours to 20s.\n' +
            '1. Make it small (~1TB)\n' +
            '2. Put it in memory\n' +
            '3. Use right computation engine (R in this case) #rstats';

        const tweet2 = new Tweet();
        tweet2.id = 2;
        tweet2.idTweet = 2;
        tweet2.text = 'Disappointed with the result today we learn from it also nice ' +
            'to get a goal today too we go again on Tuesday 💪🏾 #VaiCorinthians';

        const tweet3 = new Tweet();
        tweet3.id = 3;
        tweet3.idTweet = 3;
        tweet3.text = '⚽ Score predictions for Corinthians x Gremio? ' +
            '@Ricardo_Alves_R @lugomello @tuturellafilho @danielgrimaldi1 @RyanWigand @amaurySNeto' +
            ' @Sidnei_SCCP 👊 👊 @Natansccp1 @Nidson_027 @diegohenriqueo6 @rodcamfran ' +
            '@marcio_alexan 💪💪 @DepreDeItaquera @debucs #VaiCorinthians ⚽ 🔥 ';

        const search = new Search();
        search.id = 1;
        search.hashtag = text;
        search.tweets = [tweet1, tweet2, tweet3];
        return Observable.of(search);
    }
}