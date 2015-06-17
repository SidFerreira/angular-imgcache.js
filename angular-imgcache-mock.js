angular.module('ImgCache', [])

    .provider('ImgCache', function() {

        ImgCache.$init = function() { };

        this.manualInit = false;

        this.setOptions = function(options) { };

        this.setOption = function(name, value) { };

        this.$get = ['$q', function ($q) {

            ImgCache.$deferred = $q.defer();
            ImgCache.$promise = ImgCache.$deferred.promise;

/*            if(!this.manualInit) {
                ImgCache.$init();
            }*/

            return ImgCache;
        }];

    })

    .directive('imgCache', ['ImgCache', function() {

        return {
            restrict: 'A',
            scope: {
                icBg: '@',
                icSrc: '@'
            },
            link: function(scope, el, attrs) {

                attrs.$observe('icSrc', function(src) {

  //                  loadImg('src', el, src);

                });

                attrs.$observe('icBg', function(src) {

//                    loadImg('bg', el, src);

                });

            }
        };
    }]);