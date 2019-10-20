document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("3fa5785a-2a6f-4503-aaf8-0587d5679810");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3fa5785a-2a6f-4503-aaf8-0587d5679810' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          (function outer(modules, cache, entry) {
            if (typeof Bokeh !== "undefined") {
              for (var name in modules) {
                var module = modules[name];
          
                if (typeof(module) === "string") {
                  try {
                    coffee = Bokeh.require("coffee-script")
                  } catch (e) {
                    throw new Error("Compiler requested but failed to import. Make sure bokeh-compiler(-min).js was included.")
                  }
          
                  function compile(code) {
                    var body = coffee.compile(code, {bare: true, shiftLine: true});
                    return new Function("require", "module", "exports", body);
                  }
          
                  modules[name] = [compile(module), {}];
                }
              }
          
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                Bokeh.Models.register_locations(Bokeh.require(entry[i]));
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })({
           "custom/main":[function(require,module,exports){
             module.exports = { Custom: require("custom/custom"),
          DrawTool: require("custom/draw_tool"),
          LatexLabel: require("custom/latex_label"),
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"b26813ae-cb08-4f4f-853c-b3b35e8b823c":{"roots":{"references":[{"attributes":{"callback":null},"id":"4cf0139d-4df4-450f-8b14-afb8bd5d5c51","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"e9ecdb69-ed43-4e99-a96d-284341edb8ff","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"9c29b69e-eec0-4e75-81e3-ddba0a4c439c","type":"BoxAnnotation"},"plot":{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"},"renderers":[{"id":"6d36d720-3ab6-43fa-85e9-fb091dab9dcf","type":"GlyphRenderer"}]},"id":"11e64db0-f84d-4d99-b19a-329b66dc210d","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"46212a60-bc45-4213-b199-667a42308637","type":"PolyAnnotation"},"plot":{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"}},"id":"1e0598c0-f127-4b15-8261-1fae7ac35c84","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4af2c675-03f1-45a6-9638-d6695b9d37c0","type":"BoxSelectTool"},{"id":"e5dcc858-4c2a-4235-ad2c-9ddbffbac1a1","type":"LassoSelectTool"},{"id":"edb8c3e5-7d54-4606-bb00-d83836a79e90","type":"HelpTool"}]},"id":"32794982-d3a6-450f-95cc-1a5a65a1451d","type":"Toolbar"},{"attributes":{},"id":"874e92ef-7c56-4202-8eab-4c5e24603014","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cbf0aff-9a6e-4a4e-bf41-c98110dccacf","type":"BasicTicker"}},"id":"8077f2e0-d6a0-43e9-a550-470487a58230","type":"Grid"},{"attributes":{"callback":null,"column_names":["y1","y0","x"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"90ed4da1-ae37-47ef-9cf5-9067043c99de","type":"ColumnDataSource"},{"attributes":{},"id":"21bcba00-0eca-4beb-becf-262db0e0d463","type":"BasicTickFormatter"},{"attributes":{},"id":"cdaf4a3d-62b3-49e5-98f5-72c87974c572","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"97c42301-3c45-44c8-ab33-cbf1c91daeec","type":"Circle"},{"attributes":{"children":[{"id":"0136bdbb-3f05-4680-9fcf-9c5e9ef4313a","type":"Row"}]},"id":"dd12ae9d-7f58-4973-a814-20eb34a919f1","type":"Column"},{"attributes":{"children":[{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"},{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"}]},"id":"0136bdbb-3f05-4680-9fcf-9c5e9ef4313a","type":"Row"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"a789edeb-f2fb-4eae-8752-97ca259ccd23","type":"Circle"},{"attributes":{"data_source":{"id":"90ed4da1-ae37-47ef-9cf5-9067043c99de","type":"ColumnDataSource"},"glyph":{"id":"0573c188-6b79-4749-8ffa-631294bdbeb6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0db85bf9-8db1-4770-b8f8-553d2fb74fab","type":"Circle"},"selection_glyph":null},"id":"6d36d720-3ab6-43fa-85e9-fb091dab9dcf","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"c0b1dd7f-fc59-4c4b-99c7-7bc886f84b29","type":"BasicTickFormatter"},"plot":{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"},"ticker":{"id":"2810d72f-519f-427e-a4c3-9e7b1f29a165","type":"BasicTicker"}},"id":"cf5b8abc-9f8e-4be0-9e0e-ac01b7ef7ee1","type":"LinearAxis"},{"attributes":{"below":[{"id":"cf5b8abc-9f8e-4be0-9e0e-ac01b7ef7ee1","type":"LinearAxis"}],"left":[{"id":"847cb4c1-69ef-4653-bb54-ecd6ae049a3a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cf5b8abc-9f8e-4be0-9e0e-ac01b7ef7ee1","type":"LinearAxis"},{"id":"af7dba9c-b37b-4f91-8f22-a360f7d4fe1b","type":"Grid"},{"id":"847cb4c1-69ef-4653-bb54-ecd6ae049a3a","type":"LinearAxis"},{"id":"43e013e1-bb12-4549-9973-7e54a16d3c05","type":"Grid"},{"id":"ce961350-3a04-44d9-aa51-96551aad7a54","type":"BoxAnnotation"},{"id":"8218cec3-e4e0-49b7-8abe-e12571ce0b3d","type":"PolyAnnotation"},{"id":"f9c2dfbf-a077-41d8-9a75-6c0f48247e8f","type":"GlyphRenderer"}],"title":{"id":"e9ecdb69-ed43-4e99-a96d-284341edb8ff","type":"Title"},"tool_events":{"id":"4776550c-9c2c-4d7c-93d0-41dcac8824bc","type":"ToolEvents"},"toolbar":{"id":"32794982-d3a6-450f-95cc-1a5a65a1451d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ce6b1f6c-d609-4a6d-bccc-07e389a25c72","type":"DataRange1d"},"y_range":{"id":"3f15eeee-5f37-4408-b4e0-7fe5c840a3a1","type":"DataRange1d"}},"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2810d72f-519f-427e-a4c3-9e7b1f29a165","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"8218cec3-e4e0-49b7-8abe-e12571ce0b3d","type":"PolyAnnotation"},"plot":{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"}},"id":"e5dcc858-4c2a-4235-ad2c-9ddbffbac1a1","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"dade4a27-8bad-4236-af17-423e25a2bf08","type":"ToolbarBox"},{"id":"dd12ae9d-7f58-4973-a814-20eb34a919f1","type":"Column"}]},"id":"173502e5-1768-40db-8d53-4a99bf61968d","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"0db85bf9-8db1-4770-b8f8-553d2fb74fab","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9c29b69e-eec0-4e75-81e3-ddba0a4c439c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"},"ticker":{"id":"a31326aa-8e5b-43fd-be90-2eb76235da17","type":"BasicTicker"}},"id":"13ee6b6a-bccb-4984-bca6-35789107d7ac","type":"Grid"},{"attributes":{"callback":null},"id":"7d1a32e6-eabe-416e-9da4-086d1b284146","type":"DataRange1d"},{"attributes":{"formatter":{"id":"21bcba00-0eca-4beb-becf-262db0e0d463","type":"BasicTickFormatter"},"plot":{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8a7657e-a617-4edf-92d5-8bda6ec749bd","type":"BasicTicker"}},"id":"847cb4c1-69ef-4653-bb54-ecd6ae049a3a","type":"LinearAxis"},{"attributes":{},"id":"0cbf0aff-9a6e-4a4e-bf41-c98110dccacf","type":"BasicTicker"},{"attributes":{},"id":"85fde633-af80-4029-8143-9672a3a36f72","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"31ee37c7-f145-4660-8d2f-89f37d750465","type":"Title"},{"attributes":{},"id":"a31326aa-8e5b-43fd-be90-2eb76235da17","type":"BasicTicker"},{"attributes":{"formatter":{"id":"85fde633-af80-4029-8143-9672a3a36f72","type":"BasicTickFormatter"},"plot":{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"},"ticker":{"id":"a31326aa-8e5b-43fd-be90-2eb76235da17","type":"BasicTicker"}},"id":"b11b6862-c8fd-42de-99c3-82172c68cd29","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"46212a60-bc45-4213-b199-667a42308637","type":"PolyAnnotation"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"11e64db0-f84d-4d99-b19a-329b66dc210d","type":"BoxSelectTool"},{"id":"1e0598c0-f127-4b15-8261-1fae7ac35c84","type":"LassoSelectTool"},{"id":"f8ae478b-a466-4b4b-a387-1d5e17408a92","type":"HelpTool"},{"id":"4af2c675-03f1-45a6-9638-d6695b9d37c0","type":"BoxSelectTool"},{"id":"e5dcc858-4c2a-4235-ad2c-9ddbffbac1a1","type":"LassoSelectTool"},{"id":"edb8c3e5-7d54-4606-bb00-d83836a79e90","type":"HelpTool"}]},"id":"dade4a27-8bad-4236-af17-423e25a2bf08","type":"ToolbarBox"},{"attributes":{"plot":{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"}},"id":"f8ae478b-a466-4b4b-a387-1d5e17408a92","type":"HelpTool"},{"attributes":{"formatter":{"id":"874e92ef-7c56-4202-8eab-4c5e24603014","type":"BasicTickFormatter"},"plot":{"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cbf0aff-9a6e-4a4e-bf41-c98110dccacf","type":"BasicTicker"}},"id":"3849b4c7-42ea-41ae-b4ec-90edbba4294e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3f15eeee-5f37-4408-b4e0-7fe5c840a3a1","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"ce961350-3a04-44d9-aa51-96551aad7a54","type":"BoxAnnotation"},"plot":{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"},"renderers":[{"id":"f9c2dfbf-a077-41d8-9a75-6c0f48247e8f","type":"GlyphRenderer"}]},"id":"4af2c675-03f1-45a6-9638-d6695b9d37c0","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8a7657e-a617-4edf-92d5-8bda6ec749bd","type":"BasicTicker"}},"id":"43e013e1-bb12-4549-9973-7e54a16d3c05","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"8218cec3-e4e0-49b7-8abe-e12571ce0b3d","type":"PolyAnnotation"},{"attributes":{},"id":"c0b1dd7f-fc59-4c4b-99c7-7bc886f84b29","type":"BasicTickFormatter"},{"attributes":{},"id":"4776550c-9c2c-4d7c-93d0-41dcac8824bc","type":"ToolEvents"},{"attributes":{"callback":null},"id":"ce6b1f6c-d609-4a6d-bccc-07e389a25c72","type":"DataRange1d"},{"attributes":{"data_source":{"id":"90ed4da1-ae37-47ef-9cf5-9067043c99de","type":"ColumnDataSource"},"glyph":{"id":"a789edeb-f2fb-4eae-8752-97ca259ccd23","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"97c42301-3c45-44c8-ab33-cbf1c91daeec","type":"Circle"},"selection_glyph":null},"id":"f9c2dfbf-a077-41d8-9a75-6c0f48247e8f","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"0573c188-6b79-4749-8ffa-631294bdbeb6","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ce961350-3a04-44d9-aa51-96551aad7a54","type":"BoxAnnotation"},{"attributes":{},"id":"b8a7657e-a617-4edf-92d5-8bda6ec749bd","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"11e64db0-f84d-4d99-b19a-329b66dc210d","type":"BoxSelectTool"},{"id":"1e0598c0-f127-4b15-8261-1fae7ac35c84","type":"LassoSelectTool"},{"id":"f8ae478b-a466-4b4b-a387-1d5e17408a92","type":"HelpTool"}]},"id":"e873ebb8-89d7-4da8-b079-bfe9e4bfffc5","type":"Toolbar"},{"attributes":{"plot":{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"}},"id":"edb8c3e5-7d54-4606-bb00-d83836a79e90","type":"HelpTool"},{"attributes":{"plot":{"id":"6a649fee-ab0e-4493-a934-af904e64e742","subtype":"Figure","type":"Plot"},"ticker":{"id":"2810d72f-519f-427e-a4c3-9e7b1f29a165","type":"BasicTicker"}},"id":"af7dba9c-b37b-4f91-8f22-a360f7d4fe1b","type":"Grid"},{"attributes":{"below":[{"id":"b11b6862-c8fd-42de-99c3-82172c68cd29","type":"LinearAxis"}],"left":[{"id":"3849b4c7-42ea-41ae-b4ec-90edbba4294e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b11b6862-c8fd-42de-99c3-82172c68cd29","type":"LinearAxis"},{"id":"13ee6b6a-bccb-4984-bca6-35789107d7ac","type":"Grid"},{"id":"3849b4c7-42ea-41ae-b4ec-90edbba4294e","type":"LinearAxis"},{"id":"8077f2e0-d6a0-43e9-a550-470487a58230","type":"Grid"},{"id":"9c29b69e-eec0-4e75-81e3-ddba0a4c439c","type":"BoxAnnotation"},{"id":"46212a60-bc45-4213-b199-667a42308637","type":"PolyAnnotation"},{"id":"6d36d720-3ab6-43fa-85e9-fb091dab9dcf","type":"GlyphRenderer"}],"title":{"id":"31ee37c7-f145-4660-8d2f-89f37d750465","type":"Title"},"tool_events":{"id":"cdaf4a3d-62b3-49e5-98f5-72c87974c572","type":"ToolEvents"},"toolbar":{"id":"e873ebb8-89d7-4da8-b079-bfe9e4bfffc5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7d1a32e6-eabe-416e-9da4-086d1b284146","type":"DataRange1d"},"y_range":{"id":"4cf0139d-4df4-450f-8b14-afb8bd5d5c51","type":"DataRange1d"}},"id":"99df107a-7fb6-45a2-98d6-a5ac0efbe974","subtype":"Figure","type":"Plot"}],"root_ids":["173502e5-1768-40db-8d53-4a99bf61968d"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"b26813ae-cb08-4f4f-853c-b3b35e8b823c","elementid":"3fa5785a-2a6f-4503-aaf8-0587d5679810","modelid":"173502e5-1768-40db-8d53-4a99bf61968d"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});