'use strict';

angular.module('version', [
  'version.interpolate-filter',
  'version.directive'
])

.value('version', '0.1');
