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
      };var element = document.getElementById("08020d4e-c9f9-4a6f-bd02-e397310e6d8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08020d4e-c9f9-4a6f-bd02-e397310e6d8a' but no matching script tag was found. ")
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
                  var docs_json = {"2cdff4ed-3545-4e8c-8897-dd6dc6805a41":{"roots":{"references":[{"attributes":{"formatter":{"id":"e83d915c-1228-4806-98df-56aa3743a418","type":"LogTickFormatter"},"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"},"ticker":{"id":"48273c2a-f945-4079-96be-218a5b09e178","type":"LogTicker"}},"id":"3a7198d0-0a55-4e04-a3a8-08de187142ee","type":"LogAxis"},{"attributes":{"data_source":{"id":"684a36ac-c9ed-476a-92b5-7ebf03c1b59f","type":"ColumnDataSource"},"glyph":{"id":"0e5e660a-ef99-41ab-a1d5-ee60a7db7f38","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"17829d91-4271-495f-bc24-f34f4594f45a","type":"Line"},"selection_glyph":null},"id":"db951477-34e9-4670-9079-b5b6b175380f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"684a36ac-c9ed-476a-92b5-7ebf03c1b59f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"eebce119-3827-42ee-a83c-625adf72b057","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2e69ddbc-fcce-408d-8791-2235ed746c1a","type":"PanTool"},{"id":"4a44a779-f695-4f5a-bfc8-16552bfa4404","type":"WheelZoomTool"},{"id":"3891e107-28d9-49c7-9662-26f1542e8d0d","type":"BoxZoomTool"},{"id":"bafa6f78-a88a-4571-ad08-28709d3ce395","type":"SaveTool"},{"id":"9dceee15-40e8-47b2-82e3-3eba98ce9aed","type":"ResetTool"},{"id":"803b5480-67a1-4b38-99d6-fb86e300367d","type":"HelpTool"}]},"id":"6a26111e-0a87-4127-ac40-cd62220e8e0e","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"17829d91-4271-495f-bc24-f34f4594f45a","type":"Line"},{"attributes":{"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"}},"id":"bafa6f78-a88a-4571-ad08-28709d3ce395","type":"SaveTool"},{"attributes":{"overlay":{"id":"6b5124ff-6e8f-4259-8449-9505a63479d7","type":"BoxAnnotation"},"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"}},"id":"3891e107-28d9-49c7-9662-26f1542e8d0d","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e5e660a-ef99-41ab-a1d5-ee60a7db7f38","type":"Line"},{"attributes":{"ticker":null},"id":"e83d915c-1228-4806-98df-56aa3743a418","type":"LogTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"a8cfed47-a35c-4ddc-af23-47dcff0333cd","type":"Title"},{"attributes":{},"id":"f4c8a5ee-c51f-439b-aaf6-b521de731039","type":"ToolEvents"},{"attributes":{},"id":"6a47c3fb-6b31-4457-848f-f1e70d38e6de","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd090ac4-5887-4d8e-abf9-c60611ba4c64","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6b5124ff-6e8f-4259-8449-9505a63479d7","type":"BoxAnnotation"},{"attributes":{"num_minor_ticks":10},"id":"48273c2a-f945-4079-96be-218a5b09e178","type":"LogTicker"},{"attributes":{"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"}},"id":"803b5480-67a1-4b38-99d6-fb86e300367d","type":"HelpTool"},{"attributes":{"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"}},"id":"4a44a779-f695-4f5a-bfc8-16552bfa4404","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"},"ticker":{"id":"934797ab-2bec-40f5-9ebb-1174cbd37dd4","type":"BasicTicker"}},"id":"801060a5-848b-46c1-95fd-859517bc27de","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"},"ticker":{"id":"48273c2a-f945-4079-96be-218a5b09e178","type":"LogTicker"}},"id":"b8b2cb7d-f960-4c84-8fe1-1c3579b4dd0d","type":"Grid"},{"attributes":{"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"}},"id":"2e69ddbc-fcce-408d-8791-2235ed746c1a","type":"PanTool"},{"attributes":{},"id":"934797ab-2bec-40f5-9ebb-1174cbd37dd4","type":"BasicTicker"},{"attributes":{"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"}},"id":"9dceee15-40e8-47b2-82e3-3eba98ce9aed","type":"ResetTool"},{"attributes":{"data_source":{"id":"fe4381b2-bb82-4e1c-a4bc-998b51de1331","type":"ColumnDataSource"},"glyph":{"id":"5ed7bb04-de70-417e-9afc-4e490b02e2e1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"cd090ac4-5887-4d8e-abf9-c60611ba4c64","type":"Circle"},"selection_glyph":null},"id":"1d9e4616-961a-495a-8eb2-cd0c2b9f13ea","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6a47c3fb-6b31-4457-848f-f1e70d38e6de","type":"BasicTickFormatter"},"plot":{"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"},"ticker":{"id":"934797ab-2bec-40f5-9ebb-1174cbd37dd4","type":"BasicTicker"}},"id":"9e48adaa-2524-438e-ba72-eff2fdfb9a78","type":"LinearAxis"},{"attributes":{"callback":null,"end":10000,"start":0.1},"id":"a17f6126-ad79-4c41-a3ed-00e0b2527814","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"fe4381b2-bb82-4e1c-a4bc-998b51de1331","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"9e48adaa-2524-438e-ba72-eff2fdfb9a78","type":"LinearAxis"}],"left":[{"id":"3a7198d0-0a55-4e04-a3a8-08de187142ee","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9e48adaa-2524-438e-ba72-eff2fdfb9a78","type":"LinearAxis"},{"id":"801060a5-848b-46c1-95fd-859517bc27de","type":"Grid"},{"id":"3a7198d0-0a55-4e04-a3a8-08de187142ee","type":"LogAxis"},{"id":"b8b2cb7d-f960-4c84-8fe1-1c3579b4dd0d","type":"Grid"},{"id":"6b5124ff-6e8f-4259-8449-9505a63479d7","type":"BoxAnnotation"},{"id":"db951477-34e9-4670-9079-b5b6b175380f","type":"GlyphRenderer"},{"id":"1d9e4616-961a-495a-8eb2-cd0c2b9f13ea","type":"GlyphRenderer"}],"title":{"id":"a8cfed47-a35c-4ddc-af23-47dcff0333cd","type":"Title"},"tool_events":{"id":"f4c8a5ee-c51f-439b-aaf6-b521de731039","type":"ToolEvents"},"toolbar":{"id":"6a26111e-0a87-4127-ac40-cd62220e8e0e","type":"Toolbar"},"x_range":{"id":"eebce119-3827-42ee-a83c-625adf72b057","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"a17f6126-ad79-4c41-a3ed-00e0b2527814","type":"Range1d"}},"id":"a896174e-6ad3-4e61-b3de-6603841af40d","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ed7bb04-de70-417e-9afc-4e490b02e2e1","type":"Circle"}],"root_ids":["a896174e-6ad3-4e61-b3de-6603841af40d"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"2cdff4ed-3545-4e8c-8897-dd6dc6805a41","elementid":"08020d4e-c9f9-4a6f-bd02-e397310e6d8a","modelid":"a896174e-6ad3-4e61-b3de-6603841af40d"}];
                  
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