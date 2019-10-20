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
      };var element = document.getElementById("dcdb6d54-0d4d-42d5-a491-0ef901342dc1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dcdb6d54-0d4d-42d5-a491-0ef901342dc1' but no matching script tag was found. ")
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
                  var docs_json = {"0782c700-16e3-4763-8edb-36b8cb8e5339":{"roots":{"references":[{"attributes":{"formatter":{"id":"37d01b75-7ad4-4b69-a315-6c96bc2a3576","type":"BasicTickFormatter"},"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"},"ticker":{"id":"2267f739-9fac-4186-a28e-14e711ccd818","type":"BasicTicker"}},"id":"d09cf4fc-b685-4d15-9b42-4c5bf2c84e8a","type":"LinearAxis"},{"attributes":{"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"}},"id":"9274c83c-558a-406b-a3c7-8b80424fa2db","type":"HelpTool"},{"attributes":{"overlay":{"id":"a0d8919b-d02e-4f31-b5ad-e7e1dc0ae37a","type":"BoxAnnotation"},"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"}},"id":"0b9c2d54-019e-400d-a37a-c2e58185dcc1","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"}},"id":"94914080-4257-4885-bf0b-0a809b092aae","type":"ResetTool"},{"attributes":{"callback":null},"id":"bfe5f63c-5a0c-4ab9-9fed-0f745ceecc73","type":"DataRange1d"},{"attributes":{},"id":"4b6c44d7-e47d-47cc-8b8c-790b06c159e2","type":"BasicTickFormatter"},{"attributes":{},"id":"2267f739-9fac-4186-a28e-14e711ccd818","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4b6c44d7-e47d-47cc-8b8c-790b06c159e2","type":"BasicTickFormatter"},"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f805417-4725-4365-bfb6-3d2901abf329","type":"BasicTicker"}},"id":"71cf01ff-bfaf-4902-83f0-5bef64c998f4","type":"LinearAxis"},{"attributes":{},"id":"369dffc5-0b3c-4078-bb3b-0949a3633d8b","type":"ToolEvents"},{"attributes":{"below":[{"id":"d09cf4fc-b685-4d15-9b42-4c5bf2c84e8a","type":"LinearAxis"}],"left":[{"id":"71cf01ff-bfaf-4902-83f0-5bef64c998f4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d09cf4fc-b685-4d15-9b42-4c5bf2c84e8a","type":"LinearAxis"},{"id":"51e8482b-92ff-47ef-b014-bfa4fd2f6ef3","type":"Grid"},{"id":"71cf01ff-bfaf-4902-83f0-5bef64c998f4","type":"LinearAxis"},{"id":"b151bdd5-3f0f-4769-aa2b-a60e9f6a6fae","type":"Grid"},{"id":"a0d8919b-d02e-4f31-b5ad-e7e1dc0ae37a","type":"BoxAnnotation"},{"id":"8036f905-afea-4172-a9b7-751a70b4445d","type":"GlyphRenderer"}],"title":{"id":"b8a294f4-de64-4b41-b964-0b0a382677af","type":"Title"},"tool_events":{"id":"369dffc5-0b3c-4078-bb3b-0949a3633d8b","type":"ToolEvents"},"toolbar":{"id":"1c6c84a0-26ce-4be1-ac8f-93b470b2b2dc","type":"Toolbar"},"x_range":{"id":"e3a71079-1bcc-45e8-a641-bda9becb18e4","type":"DataRange1d"},"y_range":{"id":"bfe5f63c-5a0c-4ab9-9fed-0f745ceecc73","type":"DataRange1d"}},"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"033bc058-a7c5-4cdd-a45b-bb02b175488d","type":"ColumnDataSource"},"glyph":{"id":"ca61fd28-f077-48e0-8456-fe07579ba3c3","type":"Arc"},"hover_glyph":null,"nonselection_glyph":{"id":"9014c1fc-8634-4fb1-9d58-180c9a2341da","type":"Arc"},"selection_glyph":null},"id":"8036f905-afea-4172-a9b7-751a70b4445d","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f805417-4725-4365-bfb6-3d2901abf329","type":"BasicTicker"}},"id":"b151bdd5-3f0f-4769-aa2b-a60e9f6a6fae","type":"Grid"},{"attributes":{},"id":"37d01b75-7ad4-4b69-a315-6c96bc2a3576","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"}},"id":"796ff7f2-9e62-4719-943c-ae1e0be34863","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cdfbba3f-1aec-4e72-a841-1173ef191a1e","type":"PanTool"},{"id":"796ff7f2-9e62-4719-943c-ae1e0be34863","type":"WheelZoomTool"},{"id":"0b9c2d54-019e-400d-a37a-c2e58185dcc1","type":"BoxZoomTool"},{"id":"b21f00f9-d0f6-4a58-bc22-3668683e3f7b","type":"SaveTool"},{"id":"94914080-4257-4885-bf0b-0a809b092aae","type":"ResetTool"},{"id":"9274c83c-558a-406b-a3c7-8b80424fa2db","type":"HelpTool"}]},"id":"1c6c84a0-26ce-4be1-ac8f-93b470b2b2dc","type":"Toolbar"},{"attributes":{},"id":"4f805417-4725-4365-bfb6-3d2901abf329","type":"BasicTicker"},{"attributes":{"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"}},"id":"cdfbba3f-1aec-4e72-a841-1173ef191a1e","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"b8a294f4-de64-4b41-b964-0b0a382677af","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a0d8919b-d02e-4f31-b5ad-e7e1dc0ae37a","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"033bc058-a7c5-4cdd-a45b-bb02b175488d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"}},"id":"b21f00f9-d0f6-4a58-bc22-3668683e3f7b","type":"SaveTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca61fd28-f077-48e0-8456-fe07579ba3c3","type":"Arc"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"9014c1fc-8634-4fb1-9d58-180c9a2341da","type":"Arc"},{"attributes":{"callback":null},"id":"e3a71079-1bcc-45e8-a641-bda9becb18e4","type":"DataRange1d"},{"attributes":{"plot":{"id":"d80b0c9c-ae89-46fc-a241-95f88a678893","subtype":"Figure","type":"Plot"},"ticker":{"id":"2267f739-9fac-4186-a28e-14e711ccd818","type":"BasicTicker"}},"id":"51e8482b-92ff-47ef-b014-bfa4fd2f6ef3","type":"Grid"}],"root_ids":["d80b0c9c-ae89-46fc-a241-95f88a678893"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"0782c700-16e3-4763-8edb-36b8cb8e5339","elementid":"dcdb6d54-0d4d-42d5-a491-0ef901342dc1","modelid":"d80b0c9c-ae89-46fc-a241-95f88a678893"}];
                  
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