import { expect } from 'chai';
import RelaksRouteManager from '../index.mjs';

describe('#match()', function() {
  it ('should find a matching route', function() {
    var options = {
      routes: {
        'profile-page': {
          path: '/profile/',
        }
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/profile/');
    expect(match).to.have.property('name').that.equals('profile-page');
  })
  it ('should ignore base path of /', function() {
    var options = {
      basePath: '/',
      routes: {
        'profile-page': {
          path: '/profile/',
        }
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/profile/');
    expect(match).to.have.property('name').that.equals('profile-page');
  })
  it ('should match a URL with missing trailing slash', function() {
    var options = {
      routes: {
        'profile-page': {
          path: '/profile/',
        }
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/profile');
    expect(match).to.have.property('name').that.equals('profile-page');
  })
  it ('should correct cast a parameter to number', function() {
    var options = {
      routes: {
        'story-page': {
          path: '/story/${id}',
          params: { id: Number },
        }
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/story/123');
    expect(match).to.have.property('name').that.equals('story-page');
    expect(match.params).to.have.property('id').to.be.a('number').that.equals(123);
  })
  it ('should call function to convert parameter', function() {
    var options = {
      routes: {
        'search-page': {
          path: '/search',
          params: { keywords: WordList, max: Number },
          query: {
            q: '${keywords}',
            m: '${max}',
          }
        }
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/search?q=hello+world&m=5');
    expect(match).to.have.property('name').that.equals('search-page');
    expect(match.params).to.have.property('keywords').to.deep.equal(['hello', 'world']);
    expect(match.params).to.have.property('max').to.equal(5);
  })
  it ('should skip missing query variable', function() {
    var options = {
      routes: {
        'search-page': {
          path: '/search',
          params: { keywords: WordList, max: Number },
          query: {
            q: '${keywords}',
            m: '${max}',
          }
        }
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/search?q=hello+world');
    expect(match).to.have.property('name').that.equals('search-page');
    expect(match.params).to.have.property('keywords').to.deep.equal(['hello', 'world']);
    expect(match.params).to.not.have.property('max');
  })
  it ('should find parameter in URL hash', function() {
    var options = {
      routes: {
        'news-page': {
          path: '/news/',
          params: { storyID: Number },
          hash: 'S${storyID}'
        }
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/news/#S1234');
    expect(match).to.have.property('name').that.equals('news-page');
    expect(match.params).to.have.property('storyID').that.equals(1234);
  })
  it ('should match "*" to any path', function() {
    var options = {
      routes: {
        'profile-page': {
          path: '/profile/',
        },
        'error-page': {
          path: '*',
        },
      },
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/nowhere/');
    expect(match).to.have.property('name').that.equals('error-page');
  })
  it ('should capture empty string', function() {
    var options = {
      routes: {
        'search-page': {
          path: '/search/',
          query: {
            q: '${search}'
          },
          params: { search: String },
        },
      }
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/search/?q=');
    expect(match.params).to.have.property('search');
  })
  it ('should capture empty string as NaN when param is number', function() {
    var options = {
      routes: {
        'search-page': {
          path: '/search/',
          query: {
            m: '${max}'
          },
          params: { search: String, max: Number },
        },
      }
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/search/?m=');
    expect(match.params).to.have.property('max').that.is.NaN;
  })
  it ('should match a route with custom path matching', function() {
    var options = {
      routes: {
        'special-page': {
          path: {
            from: (path, params) => {
              var m = /\/special\/(.*)/.exec(path);
              if (m) {
                params.path = m[1];
                return true;
              }
            }
          },
        },
      }
    };
    var component = new RelaksRouteManager(options);
    var match = component.match('/special/something/nice/');
    expect(match.name).to.equal('special-page');
    expect(match.params).to.have.property('path', 'something/nice/');
  })
})

var WordList = {
  from: function(value) {
    return value.split(/\s+/g);
  },
  to: function(list) {
    if (list instanceof Array) {
      return list.join(' ');
    } else {
      return '';
    }
  }
};
