document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("1b3b913a-8a3a-4a66-b53f-1f1dcf143414");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1b3b913a-8a3a-4a66-b53f-1f1dcf143414' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
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
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f470686a-1546-4a50-a329-e5faa220e856":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d60505e3-aeea-49dc-a595-16ff5fd01c62","type":"Oval"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"447abca4-2667-427e-828c-f9cdc9c88a5c","type":"Oval"},{"attributes":{},"id":"7cabb93c-fe3b-403e-8219-195975af7e73","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"8213a5d8-dc07-4ac9-9961-8cc625cc09fc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8213a5d8-dc07-4ac9-9961-8cc625cc09fc","type":"ColumnDataSource"},"glyph":{"id":"447abca4-2667-427e-828c-f9cdc9c88a5c","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"d60505e3-aeea-49dc-a595-16ff5fd01c62","type":"Oval"},"selection_glyph":null},"id":"7017daac-8794-4bd7-bdd2-2d14f3c2ef22","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"91373007-b138-47cf-8c02-9403fcaf85b2","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"354c2ca1-2351-4986-85e8-384c1cfdb0ba","type":"PanTool"},{"id":"c6be63fa-5467-41fa-b44d-5393052d9123","type":"WheelZoomTool"},{"id":"ae661544-0221-45ab-89f2-1fbbd86db371","type":"BoxZoomTool"},{"id":"f4504cd6-3cc5-4302-b1cd-f8f1289f3c7e","type":"SaveTool"},{"id":"e323f4a8-4cdd-4bde-9b89-7f688032b8b1","type":"ResetTool"},{"id":"1b35fb7d-6053-411d-a03a-47b32a90e765","type":"HelpTool"}]},"id":"3ce40188-4ab3-430f-b120-7da335713784","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a6a7b31d-19a4-44db-b59a-ee9884fc60ab","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"}},"id":"1b35fb7d-6053-411d-a03a-47b32a90e765","type":"HelpTool"},{"attributes":{},"id":"a7ed73bf-f8f2-48c3-a632-b890427a7c05","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"}},"id":"c6be63fa-5467-41fa-b44d-5393052d9123","type":"WheelZoomTool"},{"attributes":{},"id":"46328496-37e6-4b06-9775-b91fa5629b76","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a7ed73bf-f8f2-48c3-a632-b890427a7c05","type":"BasicTickFormatter"},"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"},"ticker":{"id":"46328496-37e6-4b06-9775-b91fa5629b76","type":"BasicTicker"}},"id":"1f8ad51c-d625-4985-ad8b-fb5bf301d3ee","type":"LinearAxis"},{"attributes":{"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"}},"id":"e323f4a8-4cdd-4bde-9b89-7f688032b8b1","type":"ResetTool"},{"attributes":{"overlay":{"id":"a6a7b31d-19a4-44db-b59a-ee9884fc60ab","type":"BoxAnnotation"},"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"}},"id":"ae661544-0221-45ab-89f2-1fbbd86db371","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"c50e7d3e-08e6-4c79-9936-40594cc2132f","type":"DataRange1d"},{"attributes":{"below":[{"id":"9b724131-f807-4c0a-a948-9f903369ad0d","type":"LinearAxis"}],"left":[{"id":"1f8ad51c-d625-4985-ad8b-fb5bf301d3ee","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9b724131-f807-4c0a-a948-9f903369ad0d","type":"LinearAxis"},{"id":"51a48bbf-f260-40ef-aee0-59f010834371","type":"Grid"},{"id":"1f8ad51c-d625-4985-ad8b-fb5bf301d3ee","type":"LinearAxis"},{"id":"71d72668-c5d9-461f-83a8-7b4eca02dac4","type":"Grid"},{"id":"a6a7b31d-19a4-44db-b59a-ee9884fc60ab","type":"BoxAnnotation"},{"id":"7017daac-8794-4bd7-bdd2-2d14f3c2ef22","type":"GlyphRenderer"}],"title":{"id":"91373007-b138-47cf-8c02-9403fcaf85b2","type":"Title"},"tool_events":{"id":"88f598b7-41a0-4b9b-897e-096d4aa81294","type":"ToolEvents"},"toolbar":{"id":"3ce40188-4ab3-430f-b120-7da335713784","type":"Toolbar"},"x_range":{"id":"a9342c55-e011-4410-a6d3-5eb544fc451e","type":"DataRange1d"},"y_range":{"id":"c50e7d3e-08e6-4c79-9936-40594cc2132f","type":"DataRange1d"}},"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7cabb93c-fe3b-403e-8219-195975af7e73","type":"BasicTickFormatter"},"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e68a14e-77f6-45e6-a68d-394cf79ba9ae","type":"BasicTicker"}},"id":"9b724131-f807-4c0a-a948-9f903369ad0d","type":"LinearAxis"},{"attributes":{"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"}},"id":"354c2ca1-2351-4986-85e8-384c1cfdb0ba","type":"PanTool"},{"attributes":{},"id":"88f598b7-41a0-4b9b-897e-096d4aa81294","type":"ToolEvents"},{"attributes":{"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"}},"id":"f4504cd6-3cc5-4302-b1cd-f8f1289f3c7e","type":"SaveTool"},{"attributes":{"callback":null},"id":"a9342c55-e011-4410-a6d3-5eb544fc451e","type":"DataRange1d"},{"attributes":{},"id":"9e68a14e-77f6-45e6-a68d-394cf79ba9ae","type":"BasicTicker"},{"attributes":{"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e68a14e-77f6-45e6-a68d-394cf79ba9ae","type":"BasicTicker"}},"id":"51a48bbf-f260-40ef-aee0-59f010834371","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"a031f552-7112-427f-a144-5576906e1949","subtype":"Figure","type":"Plot"},"ticker":{"id":"46328496-37e6-4b06-9775-b91fa5629b76","type":"BasicTicker"}},"id":"71d72668-c5d9-461f-83a8-7b4eca02dac4","type":"Grid"}],"root_ids":["a031f552-7112-427f-a144-5576906e1949"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f470686a-1546-4a50-a329-e5faa220e856","elementid":"1b3b913a-8a3a-4a66-b53f-1f1dcf143414","modelid":"a031f552-7112-427f-a144-5576906e1949"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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