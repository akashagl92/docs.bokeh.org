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
      };var element = document.getElementById("33289e28-b749-4be3-b85e-8fdda4ab4987");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '33289e28-b749-4be3-b85e-8fdda4ab4987' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
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
              var docs_json = {"8cae14b9-8ad6-41ec-96e7-7a90c99729fe":{"roots":{"references":[{"attributes":{},"id":"60343ee4-bc1e-4d94-a114-6be6e50910a1","type":"BasicTickFormatter"},{"attributes":{},"id":"3b694ec1-f1f8-41e9-b380-558f448648fa","type":"BasicTickFormatter"},{"attributes":{},"id":"91b8d882-4e9f-4a59-afe8-b79a0dc9d737","type":"BasicTicker"},{"attributes":{"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"}},"id":"ab0d4560-4e43-4066-9782-30d62296db51","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"90bcaf55-cd7c-40c6-9f67-cf096829dc9a","type":"BoxAnnotation"},"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"}},"id":"7e9a1dba-7dbb-43f2-8b87-43686b063c60","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"0a2825e5-4e8d-4913-91aa-9eb9b10d7607","type":"ColumnDataSource"},"glyph":{"id":"943ad5e5-7d3a-4a9e-9f78-c2106b53a0f3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"aee0d10f-26f8-42ac-a563-ec8317b32240","type":"Circle"},"selection_glyph":null},"id":"6b1881dc-a7b6-4483-982a-dbfe05dd1b99","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cf77c987-48bf-444f-9d99-a01443e00436","type":"PanTool"},{"id":"ab0d4560-4e43-4066-9782-30d62296db51","type":"WheelZoomTool"},{"id":"7e9a1dba-7dbb-43f2-8b87-43686b063c60","type":"BoxZoomTool"},{"id":"11db87b6-0125-48b7-ba7a-ed115bda5464","type":"SaveTool"},{"id":"7b1685f4-a141-405e-8fd1-2f774afbecae","type":"ResetTool"},{"id":"2947a0b2-ee31-48db-910f-732a0d260bd7","type":"HelpTool"}]},"id":"8c35b4de-bb17-4010-9eb4-61d3db65d8b7","type":"Toolbar"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"60343ee4-bc1e-4d94-a114-6be6e50910a1","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a34757b-d136-4d7c-aafe-874ae18e9531","type":"BasicTicker"}},"id":"038060be-c3db-43a9-bb35-1c2bb1c58ba6","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"0f737778-2a10-4e0d-96cd-b74a9de88ca8","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a34757b-d136-4d7c-aafe-874ae18e9531","type":"BasicTicker"}},"id":"5645f5ee-8018-491a-9d22-f2d63959bd17","type":"Grid"},{"attributes":{"callback":null},"id":"b9a3f668-f063-4ec8-8efa-cafbd8dcedae","type":"DataRange1d"},{"attributes":{"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"}},"id":"11db87b6-0125-48b7-ba7a-ed115bda5464","type":"SaveTool"},{"attributes":{},"id":"9a34757b-d136-4d7c-aafe-874ae18e9531","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"943ad5e5-7d3a-4a9e-9f78-c2106b53a0f3","type":"Circle"},{"attributes":{"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"},"ticker":{"id":"91b8d882-4e9f-4a59-afe8-b79a0dc9d737","type":"BasicTicker"}},"id":"f8dd30b4-f21e-4a35-9667-6d04f1bca7bd","type":"Grid"},{"attributes":{"below":[{"id":"7f6cf14b-2db4-48b6-a654-37cee97026e2","type":"LinearAxis"}],"left":[{"id":"038060be-c3db-43a9-bb35-1c2bb1c58ba6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7f6cf14b-2db4-48b6-a654-37cee97026e2","type":"LinearAxis"},{"id":"f8dd30b4-f21e-4a35-9667-6d04f1bca7bd","type":"Grid"},{"id":"038060be-c3db-43a9-bb35-1c2bb1c58ba6","type":"LinearAxis"},{"id":"5645f5ee-8018-491a-9d22-f2d63959bd17","type":"Grid"},{"id":"90bcaf55-cd7c-40c6-9f67-cf096829dc9a","type":"BoxAnnotation"},{"id":"6b1881dc-a7b6-4483-982a-dbfe05dd1b99","type":"GlyphRenderer"}],"title":{"id":"0f737778-2a10-4e0d-96cd-b74a9de88ca8","type":"Title"},"tool_events":{"id":"06014bc4-f7bf-4125-b9b1-6096ebc69c82","type":"ToolEvents"},"toolbar":{"id":"8c35b4de-bb17-4010-9eb4-61d3db65d8b7","type":"Toolbar"},"x_range":{"id":"b9a3f668-f063-4ec8-8efa-cafbd8dcedae","type":"DataRange1d"},"y_range":{"id":"e818c244-eb7b-416d-896b-4d390be978d1","type":"DataRange1d"}},"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"}},"id":"7b1685f4-a141-405e-8fd1-2f774afbecae","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aee0d10f-26f8-42ac-a563-ec8317b32240","type":"Circle"},{"attributes":{},"id":"06014bc4-f7bf-4125-b9b1-6096ebc69c82","type":"ToolEvents"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"3b694ec1-f1f8-41e9-b380-558f448648fa","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"},"ticker":{"id":"91b8d882-4e9f-4a59-afe8-b79a0dc9d737","type":"BasicTicker"}},"id":"7f6cf14b-2db4-48b6-a654-37cee97026e2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e818c244-eb7b-416d-896b-4d390be978d1","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0a2825e5-4e8d-4913-91aa-9eb9b10d7607","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"90bcaf55-cd7c-40c6-9f67-cf096829dc9a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"}},"id":"cf77c987-48bf-444f-9d99-a01443e00436","type":"PanTool"},{"attributes":{"plot":{"id":"50df09ca-267b-481c-9bcf-83f529b6466e","subtype":"Figure","type":"Plot"}},"id":"2947a0b2-ee31-48db-910f-732a0d260bd7","type":"HelpTool"}],"root_ids":["50df09ca-267b-481c-9bcf-83f529b6466e"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8cae14b9-8ad6-41ec-96e7-7a90c99729fe","elementid":"33289e28-b749-4be3-b85e-8fdda4ab4987","modelid":"50df09ca-267b-481c-9bcf-83f529b6466e"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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