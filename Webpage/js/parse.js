var API = "https://10.0.100.170:4000";

$.getJSON(API, function (json) {

    // Set the variables from the results array
    var hostname = json.results[0].hostname;
    console.log('Hostname : ', hostname);
    
    var cpu = json.results[0].cpu;
    console.log('CPU : ', cpu);
    
    var ram_in_gbytes = json.results[0].ram_in_gbytes;
    console.log('RAM : ', ram_in_gbytes);

    var arch = json.results[0].arch;
    console.log('RAM : ', arch);

    // Set the table td text
    $('#hostname').text(hostname);
    $('#cpu').text(cpu);
    $('#ram').text(ram_in_gbytes);
    $('#arch').text(arch);
});

// Caching the link jquery object
var $myLink = $('a.myLink');

// Set the links properties
$myLink.prop({
    href: API,
    title: 'Click on this link to open in a new window.'
}).click(function (e) {
    e.preventDefault();
    window.open(this.href, '_blank');
});