import templatesStore from "../mobx/TemplatesList";
import {LowerCaseText, UpperCaseText} from "../app/utils";
import {autorun} from "mobx/lib/mobx";

const controllerFunction = function ($scope) {
    $scope.LowerCaseText = LowerCaseText;
    $scope.UpperCaseText = UpperCaseText;
    $scope.fakeAngularJsObjects = {};
    autorun(() => {
        $scope.templates = templatesStore.getTemplates;
        $scope.templates.forEach(t => $scope.fakeAngularJsObjects[t.id] = t.text);
        $scope.$evalAsync();
    });
    $scope.setText = (template) => {
        template.setText($scope.fakeAngularJsObjects[template.id]);
    };
};

const initAngularJS = () => {
    angular.module("app", [])
        .directive('list', function () {
            return {
                controller: controllerFunction,
                templateUrl: 'src/angular-js/list.html'
            }
        });
};

controllerFunction.$inject = ['$scope'];

export default initAngularJS;
