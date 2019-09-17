import templatesStore from "../mobx/TemplatesList";
import {LowerCaseText, UpperCaseText} from "../app/utils";

const initAngularJS = () => {
    angular.module("app", []).directive('list', function () {
        return {
            controller: function ($scope) {
                $scope.LowerCaseText = LowerCaseText;
                $scope.fakeAngularJsObjects = {};
                $scope.UpperCaseText = UpperCaseText;
                $scope.updateValues = () => {
                    $scope.templates.forEach(t => $scope.fakeAngularJsObjects[t.id] = t.text);
                };
                $scope.templates = templatesStore.getTemplates;
                $scope.setText = (template) => {
                    template.setText($scope.fakeAngularJsObjects[template.id]);
                };
            },
            templateUrl: 'src/angular-js/list.html'
        }
    });
};

export default initAngularJS;
