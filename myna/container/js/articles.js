var article =   '<div class="card mb-3">'+
                    '<div class="row no-gutters">'+
                        '<div class="col-md-4">'+
                            '<img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="card-img" alt="...">'+
                        '</div>'+
                        '<div class="col-md-8">'+
                            '<div class="card-body">'+
                                '<h5 class="card-title">Card title</h5>'+
                                '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
                                '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

for (i = 0; i < 10; i++) {
    $("#articles-wrapper").append(article);
}