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
      };var element = document.getElementById("160f5439-1c7b-4533-81f3-9b05ec54c341");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '160f5439-1c7b-4533-81f3-9b05ec54c341' but no matching script tag was found. ")
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
              var docs_json = {"0c5daec0-469f-4736-b15c-816600a83ca9":{"roots":{"references":[{"attributes":{},"id":"250bd7cc-a13f-4137-9179-10b1502abb15","type":"BasicTicker"},{"attributes":{},"id":"d7b90dd7-99f8-4fac-bcfc-f08ebb8636ff","type":"BasicTickFormatter"},{"attributes":{},"id":"292b305d-b742-41ad-ab75-42fb12052f23","type":"BasicTicker"},{"attributes":{},"id":"df162ae9-927d-4aa6-b23d-c7e78f4f263e","type":"ToolEvents"},{"attributes":{"below":[{"id":"8ef550f4-5cdb-43ba-af57-aada08366d6b","type":"LinearAxis"}],"left":[{"id":"049f7f13-6a13-43a5-9391-5eb8ffa74b66","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8ef550f4-5cdb-43ba-af57-aada08366d6b","type":"LinearAxis"},{"id":"85ee34df-aab9-4132-8f6d-fb60393d0e7f","type":"Grid"},{"id":"049f7f13-6a13-43a5-9391-5eb8ffa74b66","type":"LinearAxis"},{"id":"902c962b-40a0-4ede-ba6e-dc47e7203686","type":"Grid"},{"id":"fca19d31-4c4f-4674-a782-c44c454e3707","type":"BoxAnnotation"},{"id":"836e1187-d317-4e32-9139-81600c4f517e","type":"GlyphRenderer"}],"title":{"id":"7267383c-9636-4a6d-b7d2-5b8d7611494e","type":"Title"},"tool_events":{"id":"df162ae9-927d-4aa6-b23d-c7e78f4f263e","type":"ToolEvents"},"toolbar":{"id":"94826697-0b17-4247-ace2-fc90db8f9c91","type":"Toolbar"},"x_range":{"id":"1ccace66-c8dc-4af2-9d85-80e59bb6f791","type":"DataRange1d"},"y_range":{"id":"94b65866-d80c-40b6-868e-a479f2d2c3da","type":"DataRange1d"}},"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"94b65866-d80c-40b6-868e-a479f2d2c3da","type":"DataRange1d"},{"attributes":{"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"}},"id":"c3bf0e42-6add-4626-af42-e139c4c48539","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fca19d31-4c4f-4674-a782-c44c454e3707","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"250bd7cc-a13f-4137-9179-10b1502abb15","type":"BasicTicker"}},"id":"902c962b-40a0-4ede-ba6e-dc47e7203686","type":"Grid"},{"attributes":{"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"292b305d-b742-41ad-ab75-42fb12052f23","type":"BasicTicker"}},"id":"85ee34df-aab9-4132-8f6d-fb60393d0e7f","type":"Grid"},{"attributes":{"formatter":{"id":"fe2c8f2c-0c98-4e09-8a55-ac52ba227691","type":"BasicTickFormatter"},"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"292b305d-b742-41ad-ab75-42fb12052f23","type":"BasicTicker"}},"id":"8ef550f4-5cdb-43ba-af57-aada08366d6b","type":"LinearAxis"},{"attributes":{},"id":"fe2c8f2c-0c98-4e09-8a55-ac52ba227691","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"fca19d31-4c4f-4674-a782-c44c454e3707","type":"BoxAnnotation"},"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"}},"id":"312ecece-4941-4d50-9268-14397e559c90","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a29f7b73-6b73-4e0f-8bca-472c8b9e59cf","type":"PanTool"},{"id":"a9831575-d67f-438d-9ede-6f07389615b5","type":"WheelZoomTool"},{"id":"312ecece-4941-4d50-9268-14397e559c90","type":"BoxZoomTool"},{"id":"e7014872-3a7f-4be4-92b8-76ff7e19472b","type":"SaveTool"},{"id":"c3bf0e42-6add-4626-af42-e139c4c48539","type":"ResetTool"},{"id":"51bc0bd2-503d-45bc-8388-643755e7fdcb","type":"HelpTool"}]},"id":"94826697-0b17-4247-ace2-fc90db8f9c91","type":"Toolbar"},{"attributes":{"formatter":{"id":"d7b90dd7-99f8-4fac-bcfc-f08ebb8636ff","type":"BasicTickFormatter"},"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"250bd7cc-a13f-4137-9179-10b1502abb15","type":"BasicTicker"}},"id":"049f7f13-6a13-43a5-9391-5eb8ffa74b66","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"7267383c-9636-4a6d-b7d2-5b8d7611494e","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"c51884f0-4c0a-4eb3-a1cf-5e46fdcbda68","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7bf0bbae-4df3-4063-8c1d-823db39840e2","type":"Square"},{"attributes":{"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"}},"id":"51bc0bd2-503d-45bc-8388-643755e7fdcb","type":"HelpTool"},{"attributes":{"data_source":{"id":"c51884f0-4c0a-4eb3-a1cf-5e46fdcbda68","type":"ColumnDataSource"},"glyph":{"id":"42a194eb-eb9f-44ee-9c2c-b6efe38b48e3","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"7bf0bbae-4df3-4063-8c1d-823db39840e2","type":"Square"},"selection_glyph":null},"id":"836e1187-d317-4e32-9139-81600c4f517e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1ccace66-c8dc-4af2-9d85-80e59bb6f791","type":"DataRange1d"},{"attributes":{"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"}},"id":"e7014872-3a7f-4be4-92b8-76ff7e19472b","type":"SaveTool"},{"attributes":{"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"}},"id":"a9831575-d67f-438d-9ede-6f07389615b5","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d","subtype":"Figure","type":"Plot"}},"id":"a29f7b73-6b73-4e0f-8bca-472c8b9e59cf","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"42a194eb-eb9f-44ee-9c2c-b6efe38b48e3","type":"Square"}],"root_ids":["7bc5f187-bff7-429f-96c3-d87b3c6d6c8d"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"0c5daec0-469f-4736-b15c-816600a83ca9","elementid":"160f5439-1c7b-4533-81f3-9b05ec54c341","modelid":"7bc5f187-bff7-429f-96c3-d87b3c6d6c8d"}];
              
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