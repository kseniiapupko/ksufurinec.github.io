$(function() {

var $searcher = $('.searcher');

var $ajaxQuery = function(k){

    var $text = $('#query-search');
    var url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&start=' + k*8 + '&q='+ encodeURIComponent($text.val()) + '&callback=GoogleCallback&context=?';
    var $wrapper = $('.wrapper');
    $('.results').remove();

    $.ajax({
        url: url,
        dataType : "jsonp",
        success: function(data) {

            var results = document.createElement('div');
            results.classList.add('results');
            var ul = document.createElement('ul');

            var moreResults = document.createElement('div');
            moreResults.classList.add('more-results');
            var h3 = document.createElement('h3');
            h3.innerHTML = ('More results...');
            var p = document.createElement('p');
            p.classList.add('more-results-list');

            for (i = 0; i < 8; i++) {
                p.innerHTML += '<a href="http://more... :)" class="search-more">' + (i+1) + '</a>';
            }

            p.innerHTML += '<a href="http://next... :)" class="search-next">Next</a>';

            $.each(data.results, function(i, val) {

                var li = document.createElement('li');
                li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
                ul.appendChild(li);
            });

            results.appendChild(ul);
            $wrapper.append(results);
            moreResults.appendChild(h3);
            moreResults.appendChild(p);
            results.appendChild(moreResults);

            var setAnchors = function(k) {

                $anchors = $('.search-more');
                $.each($anchors, function(i) {
                    $anchors[i].addEventListener('click', function(e) {
                        e.preventDefault();
                        $ajaxQuery(i);
                    });
                });

                $('.search-next')[0].addEventListener('click', function(e) {
                    e.preventDefault();
                    $ajaxQuery(k+1);
                });

                $anchors[k].classList.add('active');
            };

            setAnchors(k);
        }
    });

};

$searcher.submit(function(e) {

    e.preventDefault();

    $ajaxQuery(0);
});

// second part

var human = {
    name: 'Human',
    age: 28,
    sex: 'female',
};

var worker = {
    workPlace: 'KUB',
    salary: 5000,
    work: function() {
        alert('Работник');
    }
};

var student = {
    studyPlace: 'GoIT',
    grants: 1000,
    watchTV: function() {
        alert('Ученик');
    }
};

Object.setPrototypeOf(worker, human);
Object.setPrototypeOf(student, human);

var Ivan = Object.create(student);
Ivan.name = 'Ivan';
Ivan.age = 27;

var Pyotr = Object.create(worker, {
    name: {value: 'Pyotr'},
    salary: {value: 10000},
    age: {value: 45},
});

console.log('human', human);
console.log('student ', student);
console.log('worker ', worker);
console.log('Student ', Ivan.name + ' studying in ' + Ivan.studyPlace + ' and recieving ' + Ivan.grants + ' grants, his age ' + Ivan.age);
console.log('Object Name = ', Pyotr.name + '  Age = ' + Pyotr.age + '  Working at = ' + Pyotr.workPlace + '  Salary = ' + Pyotr.salary);

});

function GoogleCallback (func, data) {
    window[func](data);
}