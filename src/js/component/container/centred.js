var Component = __dep.use('lib.component'),
    Container = __dep.use('component.container');

export default Component.createClass({

    render : function(attrs, children) {

        return Container(
            {
                className : 'containerCentred'
            },
            children || []
        );

    }

});