var jadefilters = module.exports = {};
jadefilters.text = function(block) {
  jade.filters.text = function(block, compiler){
    var text = new jade.nodes.Text();
    return new TextBlockFilter(block).compile();
};

function TextBlockFilter(node) {
    this.node = node;
}

TextBlockFilter.prototype.__proto__ = jade.Compiler.prototype;

TextBlockFilter.prototype.visit = function(node){

    // first this is called with a node containing all the block's lines
    // as sub-nodes, with their first word interpreted as the node's name
    //
    // so here, collect all the nodes' text (including its name)
    // into a single Text node, and then visit that instead.
    // the child nodes won't be visited - we're cutting them out of the
    // parse tree

    var text = new jade.nodes.Text();
    for (var i=0; i < node.length; i++) {
        text.push (node[i].name + (node[i].text ? node[i].text[0] : ""));
    }
    this.visitNode (text);
};
};