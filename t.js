import getJSON from 'get-json-plz';
import promisify from 'es6-promisify';
let get = promisify(get);

var movieLists = async () => {
  let base = "http://api-global.netflix.com/abTestInformation"; 
  let lists = await get(base);
  console.log(util.inspect(lists));
}

movieLists
  /*
      concatMap(function (abTestInformation) {
        var queues,
        movieLists;

      queue = getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/config").
        concatMap(function (config) {
          if (config.showInstantQueue) {
            return getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/queue").
          map(function (queueMessage) {
            return queueMessage.list;
          });
          }
          else {
            return Observable.returnValue(undefined);
          }
        });

      movieLists = getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/movieLists");

      return Observable.zip(
        queues,
        movieLists,
        function (queue, movieListsMessage) {
          var copyOfMovieLists = Object.create(movieListsMessage.list);
          if (queue !== undefined) {
            copyOfMovieLists.push(queue);
          }

          return copyOfMovieLists;
        });
      }),
    Observable.fromEvent(window, "load"),
    function(movieLists, loadEvent) {
      return movieLists;
    });

  movieListsSequence.
    forEach(
        function (movieLists) {
          showMovieLists(movieLists);
        },
        function (err) {
          showError(err);
        });
}
*/
