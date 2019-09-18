'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

document.addEventListener("DOMContentLoaded", init);

var app = {
  getFilms: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, _ref2, result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('https://swapi.co/api/films/');

            case 3:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return response.json();

            case 7:
              _ref2 = _context.sent;
              result = _ref2.result;
              return _context.abrupt('return', result);

            case 10:
              return _context.abrupt('return', []);

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](0);

              console.error('Oops, something went wrong...', _context.t0);

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 13]]);
    }));

    function getFilms() {
      return _ref.apply(this, arguments);
    }

    return getFilms;
  }(),
  displayList: function displayList(films) {
    var list = films.map(function (film) {
      return {
        episodeId: film.episode_id,
        title: film.title,
        releaseDate: film.release_date
      };
    }).sort(function (a, b) {
      return a.episodeId - b.episodeId;
    });

    var target = document.getElementById('movie-list');
    var ul = document.createElement('ul');
    list.forEach(function (film) {
      var li = document.createElement('li');
      li.innerHTML = '\n        Episode ' + film.episodeId + ':\n        <strong>' + film.title + '</strong>\n        <em> (released ' + film.releaseDate + ')</em>';
      ul.appendChild(li);
    });
    target.appendChild(ul);
  }
};

function init() {
  app.getFilms().then(app.displayList);
}