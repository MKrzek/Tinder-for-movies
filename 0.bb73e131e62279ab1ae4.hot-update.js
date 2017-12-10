webpackHotUpdate(0,{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactTouchEvents = __webpack_require__(213);

var _reactTouchEvents2 = _interopRequireDefault(_reactTouchEvents);

var _DisplayMovie = __webpack_require__(214);

var _DisplayMovie2 = _interopRequireDefault(_DisplayMovie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = 'http://localhost:3000/movies';

console.log('url', url);

var FetchMovies = function (_React$Component) {
    _inherits(FetchMovies, _React$Component);

    function FetchMovies(props) {
        _classCallCheck(this, FetchMovies);

        var _this = _possibleConstructorReturn(this, (FetchMovies.__proto__ || Object.getPrototypeOf(FetchMovies)).call(this, props));

        _this.componentDidMount = function () {
            _this.fetchMovies();
            _this.fetchLength();
        };

        _this.fetchLength = function () {
            return fetch(url).then(function (r) {
                return r.json();
            }).then(function (datas) {
                _this.setState({
                    datas: datas,
                    length: datas.length
                });
            });
        };

        _this.fetchMovies = function () {
            return fetch(url).then(function (r) {
                if (r.ok) return r.json();else throw new Error('Errors');
            }).then(function (data) {
                _this.setState({
                    data: data[_this.state.index]
                });
            }).catch(function (err) {
                console.log(err);
            });
        };

        _this.handleAccept = function () {
            _this.acceptFetch();
        };

        _this.acceptFetch = function () {
            var accept = { accept: 'true' };
            var index = _this.state.index;
            index = index.toString().slice();
            var counter = parseInt(index);
            counter++;
            _this.setState({
                index: counter
            });
            _this.fetchMovies();
            return fetch(url + '/' + _this.state.data.id, {
                method: 'PUT',
                body: JSON.stringify(accept),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (r) {
                return r;
            });
            console.log('this.state.data.id', _this.state.data.id);
            console.log('accept', accept);
        };

        _this.handleReject = function () {

            _this.rejectFetch();
        };

        _this.rejectFetch = function () {
            var accept = { accept: 'false' };
            var index = _this.state.index;
            index = index.toString().slice();
            var counter = parseInt(index);
            counter++;
            _this.setState({
                index: counter
            });
            _this.fetchMovies();
            return fetch(url + '/' + _this.state.data.id, {
                method: 'PUT',
                body: JSON.stringify(accept),
                headers: {
                    'Content-Type': 'application/json' }
            }).then(function (r) {
                return r;
            });
        };

        _this.handleSwipe = function (direction) {
            switch (direction) {
                case 'right':
                    return _this.acceptFetch();
                case 'left':
                    return _this.rejectFetch();
                    console.log('you swiped ' + direction);
            }
        };

        _this.renderMyMovie = function () {
            if (_this.state.index >= _this.state.length) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: 'https://cdn.empireonline.com/jpg/70/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/59395a49f68e659c7aa3a1a8/The%20Silence%20of%20the%20Lambs.jpg' }),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'No more data to display'
                    )
                );
            } else {
                return _react2.default.createElement(_DisplayMovie2.default, { key: _this.state.data.id,
                    data: _this.state.data,
                    handleAccept: _this.handleAccept,
                    handleReject: _this.handleReject });
            }
        };

        _this.state = {
            data: [],
            index: 0,
            datas: [],
            length: 0
        };
        return _this;
    }

    _createClass(FetchMovies, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    this.renderMyMovie()
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactTouchEvents2.default, { onSwipe: this.handleSwipe })
                )
            );
        }
    }]);

    return FetchMovies;
}(_react2.default.Component);

exports.default = FetchMovies;
;

/***/ })

})