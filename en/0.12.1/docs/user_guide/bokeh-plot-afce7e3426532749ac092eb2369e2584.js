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
      };var element = document.getElementById("fde87b79-7dd5-4fbc-a849-950315195221");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fde87b79-7dd5-4fbc-a849-950315195221' but no matching script tag was found. ")
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
              var docs_json = {"a8bcbbf6-35e7-4461-a762-f1a0630708c6":{"roots":{"references":[{"attributes":{"below":[{"id":"c27ff057-4e4a-4f8b-8a73-f6cbcfd88188","type":"LinearAxis"}],"left":[{"id":"7671f819-c9aa-4617-88fa-e5168b6c434b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c27ff057-4e4a-4f8b-8a73-f6cbcfd88188","type":"LinearAxis"},{"id":"b93c485d-2487-4c82-ad82-15758c97c01b","type":"Grid"},{"id":"7671f819-c9aa-4617-88fa-e5168b6c434b","type":"LinearAxis"},{"id":"c375f731-e9e7-4ce7-b4e1-a6522a21fa18","type":"Grid"},{"id":"9f95831f-37f1-427a-9fd2-a0809f504f94","type":"BoxAnnotation"},{"id":"844cf84f-e19a-4182-b67c-988fec5fae72","type":"GlyphRenderer"}],"title":{"id":"9239e738-11e9-44b9-940e-201663ebe8a2","type":"Title"},"tool_events":{"id":"227c83b4-53d8-4d04-8528-7ce231caa9ce","type":"ToolEvents"},"toolbar":{"id":"007c655a-fb33-4162-accb-3c268ccd09a7","type":"Toolbar"},"x_range":{"id":"4fc5184b-a53b-4e9e-af20-396a1d21a1cf","type":"DataRange1d"},"y_range":{"id":"0594b2ce-da73-42a8-a614-60f275fb9ce9","type":"DataRange1d"}},"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"9f95831f-37f1-427a-9fd2-a0809f504f94","type":"BoxAnnotation"},"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"}},"id":"f9fe0fa1-612b-4488-a365-a6ad5db4c842","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"}},"id":"a245bcd6-b1a7-4eef-8d8d-83b63643d0cf","type":"HelpTool"},{"attributes":{"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"}},"id":"69b1bec4-71a3-417b-83bb-a57ddb55230f","type":"ResetTool"},{"attributes":{},"id":"227c83b4-53d8-4d04-8528-7ce231caa9ce","type":"ToolEvents"},{"attributes":{},"id":"fcd8b55d-f423-4f23-a444-f3e06158c4a7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"fcd8b55d-f423-4f23-a444-f3e06158c4a7","type":"BasicTickFormatter"},"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"},"ticker":{"id":"72b8325c-a61d-4749-9b34-2fd37e6feb75","type":"BasicTicker"}},"id":"c27ff057-4e4a-4f8b-8a73-f6cbcfd88188","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"08675272-f03f-4596-8e46-ff89b54f7bae","type":"PanTool"},{"id":"83aecc66-17cd-44db-8682-d4b709d8d09b","type":"WheelZoomTool"},{"id":"f9fe0fa1-612b-4488-a365-a6ad5db4c842","type":"BoxZoomTool"},{"id":"5448843e-a577-4f21-a618-f366ddcac75a","type":"SaveTool"},{"id":"69b1bec4-71a3-417b-83bb-a57ddb55230f","type":"ResetTool"},{"id":"a245bcd6-b1a7-4eef-8d8d-83b63643d0cf","type":"HelpTool"}]},"id":"007c655a-fb33-4162-accb-3c268ccd09a7","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"a4d4e3fb-d562-43c5-9602-d34b1d0ad4d8","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"4fc5184b-a53b-4e9e-af20-396a1d21a1cf","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"9239e738-11e9-44b9-940e-201663ebe8a2","type":"Title"},{"attributes":{"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"}},"id":"08675272-f03f-4596-8e46-ff89b54f7bae","type":"PanTool"},{"attributes":{"callback":null},"id":"0594b2ce-da73-42a8-a614-60f275fb9ce9","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7b835e4-0df3-46f8-a901-ceae79785317","type":"Patch"},{"attributes":{"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"}},"id":"83aecc66-17cd-44db-8682-d4b709d8d09b","type":"WheelZoomTool"},{"attributes":{},"id":"17b047e4-545d-4cde-b38d-35dc3a75dddf","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17b047e4-545d-4cde-b38d-35dc3a75dddf","type":"BasicTickFormatter"},"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3ee8116-184c-4b22-8141-baec33602e85","type":"BasicTicker"}},"id":"7671f819-c9aa-4617-88fa-e5168b6c434b","type":"LinearAxis"},{"attributes":{"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"},"ticker":{"id":"72b8325c-a61d-4749-9b34-2fd37e6feb75","type":"BasicTicker"}},"id":"b93c485d-2487-4c82-ad82-15758c97c01b","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9f95831f-37f1-427a-9fd2-a0809f504f94","type":"BoxAnnotation"},{"attributes":{},"id":"b3ee8116-184c-4b22-8141-baec33602e85","type":"BasicTicker"},{"attributes":{"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"}},"id":"5448843e-a577-4f21-a618-f366ddcac75a","type":"SaveTool"},{"attributes":{"data_source":{"id":"a4d4e3fb-d562-43c5-9602-d34b1d0ad4d8","type":"ColumnDataSource"},"glyph":{"id":"c7b835e4-0df3-46f8-a901-ceae79785317","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"9be1c4df-19c3-4a85-bea7-121737c10677","type":"Patch"},"selection_glyph":null},"id":"844cf84f-e19a-4182-b67c-988fec5fae72","type":"GlyphRenderer"},{"attributes":{},"id":"72b8325c-a61d-4749-9b34-2fd37e6feb75","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2af17054-aa89-48bb-93b8-ad239cc66712","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3ee8116-184c-4b22-8141-baec33602e85","type":"BasicTicker"}},"id":"c375f731-e9e7-4ce7-b4e1-a6522a21fa18","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9be1c4df-19c3-4a85-bea7-121737c10677","type":"Patch"}],"root_ids":["2af17054-aa89-48bb-93b8-ad239cc66712"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"a8bcbbf6-35e7-4461-a762-f1a0630708c6","elementid":"fde87b79-7dd5-4fbc-a849-950315195221","modelid":"2af17054-aa89-48bb-93b8-ad239cc66712"}];
              
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