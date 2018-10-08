L.DivIcon.SVGIcon.DefaultIcon = L.DivIcon.SVGIcon.extend({
    initialize: function(options) {
        options = L.Util.setOptions(this, options);
        options.circleAnchor = L.point(Number(options.iconSize.x)/2, Number(options.iconSize.y)/2);
        L.DivIcon.SVGIcon.prototype.initialize.call(this, options);

        return options;
    },
    _createPathDescription: function() {
        var height = Number(this.options.iconSize.y);
        var width = Number(this.options.iconSize.x);
        var weight = Number(this.options.weight);
        var margin = weight;

        var startPoint = "M " + (width/2) + " " + (height/18) + " "
        var topLeftOuterCurve = `c -${13*width/60} 0 -${width*0.4} ${19*height/150} -${width*0.4} ${4*height/15} 0 ${height/15} ${width*0.05} ${height*0.14} ${width*0.09} ${29*height*150} `;
        var bottomOuterLines = `l ${width*0.31} ${height*0.4} ${width*0.31} -${height*0.4} `;
        var topRightOuterCurve = `c ${11*width/300} -${height/18} ${width*0.09} -${19*height/150} ${width*0.09} -${29*height*150} 0 -${height*0.14} ${width*0.18} -${4*height/15} -${width*0.4} -${4*height/15} z`;
        var innerCircleStart = `m 0 ${4*height/25} `;
        var innerRightCurve = `c ${width/12} ${height/2650} ${5*width/32} ${height/20} ${5*width/32} ${height/10} `;
        var innerBottomCurve = `s -${width/15} ${height/10} -${5*width/32} ${height/10} `;
        var innerLeftCurve = `c -${width/12} -${height/2650} -${5*width/32} -${2*height/45} -${5*width/32} -${height/10} 0 -${height/18} ${width/15} -${height/10} ${5*width/32} -${height/10} z`

        var d = startPoint + topLeftOuterCurve + bottomOuterLines + topRightOuterCurve + innerCircleStart + innerRightCurve + innerBottomCurve + innerLeftCurve; 

        return d;
    }
})

L.divIcon.svgIcon.defaultIcon = function(options) {
    return new L.DivIcon.SVGIcon.DefaultIcon(options)
}

L.Marker.SVGMarker.DefaultMarker = L.Marker.SVGMarker.extend({
    options: {
        "iconFactory": L.divIcon.svgIcon.defaultIcon
    }
})

L.marker.svgMarker.defaultMarker = function(latlng, options) {
    return new L.Marker.SVGMarker.DefaultMarker(latlng, options)
}
