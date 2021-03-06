function insert_version_links() {
    var labels = ['dev', '0.7.0', '0.6', '0.5', '0.4', '0.3'];

    for (i = 0; i < labels.length; i++){
        open_list = '<li>'
        if (typeof(DOCUMENTATION_OPTIONS) !== 'undefined') {
            if ((DOCUMENTATION_OPTIONS['VERSION'] == labels[i]) ||
                (DOCUMENTATION_OPTIONS['VERSION'].match(/dev$/) && (i == 0))) {
                open_list = '<li id="current">'
            }
        }
        document.write(open_list);
        document.write('<a href="URL">skimage VERSION</a> </li>\n'
                        .replace('VERSION', labels[i])
                        .replace('URL', 'http://scikit-image.org/docs/' + labels[i]));
    }
}
