_.map(['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'keydown', 'keyup', 'keypress', 'submit', 'focus', 'blur', 'copy', 'cut', 'paste'],
      function(eventName){
        var directiveName = "ks" + eventName.charAt(0).toUpperCase() + eventName.slice(1);
        angular.module("app").directive(
            directiveName,
            ['$parse',
            function($parse) {
                function compile($element, attr) {
                    var fn = $parse(attr[directiveName]);
                    return function ksEventHandler(scope, element) {
                        element.on(eventName, function() {
                            fn(scope);
                        });
                    };
                }
                return({
                    compile: compile,
                    restrict: "A",
                    scope: true
                });
            }]
        );
});