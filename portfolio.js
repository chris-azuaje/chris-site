// 'use strict';

$(document).ready(function () {
  $.ajax({
    type: 'get',
    url: 'portfolio.json',
    beforeSend: function () {
      $('#grid__container').html('Loading...');
    },
    timeout: 10000,
    dataType: 'json',
  })
    .done(function (data) {
      $('#grid__container').html('');
      data.projects.forEach(function (project) {
        $('#grid__container').append(
          '<div class="card__wrapper">' +
            '<img src="portfolio-images/' +
            project.image +
            '"alt=' +
            project.image +
            ' class="card__img" onclick="window.open(\'' +
            project.link +
            '\')" />' +
            '<div class="card__content">' +
            '<h2 class="card__header" onclick="window.open(\'' +
            project.link +
            '\')">' +
            project.name +
            '</h2>' +
            '<div class="card__content--features">' +
            '<p>HTML, CSS, JS</p>' +
            '<div class="card__features--type">' +
            project.projectType +
            '</div>' +
            '</div>' +
            '<p class="card__content-description">' +
            project.description +
            '</p>' +
            '</div>' +
            '</div>'
        );
      });
    })
    .fail(function (xhr, status, error) {
      alert('Error: ' + xhr.status + ' - ' + error);
    });
});
