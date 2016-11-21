'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var News = function () {
  function News() {
    _classCallCheck(this, News);
  }

  _createClass(News, null, [{
    key: 'getNews',
    value: function getNews() {
      var request = new Request(url, init);

      fetch(request).then(function (response) {
        return response.json();
      }).then(function (data) {
        var newsSourceSelect = document.getElementById('newsSource');

        data.sources.forEach(function (source) {
          var sourceName = source.id;
          var element = document.createElement('option');
          element.textContent = sourceName;
          newsSourceSelect.appendChild(element);
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'getNewsBySource',
    value: function getNewsBySource() {
      var newsSourceSelect = document.getElementById('newsSource');
      var selectedNewsSource = newsSourceSelect.options[newsSourceSelect.selectedIndex].value;
      var request = new Request(sourceUrl + selectedNewsSource, init);
      var html = '<table  border="1|1">';

      fetch(request).then(function (response) {
        return response.json();
      }).then(function (data) {
        data.articles.forEach(function (article) {

          html += '<tr>';
          html += '<td>' + article.title + '</td>';
          html += '<td>' + article.description + '</td>';
          html += '<td>' + article.url + '</td>';
          html += '</tr>';
        });
        html += '</table>';
        document.getElementById('news').innerHTML = html;
      }).catch(function (err) {
        document.getElementById('news').innerHTML = "Ooops. Something wrong, try later.";
      });
    }
  }]);

  return News;
}();