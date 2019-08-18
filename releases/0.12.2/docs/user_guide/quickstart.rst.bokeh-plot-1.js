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
      };var element = document.getElementById("881c831e-212d-41a3-9a88-7d0acc888b73");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '881c831e-212d-41a3-9a88-7d0acc888b73' but no matching script tag was found. ")
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
                  var docs_json = {"a3ccbab9-d554-4d4f-b4c2-7a3a9ace254f":{"roots":{"references":[{"attributes":{"ticker":null},"id":"27356233-05b6-4f58-b1c2-802f46112fd5","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"2924aa2c-56fc-4f16-89e8-994d2c1a3e72","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"69f005a6-22d5-4873-9b91-4cf088b6ade9","type":"ColumnDataSource"},"glyph":{"id":"b3e78f18-ba56-4f63-be54-890d66fa15c0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c23e676f-160c-402c-bec9-5a8a2dbb92d0","type":"Circle"},"selection_glyph":null},"id":"e333240e-40bf-4b8f-8fa6-16993df76271","type":"GlyphRenderer"},{"attributes":{"num_minor_ticks":10},"id":"f5be295d-42f4-45ea-baba-4c1eb5bd9ad4","type":"LogTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"d39e2ba6-3dd7-471a-a59c-479dffcfba80","type":"Line"},{"attributes":{"data_source":{"id":"2924aa2c-56fc-4f16-89e8-994d2c1a3e72","type":"ColumnDataSource"},"glyph":{"id":"d39e2ba6-3dd7-471a-a59c-479dffcfba80","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"a9c45dd5-da5f-4e4e-abe9-d7365975543b","type":"Line"},"selection_glyph":null},"id":"aca5687d-d904-42a1-a74a-a34df10f8a32","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7657f773-743b-4342-b260-c944abd9644b","type":"Line"},{"attributes":{"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"}},"id":"ca213655-bbd0-411f-9910-85b423b89620","type":"PanTool"},{"attributes":{"data_source":{"id":"fc1b58d9-f416-49f4-b987-1ef6370a6694","type":"ColumnDataSource"},"glyph":{"id":"e2fc0be8-1640-4dd9-b254-012a4c06e2e1","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e2c7bb4c-7b75-4485-b469-ba4cd9510f48","type":"Line"},"selection_glyph":null},"id":"dd90818a-fac6-4d93-a3db-07c5821aab51","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"2ff7b6f9-18c9-47be-8b4f-6f206a1f55f0","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ca213655-bbd0-411f-9910-85b423b89620","type":"PanTool"},{"id":"11da07cb-283c-48cf-8232-835d17ae8fdb","type":"BoxZoomTool"},{"id":"80994477-26c7-4fcc-afd0-932ab222f99f","type":"ResetTool"},{"id":"6e65fc23-7610-4aba-b141-a5be06020465","type":"SaveTool"}]},"id":"0ff324b6-7cdd-4889-a2f2-da474b4d88f1","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5be295d-42f4-45ea-baba-4c1eb5bd9ad4","type":"LogTicker"}},"id":"cecb6122-8c9b-4ff9-be9b-b55f34eb75e0","type":"Grid"},{"attributes":{},"id":"d5bdbc51-aaaa-4a7c-aeac-0ab0c9de875b","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9c45dd5-da5f-4e4e-abe9-d7365975543b","type":"Line"},{"attributes":{},"id":"9988964d-24f6-49bc-88e9-5648ee29238e","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c23e676f-160c-402c-bec9-5a8a2dbb92d0","type":"Circle"},{"attributes":{"axis_label":"sections","formatter":{"id":"d5bdbc51-aaaa-4a7c-aeac-0ab0c9de875b","type":"BasicTickFormatter"},"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9988964d-24f6-49bc-88e9-5648ee29238e","type":"BasicTicker"}},"id":"683a7d21-afd9-4e07-8cd3-84e0a206012a","type":"LinearAxis"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"35fa4aaf-b2fd-4fa5-81e2-aff4ce994d5a","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0b37f99-f125-4cb5-b6c9-e99d8ebe29ca","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"8124368e-39cc-4565-8458-794c5462e7fb","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3e4d2621-02f9-426b-b413-c0220886e01d","type":"Line"},{"attributes":{"data_source":{"id":"2ff7b6f9-18c9-47be-8b4f-6f206a1f55f0","type":"ColumnDataSource"},"glyph":{"id":"f07e0236-b56c-4370-96f1-300ee5ca38bd","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"3e4d2621-02f9-426b-b413-c0220886e01d","type":"Line"},"selection_glyph":null},"id":"1061f441-5ff8-4286-9f3d-9c05f7d705c5","type":"GlyphRenderer"},{"attributes":{"axis_label":"particles","formatter":{"id":"27356233-05b6-4f58-b1c2-802f46112fd5","type":"LogTickFormatter"},"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5be295d-42f4-45ea-baba-4c1eb5bd9ad4","type":"LogTicker"}},"id":"d231c17f-f146-4196-9bd7-ce3501d1ed55","type":"LogAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2c7bb4c-7b75-4485-b469-ba4cd9510f48","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"6861e479-4222-44af-a9e1-82d0e20dbcab","type":"Circle"},{"attributes":{"callback":null},"id":"3635117a-e473-41a5-b054-550a46e1abaa","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"69f005a6-22d5-4873-9b91-4cf088b6ade9","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2fc0be8-1640-4dd9-b254-012a4c06e2e1","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"fc1b58d9-f416-49f4-b987-1ef6370a6694","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f717d119-b4f9-462d-bae0-d5e581335b76","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"ba9673cd-bfbb-467d-90e1-3e179fbf0771","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c3c15b3-a993-439a-9bed-94ee984daaf7","type":"Circle"},{"attributes":{},"id":"fe67803a-be2f-4c51-a6be-5c63761bdc32","type":"ToolEvents"},{"attributes":{"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"}},"id":"6e65fc23-7610-4aba-b141-a5be06020465","type":"SaveTool"},{"attributes":{"data_source":{"id":"ba9673cd-bfbb-467d-90e1-3e179fbf0771","type":"ColumnDataSource"},"glyph":{"id":"7657f773-743b-4342-b260-c944abd9644b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"f717d119-b4f9-462d-bae0-d5e581335b76","type":"Line"},"selection_glyph":null},"id":"bbe6fc83-371d-4a2e-ae32-1e1769f88ef0","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"683a7d21-afd9-4e07-8cd3-84e0a206012a","type":"LinearAxis"}],"left":[{"id":"d231c17f-f146-4196-9bd7-ce3501d1ed55","type":"LogAxis"}],"renderers":[{"id":"683a7d21-afd9-4e07-8cd3-84e0a206012a","type":"LinearAxis"},{"id":"01d73b1d-69ef-4ea2-b74a-039cb58887fc","type":"Grid"},{"id":"d231c17f-f146-4196-9bd7-ce3501d1ed55","type":"LogAxis"},{"id":"cecb6122-8c9b-4ff9-be9b-b55f34eb75e0","type":"Grid"},{"id":"e0b37f99-f125-4cb5-b6c9-e99d8ebe29ca","type":"BoxAnnotation"},{"id":"99c039c1-ccb2-4f7d-a27a-d12466a972e9","type":"Legend"},{"id":"bbe6fc83-371d-4a2e-ae32-1e1769f88ef0","type":"GlyphRenderer"},{"id":"5cefc1a5-232b-4bfe-97ef-468189cfadf0","type":"GlyphRenderer"},{"id":"aca5687d-d904-42a1-a74a-a34df10f8a32","type":"GlyphRenderer"},{"id":"dd90818a-fac6-4d93-a3db-07c5821aab51","type":"GlyphRenderer"},{"id":"e333240e-40bf-4b8f-8fa6-16993df76271","type":"GlyphRenderer"},{"id":"1061f441-5ff8-4286-9f3d-9c05f7d705c5","type":"GlyphRenderer"}],"title":{"id":"c54f3725-e6b4-4f94-b0e9-6c55d480a643","type":"Title"},"tool_events":{"id":"fe67803a-be2f-4c51-a6be-5c63761bdc32","type":"ToolEvents"},"toolbar":{"id":"0ff324b6-7cdd-4889-a2f2-da474b4d88f1","type":"Toolbar"},"x_range":{"id":"3635117a-e473-41a5-b054-550a46e1abaa","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"35fa4aaf-b2fd-4fa5-81e2-aff4ce994d5a","type":"Range1d"}},"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"f07e0236-b56c-4370-96f1-300ee5ca38bd","type":"Line"},{"attributes":{"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"}},"id":"80994477-26c7-4fcc-afd0-932ab222f99f","type":"ResetTool"},{"attributes":{"plot":null,"text":"log axis example"},"id":"c54f3725-e6b4-4f94-b0e9-6c55d480a643","type":"Title"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3e78f18-ba56-4f63-be54-890d66fa15c0","type":"Circle"},{"attributes":{"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9988964d-24f6-49bc-88e9-5648ee29238e","type":"BasicTicker"}},"id":"01d73b1d-69ef-4ea2-b74a-039cb58887fc","type":"Grid"},{"attributes":{"legends":[["y=x",[{"id":"bbe6fc83-371d-4a2e-ae32-1e1769f88ef0","type":"GlyphRenderer"},{"id":"5cefc1a5-232b-4bfe-97ef-468189cfadf0","type":"GlyphRenderer"}]],["y=x^2",[{"id":"aca5687d-d904-42a1-a74a-a34df10f8a32","type":"GlyphRenderer"}]],["y=10^x",[{"id":"dd90818a-fac6-4d93-a3db-07c5821aab51","type":"GlyphRenderer"},{"id":"e333240e-40bf-4b8f-8fa6-16993df76271","type":"GlyphRenderer"}]],["y=10^x^2",[{"id":"1061f441-5ff8-4286-9f3d-9c05f7d705c5","type":"GlyphRenderer"}]]],"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"}},"id":"99c039c1-ccb2-4f7d-a27a-d12466a972e9","type":"Legend"},{"attributes":{"data_source":{"id":"8124368e-39cc-4565-8458-794c5462e7fb","type":"ColumnDataSource"},"glyph":{"id":"6861e479-4222-44af-a9e1-82d0e20dbcab","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5c3c15b3-a993-439a-9bed-94ee984daaf7","type":"Circle"},"selection_glyph":null},"id":"5cefc1a5-232b-4bfe-97ef-468189cfadf0","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"e0b37f99-f125-4cb5-b6c9-e99d8ebe29ca","type":"BoxAnnotation"},"plot":{"id":"489444a5-ba5a-40db-8edb-df29f9fa60f9","subtype":"Figure","type":"Plot"}},"id":"11da07cb-283c-48cf-8232-835d17ae8fdb","type":"BoxZoomTool"}],"root_ids":["489444a5-ba5a-40db-8edb-df29f9fa60f9"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"a3ccbab9-d554-4d4f-b4c2-7a3a9ace254f","elementid":"881c831e-212d-41a3-9a88-7d0acc888b73","modelid":"489444a5-ba5a-40db-8edb-df29f9fa60f9"}];
                  
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